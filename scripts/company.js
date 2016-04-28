jQuery(function($){
	var wpAdminBarHeight = (Urb.$wpadminbar) ? Urb.$wpadminbar.outerHeight() : 0;
	var navBarWithAdminBarHeight = Urb.$pageNavigation.outerHeight() + wpAdminBarHeight;

	Urb.centerMap = function() {
		if( Urb.$map.data('map') ) {
			// TODO: figure out why this needs a setTimeout
			setTimeout(function(){
				Urb.$map.data('map').setCenter( Urb.$map.data('marker').getPosition() );
				Urb.$map.data('map').panTo( Urb.$map.data('marker').getPosition() );
			}, 250);
		}
	};

	Urb.scrollMap = function() {
		if( Urb.$map.hasClass('open') && !Urb.$map.hasClass('animating') ) {
			if( Urb.$mapCanvas.offset().top > Urb.scrollPosition + Urb.$window.height() ) {
				Urb.$map.removeClass('open');
				$('.map-container, .map-canvas', Urb.$map).removeAttr('style');
			}
		}

		if(!Urb.$map.data('map') && Urb.$window.scrollTop() > $('#contact').offset().top) {
			var $mapScript = $('<script />');
			$mapScript.attr('type', 'text/javascript');
			$mapScript.attr('async', true);
			$mapScript.attr('src', "http://maps.google.com/maps/api/js?callback=Urb.setupMap");
			Urb.$body.append($mapScript);
			Urb.$map.data( 'map', true );
			//Urb.setupMap();
		}
	};

	Urb.setupBusinessHours = function() {
		var today = new Date();
		var dayOfWeek = today.getDay() + 1;

		$('dt:nth-of-type(' + dayOfWeek + '), dd:nth-of-type(' + dayOfWeek + ')', Urb.$businesHours).addClass('today');

		$('dt', Urb.$businessHours).hover(function(){
			$(this).toggleClass('hover').next('dd').toggleClass('hover');
		});

		$('dd', Urb.$businessHours).hover(function(){
			$(this).toggleClass('hover').prev('dt').toggleClass('hover');
		});
	};

	Urb.setupContactForm = function() {
		Urb.$contactForm.attr('novalidate', true);
		Urb.$contactForm.on('submit', Urb.submitContactForm);

		var $emailAddress = Urb.$contactForm.find('#contact_email_address');
		Urb.$contactForm.data('email_address', $emailAddress);

		$emailAddress.on('keyup',function(){
			$emailAddress.closest('.field').removeClass('error').removeAttr('title');
		});
	};

	Urb.setupMap = function() {
		if( !google ) {
			$('.site-map').remove();
		}

		Urb.$mapCanvas.appendTo(Urb.$mapContainer);

		var mapOptions = {
			disableDefaultUI   : true,
			draggable          : false,
			mapTypeId          : google.maps.MapTypeId.ROADMAP,
			mapTypeControl     : false,
			//mapTypeControlOptions: {
			//	position: google.maps.ControlPosition.LEFT_BOTTOM,
			//	style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR
			//},
			overviewMapControl : true,
			rotateControl      : false,
			scaleControl       : false,
			scrollwheel        : false,
			streetViewControl  : false,
			zoom               : 14,
			zoomControl        : true,
			zoomControlOptions : {
				position : google.maps.ControlPosition.RIGHT_BOTTOM
			}
		};

		if( Urb.$map.data('latitude') && Urb.$map.data('longitude') )
		{
			mapOptions.center = new google.maps.LatLng( Urb.$map.data('latitude'), Urb.$map.data('longitude') );

			$.getJSON(
				'/wp-content/themes/urbanrest-wordpress-theme/styles/map.json',
				function( mapStyles ) {
					mapOptions.styles = mapStyles;

					var map = new google.maps.Map(Urb.$mapCanvas.get(0), mapOptions);
					var marker = new google.maps.Marker({
						icon: {
							labelOrigin: {
								x: 30,
								y: 19
							},
							url: 'http://maps.google.com/mapfiles/kml/paddle/grn-blank.png'
						},
						label: {
							fontFamily: 'FontAwesome',
							fontSize: '22px',
							text: '\uf0fc'
						},
						map: map,
						position: mapOptions.center
					});
					var infoWindow = new google.maps.InfoWindow({ content: Urb.$address.html() });

					Urb.$map.data( 'map', map );
					Urb.$map.data( 'marker', marker );
					Urb.$map.data( 'infoWindow', infoWindow );

					google.maps.event.addListener(marker, 'click', function(){ infoWindow.open( map, marker ); });
					infoWindow.open( map, marker );
				}
			);
		}

		// Add title attribute to map icons
		// Janky solution, but I don't have time to figure out a better way right now
		// TODO: get this into PHP using a Walker
		$('#menu-map-icons a').each(function() {
			$(this).attr('title', this.textContent);
		});
	};

	Urb.handleContactFormResponse = function(response) {
		console.log(response);
		console.log(response.responseText);
		if(response && response.success) {
			Urb.loading( $('button[type="submit"]', Urb.$contactForm), true );
		}
	};

	Urb.submitContactForm = function(e) {
		e.preventDefault();
		
		if( Urb.validateContactForm() ) {
			Urb.loading( $('button[type="submit"]', Urb.$contactForm) );
			
			$.ajax({
				url      : Urb.$contactForm.attr('action'),
				data     : Urb.$contactForm.serialize(),
				dataType : 'json',
				method   : Urb.$contactForm.attr('method'),
				complete : Urb.handleContactFormResponse
			});
		}
	};

	Urb.toggleMap = function(event) {
		event.preventDefault();

		if(!Urb.$map.data('map')) {
			Urb.setupMap();
		}

		Urb.$map.toggleClass('open');
		
		if( Urb.$map.hasClass('open') ) {
			Urb.$map.addClass('animating');
			var canvasSize = (Urb.$window.outerHeight() - navBarWithAdminBarHeight - $('h3', Urb.$map).outerHeight()).toFixed(0);
			$('.map-container, .map-canvas', Urb.$map).css('height', canvasSize + 'px');
			//Urb.$body.animate(
			$('html,body').animate(
				{ scrollTop: Urb.$window.scrollTop() + canvasSize },
				666,
				function() {
					Urb.$map.removeClass('animating');
				}
			);
		} else {
			$('.map-container, .map-canvas', Urb.$map).removeAttr('style');
		}
	};

	Urb.validateContactForm = function() {
		var $emailAddress = Urb.$contactForm.data('email_address');

		if( $emailAddress.val().length < 3 || $emailAddress.val().indexOf('@') < 0)
		{
			$emailAddress.closest('.field').addClass('error').attr('title', "Valid email address required.");
			return false;
		}

		return true;
	};

	Urb.$window.on('scroll', Urb.scrollMap);
	Urb.$window.on('load', Urb.setupBusinessHours);
	//Urb.$window.on('load', Urb.setupMap);
	Urb.$mapLink.on('click', Urb.toggleMap);
	Urb.$window.on('load', Urb.setupContactForm);
	Urb.$window.on('resize', Urb.centerMap);
});