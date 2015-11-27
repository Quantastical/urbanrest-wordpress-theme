jQuery( function( $ )
{
	var $body = $('body');
	var $document = $(document);
	var $html = $('html');
	var $window = $(window);
	var $mainContent = $('main');
	var $mainLogo = $('.site-title img');
	var $mainNavigation = $('#main-navigation');
	var $socialNavigation = $('#social-navigation');
	var $wpAdminBar = $('#wpadminbar');
	var $iframe = $('iframe');
	var $community = $('#community');
	var $subscribe = $('.subscribe', $community);
	var $company = $('#company');
	var $footer = $('#colophon');
	var $map = $('#map');
	var $mapCanvas = $( '#canvas', $map);
	var $mapContainer = $( '<div class="map-container" />' ).appendTo( $mapCanvas );
   var $team = $('#team');
	var $address = $('address', $footer);
   var $hours = $('#hours');

	var navbarTop = ($wpAdminBar.length && $body.hasClass('admin-bar')) ? $wpAdminBar.outerHeight() : 0;
	var mainLogoSize = 0;
	var mainLogoMargin = 0;
	
	$html.removeClass('no-javascript').addClass('javascript ready');

	// Add logo image (scroll to top) to main menu
	var $mainMenuLogoImage = $('<img src="/wp-content/themes/urbanrest-wordpress-theme/images/logo-urbanrest-text-inverted-min.png" />');
	var $mainMenuLogo = $('<li class="menu-item menu-item-logo"></li>');
	$('<a href="#"></a>').append($mainMenuLogoImage).appendTo($mainMenuLogo);
	$('.menu li:nth-child(2)', $mainNavigation).after($mainMenuLogo);

	var $enteredViewport = $('[data-entered-viewport]');
	$enteredViewport.on('enteredViewport', function() {
		var $this = $(this);
		var className = $this.data('entered-viewport') || 'visible';
		$this.addClass(className);
	});
	var triggerPoint = $window.height() * 0.85;
	var scrollHandler = function() {
		// Trigger event when object enters viewport
		$enteredViewport = $.grep($enteredViewport, function(element){
			var $this = $(element);
			if( $window.scrollTop() >= $this.offset().top - triggerPoint ) {
				$this.trigger('enteredViewport');
				return false;
			}
			return true;
		});

		var y = $document.scrollTop();

/*
		// Scale & Change Logo
		if(y < $window.height() ) {
			var viewportHeightPercent = y / ($window.height() - navbarTop);
			viewportHeightPercent = viewportHeightPercent < 1 ? viewportHeightPercent : 1;

			// Scale Big Logo
			$mainLogo.css({
//				'background-size' : Math.round((mainLogoSize / 2) + (mainLogoSize / 2) * (1 - y / $window.height())) + '%',
				'background-size' : (mainLogoSize - viewportHeightPercent * 30).toFixed(2) + '%',
				'opacity' : (1 - viewportHeightPercent).toFixed(2),
				'top' : (y * 0.33).toFixed(2) + 'px',
			});

			// Scale Menu Logo
			$mainMenuLogoImage.css({
				'width': (6 * viewportHeightPercent).toFixed(2) + 'em',
				'margin': mainLogoMargin + ' ' + (0.75 * viewportHeightPercent).toFixed(2) + 'em 0',
				'opacity' : (viewportHeightPercent).toFixed(2),
			});
		} else if($mainMenuLogoImage.css('opacity').toString() !== '1') {
			$mainMenuLogoImage.css({
				'width': '6em',
				'margin': mainLogoMargin + ' 0.75em 0',
				'opacity' : '1',
			});
		}
*/
/*
		// Scroll Main Navigation Bar
		if(y < $window.height() - $mainNavigation.outerHeight() - navbarTop) {
			$mainNavigation.removeClass('stuck-top').css({
				'bottom': 'auto',
				'top': ($window.height() - $mainNavigation.outerHeight() - y).toFixed(2) + 'px',
			});
		} else {
			$mainNavigation.addClass('stuck-top');
		}
*/
/*
		// Scale & Hide Social Navigation Buttons
		if($socialNavigation.is(':visible')) {
			if( y > $window.height() / 5) {
				$socialNavigation.addClass('hidden');
			} else {
				$socialNavigation.css({
					'opacity' : (1 - y / ($window.height() / 5)).toFixed(2),
					'margin-top': (-1 * y / 5).toFixed() + 'px',
					'transform': 'scale(' + (1 - 0.2 * y / ($window.height() / 5)).toFixed(2) + ')'
				});
			}
		} else {
			if( y < $window.height() / 5) {
				$socialNavigation.removeClass('hidden');
			}
		}
*/
		// Parallax Backgrounds
		if($body.length)
		{
//			$body.css({
//				'background-position': 'center ' + (-1 * 25 * y / $window.height()).toFixed(2) + 'vh',
//			});
		}

		if($mainContent.length)
		{
			//$mainContent.css({
			//	'background-position': 'center ' + (-1 * 25 * (y - $mainContent.offset().top) / $window.height()).toFixed(2) + 'vh',
			//});
		}

		if($community.length)
		{
			//$community.css({
			//	'background-position': 'center ' + (-1 * 25 * (y - $community.offset().top) / $window.height()).toFixed(2) + 'vh',
			//});
		}
	};
	$document.on('scroll', scrollHandler);
	scrollHandler();

	// For when the screen size changes or rotates
	var sizeHandler = function(){
		$mainLogo.removeAttr('style');
		mainLogoSize = ($window.outerWidth() > 1024) ? 50 : ($window.outerWidth() > 768) ? 65 : 80;
		mainLogoMargin = $window.outerWidth() > 768 ? '-0.2em' : '-25px';
		
		if($community.length)
		{
			$community.css({
				'padding-bottom': $subscribe.outerHeight() + 'px'
			});
		}

		if($subscribe.length)
		{
			$subscribe.css({
				'bottom': '0',
				'position': 'absolute'
			});
		}

		if(navbarTop > 0) {
			$socialNavigation.css({'top': 'calc(5% + ' + navbarTop + 'px)'});
		} else {
			$socialNavigation.css({'top': '5%'});
		}
	};
	$window.on('resize orientationchange', function() { sizeHandler(); scrollHandler(); } );
	sizeHandler();

	// Iframe Sizing
	var iframeHandler = function( )
	{
		$iframe.css(
		{
			height: $iframe.outerWidth() * $iframe.attr('height') / $iframe.attr('width') + 'px'
		} );
	};
	$window.on( 'load resize orientationchange', iframeHandler );
	iframeHandler();

	// Google Maps
/*
	var mapOptions = {
		disableDefaultUI: true,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		mapTypeControl: false,
		//mapTypeControlOptions: {
		//	position: google.maps.ControlPosition.LEFT_BOTTOM,
		//	style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR
		//},
		overviewMapControl: true,
		rotateControl: false,
		scaleControl: false,
		scrollwheel: false,
		streetViewControl: false,
		zoom: 14,
		zoomControl: true,
		zoomControlOptions: {
			position: google.maps.ControlPosition.RIGHT_BOTTOM
		},
		styles:[
    {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "all",
        "stylers": [
            {
                "weight": "1.00"
            },
            {
                "hue": "#ff8e00"
            },
            {
                "saturation": "-42"
            },
            {
                "lightness": "17"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "labels.text",
        "stylers": [
            {
                "saturation": "-24"
            },
            {
                "lightness": "-11"
            },
            {
                "hue": "#ff7300"
            },
            {
                "gamma": "1"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "gamma": "1.0"
            },
            {
                "lightness": "0"
            }
        ]
    },
    {
        "featureType": "administrative.neighborhood",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": "33"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "onclick"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.attraction",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.government",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.medical",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "saturation": "-52"
            },
            {
                "hue": "#55ff00"
            }
        ]
    },
    {
        "featureType": "poi.place_of_worship",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.school",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.sports_complex",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#ffa800"
            },
            {
                "saturation": "-77"
            },
            {
                "lightness": "13"
            },
            {
                "visibility": "on"
            },
            {
                "weight": "1.50"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": "-100"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "weight": "5"
            },
            {
                "saturation": "0"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.icon",
        "stylers": [
            {
                "hue": "#0053ff"
            },
            {
                "saturation": "-58"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "5"
            },
            {
                "lightness": "13"
            },
            {
                "hue": "#ff8e00"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "saturation": "-31"
            },
            {
                "color": "#968666"
            },
            {
                "lightness": "44"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "saturation": "-39"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#ffb100"
            },
            {
                "lightness": "0"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "weight": "1"
            },
            {
                "gamma": "1.00"
            },
            {
                "saturation": "-88"
            },
            {
                "lightness": "-10"
            },
            {
                "hue": "#ff9f00"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    }
]
	};

	if( $map.data('latitude') && $map.data('longitude') )
	{
		mapOptions.center = new google.maps.LatLng( $map.data('latitude'), $map.data('longitude') );
	}
	else
	{
		mapOptions.center = new google.maps.LatLng( 0, 0 );
	}

	var map = new google.maps.Map( $mapContainer.get(0), mapOptions );
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

	var infowindow = new google.maps.InfoWindow({ content: $address.html() });
	google.maps.event.addListener(marker, 'click', function(){ infowindow.open( map, marker ); });
	infowindow.open( map, marker );

	$('h3', $map).on('click', function(){
		var $h3 = $(this);
		$h3.toggleClass('open');
		$mapCanvas.toggleClass('open');

		var targetOffset = ($h3.hasClass('open')) ? $body.scrollTop() + 500 : $body.scrollTop() - 500;
		$body.animate({
			scrollTop: targetOffset
		}, 666);
	});
*/
	
	// Analytics
	var triggerAnalytic = function( e )
	{
		if( typeof ga !== 'function' )
		{
			return;
		}

		var $link = $( e.target ).closest( 'a' );
		if( $link.length != 1 || window.location.host == $link[0].host || $link.attr('onclick') )
		{
			return;
		}

		e.preventDefault( );
		var href = $link[0].href;
		var route = function( ) {
			document.location = href;
		};

		if( $link.data('event-action') )
		{
			ga( 'send',
			{
				'hitType'       : 'event',
				'eventCategory' : window.location.pathname,
				'eventAction'   : $link.data('event-action'),
				'eventLabel'    : $link.data('event-label'),
				'hitCallback'   : route
			} );
		}
		else
		{
			ga( 'send',
			{
				'hitType'       : 'event',
				'eventCategory' : window.location.pathname,
				'eventAction'   : 'Outbound',
				'eventLabel'    : href,
				'hitCallback'   : route
			} );
		}

		setTimeout( route, 666 );
	}
	$('a').on('click', triggerAnalytic);

/*
	// Scroll to anchored links
	$document.on('click', 'a[href^="#"]', function(e) {
		e.preventDefault();
		var href = $.attr(this, 'href');
		var targetOffset = 0;
		if(href !== '#' && $(href).length !== 0){
			targetOffset = $(href).offset().top;
		} else {
			href = '';
		}

		$body.animate({
			scrollTop: targetOffset
		}, 666, function () {
			window.location.hash = href;
		});
		return false;
	});
*/

	// Team Mobile Nav
	$('.people .menu-item').first().addClass('active');
	$('.people', $team).on('click', function(event) {
		if(event.target.tagName.toLowerCase() !== 'img') {
			var $currentPerson = $('.people > .menu-item.active');
			if($currentPerson.length == 0) {
				$currentPerson = $('.people > .menu-item:first-child');
			}
			$currentPerson.removeClass('active');
			if(event.pageX > $window.width() / 2) {
				if($currentPerson.next().length){
					$currentPerson.next().addClass('active');
				} else {
					$('.menu-item', $currentPerson.parent()).first().addClass('active');
				}
			} else {
				if($currentPerson.prev().length){
					$currentPerson.prev().addClass('active');
				} else {
					$('.menu-item', $currentPerson.parent()).last().addClass('active');
				}
			}
		}
	});

/*
	// Business Hours
	var today = new Date();
	var dayOfWeek = today.getDay() + 1;
	$('dt:nth-of-type(' + dayOfWeek + '), dd:nth-of-type(' + dayOfWeek + ')', $hours).addClass('today');
	$('dt', $hours).hover(function(){
		$(this).toggleClass('hover').next('dd').toggleClass('hover');
	});
	$('dd', $hours).hover(function(){
		$(this).toggleClass('hover').prev('dt').toggleClass('hover');
	});
*/

	// Social Icons
	$('.social-menu a').off('click').click(function(e){
		e.preventDefault();
		var $link = $(this);
		switch($link.text().toLowerCase()){
			case 'twitter':
				var $twitterModal = $('.modal-twitter');
				if($twitterModal.length == 0) {
					$twitterModal = $('<div class="modal modal-twitter" />');
					$body.append($twitterModal);
					
					twttr.widgets.createTimeline(
						'647989566436188160',
						$twitterModal.get(0),
						{
							screenName: 'UrbanrestBeer',
							width: '500',
							height: '500'
						}).then(function (el) {
							$twitterModal.urbanrestModal();
							$twitterModal.data('urbanrestModal').show();
					});
                    /*
					$.get('/wp-content/themes/urbanrest-wordpress-theme/api/twitter.php', function(response){
						$twitterModal.append(response);
						$twitterModal.urbanrestModal();
						$body.append($twitterModal);
						$twitterModal.data('urbanrestModal').show();
					});
                    */
					//$twitterModal.append('<a class="twitter-timeline" href="https://twitter.com/Quantastical" data-widget-id="647989566436188160" data-chrome="noheader nofooter">Tweets by @Quantastical</a>');
					//$twitterModal.append('<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?\'http\':\'https\';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>');
					//$twitterModal.urbanrestModal();
					//$body.append($twitterModal);
				} else {
					$twitterModal.data('urbanrestModal').show();
				}
				//$twitterModal.data('urbanrestModal').show();
				//$('.twitter-timeline').show();
			break;

			default:
				triggerAnalytic(e);
		}
	});
    
	// MailChimp Validation
	var $email = $('#mce-EMAIL');
	var $emailHelp = $email.siblings('.help');
	$email.on('keyup',function(){
		$email.removeClass('error');
		$emailHelp.addClass('hidden');
	});

	$('#mc_embed_signup').on('submit',function(){
		if( $email.val().length < 3 || $email.val().indexOf('@') < 0)
		{
			$email.addClass('error');
			$emailHelp.removeClass('hidden');
			return false;
		}

		if( typeof ga === 'function' )
		{
			ga( 'send',
			{
				'hitType'       : 'event',
				'eventCategory' : window.location.pathname,
				'eventAction'   : 'Subscribe',
				'eventLabel'    : 'MailChimp'
			} );
		}

		return true;
	});
} );