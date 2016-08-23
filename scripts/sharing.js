jQuery(function($){
	Urb.scrollSharing = function() {
		$('main').each(function() {
			var $main = $(this);
			if( Urb.scrollPosition + Urb.$window.height() > $main.offset().top + Urb.$pageNavigation.outerHeight() * 1.5
			 && Urb.scrollPosition + Urb.$window.height() < $main.offset().top + $main.outerHeight() ) {
				$main.find('.page-share, .post-share').addClass('visible');
			} else {
				$main.find('.page-share, .post-share').removeClass('visible');
			}
		});
	};

	Urb.setupSharing = function() {
		Urb.log('Urb.setupSharing');
		
		var $main = $('main');

		if($main.length > 0) {
			$('.page-share, .post-share', $main)
				.addClass('visible')
				.bind('click', function() {
					$('.modal.share-modal .shortlink', $main).focus();
				});
		}
	}

	Urb.$window.on('ajaxloaded load scroll', Urb.scrollSharing);
	Urb.$window.on('ajaxloaded load', function() { setTimeout(Urb.setupSharing, 500); });
});