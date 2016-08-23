jQuery(function($){
	Urb.setupModal = function() {
		Urb.log('Urb.setupModal');

		$('.modal').urbModal();
		$('[data-action="modal"]').on('click', Urb.showModal);
	};

	Urb.showModal = function( target ) {
		Urb.log('Urb.showModal');

		if('string' !== typeof target) {
			target = $(this).data('target');
		}
		
		$( target ).data('urbModal').show();
	};

	Urb.$window.on('ajaxloaded load', Urb.setupModal);
});