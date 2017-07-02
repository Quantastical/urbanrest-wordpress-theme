jQuery(function($){
	Urb.setupAnalytics = function() {
		Urb.log('Urb.setupAnalytics');

		ga('create', _URB.googleAnalyticsTrackingID, 'auto');
		ga('set', 'anonymizeIp', true);

		Urb.trackPageView();
	};

	Urb.setupEvents = function() {
		Urb.log('Urb.setupEvents');

		$('a').on('click', function(e) {
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
				Urb.trackEvent(
					window.location.pathname,
					$link.data('event-action'),
					$link.data('event-label'),
					1,
					route
				);
			}
			else
			{
				Urb.trackEvent(
					window.location.pathname,
					'Outbound',
					href,
					1,
					route
				);
			}

			setTimeout( route, 666 );
		});
	};

	Urb.trackEvent = function(eventCategory, eventAction, eventLabel, eventValue, hitCallback) {
		Urb.log('Urb.trackEvent');
		
		ga('send', {
			'hitType'       : 'event',
			'eventCategory' : eventCategory,
			'eventAction'   : eventAction,
			'eventLabel'    : eventLabel,
			'eventValue'    : eventValue,
			'hitCallback'   : hitCallback
		});
	};

	Urb.trackPageView = function() {
		Urb.log('Urb.trackPageView');

		setTimeout(function() {
			ga('send', 'pageview', window.location.pathname);
		}, 666);
	};

	Urb.$window.on('load', Urb.setupAnalytics);
	Urb.$window.on('ajaxloaded load', Urb.setupEvents);
	Urb.$window.on('ajaxloaded', Urb.trackPageView);
});