jQuery( function( $ ) {
	window.Urb = {
		logging : false,

		$document : $(document),
		$window   : $(window),

		$body : $('body'),
		$html : $('html').removeClass('no-javascript').addClass('javascript'),

		$wpadminbar       : $('#wpadminbar'),
		$logo             : $('.site .site-header .site-title .site-logo'),
		$menuLogo         : $('<img src="/wp-content/themes/urbanrest-wordpress-theme/images/logo-urbanrest-text-inverted-min.png" />'),
		$siteNavigation   : $('.site .site-header .site-navigation'),
		$mainNavigation   : $('.site .site-header .site-navigation .main-navigation'),
		$pageNavigation   : $('.site .site-header .site-navigation .page-navigation'),
		$socialNavigation : $('.site .site-header .site-navigation .social-navigation'),
		$communityEvents  : $('.site .site-community .site-events .events'),
		$businessHours    : $('.site .site-company .site-location .business-hours'),
		$map              : $('.site .site-company .site-map'),
		$mapLink          : $('.site .site-company .site-map .map-link'),
		$mapContainer     : $('.site .site-company .site-map .map-container'),
		$mapCanvas        : $('<div class="map-canvas" />'),
		$contactForm      : $('.site .site-company .site-contact .contact-form'),
		$address          : $('.site .site-footer .site-address'),
		$viewport         : $('<div id="viewport" />'),

		scrollPosition : document.body.scrollTop,
	};

	Urb.loading = function( $element, completionSuccess ) {
		if(undefined !== completionSuccess) {
			var originalText = $element.data('loading');
			$element.data( 'loading', $element.text() ).text( originalText );
			$element.removeClass('loading').addClass( completionSuccess ? 'success' : 'failure').removeAttr('disabled');
		} else {
			var loadingText = $element.data('loading');
			$element.data( 'loading', $element.text() ).text( loadingText );
			$element.addClass('loading').attr('disabled', true);
		}
	};

	Urb.log = function(message) {
		if(Urb.logging) {
			console.log(message);
		}
	};

	Urb.setScrollPosition = function() {
		Urb.scrollPosition = Urb.$document.scrollTop();
	};

	Urb.updateViewport = function() {
		Urb.log('Urb.updateViewport');
		var viewportWidth = Urb.$window.outerWidth();
		Urb.$viewport.toggleClass('phone', viewportWidth <= 768);
		Urb.$viewport.toggleClass('tablet', viewportWidth > 768 && viewportWidth <= 1024);
		Urb.$viewport.toggleClass('desktop', viewportWidth > 1024);
	};

	Urb.setupViewport = function() {
		Urb.$body.append(Urb.$viewport);
		Urb.updateViewport();
	};

	Urb.$window.on('load', Urb.setupViewport);
	Urb.$window.on('resize orientationchange', Urb.updateViewport);
	Urb.$window.on('scroll', Urb.setScrollPosition);
});