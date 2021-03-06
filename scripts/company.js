jQuery(function($){
	var wpAdminBarHeight = (Urb.$wpadminbar) ? Urb.$wpadminbar.outerHeight() : 0;
	var navBarWithAdminBarHeight = Urb.$pageNavigation.outerHeight() + wpAdminBarHeight;

	Urb.centerMap = function() {
		Urb.log('Urb.centerMap');

		if( Urb.$map.hasClass('open') ) {
			Urb.$map.data('map').setCenter( Urb.$map.data('marker').getPosition() );
			Urb.$map.data('map').panTo( Urb.$map.data('marker').getPosition() );
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
			$mapScript.attr('src', "https://maps.google.com/maps/api/js?key=" + _URB.googleBrowserMapApiKey + "&callback=Urb.setupMap");
			Urb.$body.append($mapScript);
			Urb.$map.data( 'map', true );
		}
	};

	Urb.setupBusinessHours = function() {
		Urb.log('Urb.setupBusinessHours');

		var today = new Date();
		var days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
		var dayOfWeek = days[today.getDay()];
		
		$('dt.' + dayOfWeek + ', dd.' + dayOfWeek, Urb.$businesHours).addClass('today');

		$('dt', Urb.$businessHours).hover(function(){
			$(this).toggleClass('hover').next('dd').toggleClass('hover');
		});

		$('dd', Urb.$businessHours).hover(function(){
			$(this).toggleClass('hover').prev('dt').toggleClass('hover');
		});
	};

	Urb.setupContactForm = function() {
		Urb.log('Urb.setupContactForm');
		
		Urb.$contactForm.attr('novalidate', true);
		Urb.$contactForm.on('submit', Urb.submitContactForm);

		$('.field input, .field textarea', Urb.$contactForm).on('keyup', function() {
			$(this).closest('.field').toggleClass('active', this.value.length > 0 || $(this).is(':focus'));
		}).on('focus', function() {
			$(this).closest('.field').addClass('active');
		}).on('blur', function() {
			if(this.value.length == 0) {
				$(this).closest('.field').removeClass('active');
			}
		});

		var $emailAddress = Urb.$contactForm.find('#contact_email_address');
		Urb.$contactForm.data('email_address', $emailAddress);

		$emailAddress.on('keyup',function(){
			$emailAddress.closest('.field').removeClass('error').removeAttr('title');
		});

		var $message = Urb.$contactForm.find('#contact_message');
		$message.on('focus keyup', function() {
			if(this.clientHeight < this.scrollHeight) {
				$(this).css('height', this.scrollHeight + 'px');
			}
		}).on('blur', function() {
			$(this).removeAttr('style');
		});
	};

	Urb.setupMap = function() {
		Urb.log('Urb.setupMap');

		if( !google ) {
			$('.site-map').remove();
		}

		Urb.$mapCanvas.appendTo(Urb.$mapContainer);

		var mapOptions = {
			disableDefaultUI   : true,
			draggable          : true,
			mapTypeId          : google.maps.MapTypeId.ROADMAP,
			mapTypeControl     : false,
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
							url: 'https://maps.google.com/mapfiles/kml/paddle/grn-blank.png'
						},
						label: {
							fontFamily: 'FontAwesome',
							fontSize: '22px',
							text: '\uf0fc'
						},
						map: map,
						position: mapOptions.center
					});

					// Default Google Maps
					var externalMapLinkURL = 'https://www.google.com/maps/dir//2615+Wolcott+Avenue,+Ferndale,+Michigan,+48220';
					
					if(navigator.userAgent.match(/(Apple|Mac|iPhone|iPod|iPad)/i)) {
						externalMapLinkURL = 'http://maps.apple.com/?daddr=2615+Wolcott+Avenue,+Ferndale,+Michigan,+48220';
					}
					var infoWindow = new google.maps.InfoWindow({ content: Urb.$address.html() + '<br /><a class="map-external-link" href="' + externalMapLinkURL + '">Get Directions</a>' });

					Urb.$map.data( 'map', map );
					Urb.$map.data( 'marker', marker );
					Urb.$map.data( 'infoWindow', infoWindow );

					google.maps.event.addListener(marker, 'click', function(){ infoWindow.open( map, marker ); });
					infoWindow.open( map, marker );
				}
			);
		}
	};

	Urb.handleContactFormResponse = function(response) {
		Urb.trackEvent(
			window.location.pathname,
			'Contact',
			'Submit',
			1
		);

		if(response && response.success) {
			Urb.loading( $('button[type="submit"]', Urb.$contactForm), true );
			Urb.$contactForm[0].reset();
		}
	};

	Urb.submitContactForm = function(e) {
		Urb.log('Urb.submitContactForm');

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

	Urb.resizeMap = function() {
		if( Urb.$map.hasClass('open') ) {
			Urb.$map.addClass('animating');
			var canvasSize = (Urb.$window.outerHeight() - navBarWithAdminBarHeight - $('h3', Urb.$map).outerHeight()).toFixed(0);
			$('.map-container, .map-canvas', Urb.$map).css('height', canvasSize + 'px');
			
			Urb.centerMap();

			//Urb.$body.animate(
			$('html,body').animate(
				{ scrollTop: Urb.$window.scrollTop() + canvasSize },
				666,
				function() {
					Urb.$map.removeClass('animating');
				}
			);
		}
	};

	Urb.toggleMap = function(e) {
		Urb.log('Urb.toggleMap');

		e.preventDefault();

		$(e.target).blur();

		if(!Urb.$map.data('map')) {
			Urb.setupMap();
		}

		Urb.$map.toggleClass('open');
		
		if( Urb.$map.hasClass('open') ) {
			Urb.resizeMap();

			Urb.trackEvent(
				window.location.pathname,
				'Map',
				'Open',
				1
			);
		} else {
			$('.map-container, .map-canvas', Urb.$map).removeAttr('style');
		}
	};

	Urb.validateContactForm = function() {
		Urb.log('Urb.validateContactForm');

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
	Urb.$mapLink.on('click', Urb.toggleMap);
	Urb.$window.on('load', Urb.setupContactForm);
	Urb.$window.on('resize orientationchange', Urb.resizeMap);
});