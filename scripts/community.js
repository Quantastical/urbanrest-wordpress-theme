jQuery(function($) {
	Urb.setupEventLinks = function() {
		$('.event', Urb.$communityEvents).each(function() {
			var $event = $(this);
			$event.on('click', function(e) {
				location.href = $(this).children('.event-what').attr('href');
			});
		});

	};
	Urb.$window.on('load', Urb.setupEventLinks);
});