jQuery(function($){
	Urb.setupGallery = function() {
		Urb.log('Urb.setupGallery');
		
		$('.gallery .gallery-icon a').magnificPopup({
			type:'image',
			autoFocusLast: false,
			mainClass: 'mfp-fade',
			closeMarkup: '<button title="%title%" type="button" class="mfp-close"></button>',
			image: {
				cursor: null
			},
			callbacks: {
				open: function() {
		 			Urb.$body.addClass('modal-active');
				},
				beforeClose: function() {
		 			Urb.$body.removeClass('modal-active');
				}
			}
		});
	};

	Urb.$window.on('ajaxloaded load', Urb.setupGallery);
});