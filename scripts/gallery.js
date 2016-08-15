jQuery(function($){
	Urb.setupGallery = function() {
		$('.gallery .gallery-icon a').magnificPopup({
			type:'image',
			autoFocusLast: false,
			mainClass: 'mfp-fade',
			closeMarkup: '<button title="%title%" type="button" class="mfp-close"></button>',
			image: {
				cursor: null
			},
			/*
			zoom: {
				enabled: true, // By default it's false, so don't forget to enable it
				duration: 200, // duration of the effect, in milliseconds
				easing: 'ease-in-out', // CSS transition easing function
				// The "opener" function should return the element from which popup will be zoomed in
				// and to which popup will be scaled down
				// By defailt it looks for an image tag:
				opener: function(openerElement) {
					// openerElement is the element on which popup was initialized, in this case its <a> tag
					// you don't need to add "opener" option if this code matches your needs, it's defailt one.
					return openerElement.is('img') ? openerElement : openerElement.find('img');
				}
			}
			*/
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