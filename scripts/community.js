jQuery(function($) {
	Urb.setupEventLinks = function() {
		$('.event', Urb.$communityEvents).each(function() {
			var $event = $(this);
			$('.event-what', $event).on('click', function(e) {
        location.href = $(this).attr('href');
			});
		});

	};
	Urb.$window.on('load', Urb.setupEventLinks);
});