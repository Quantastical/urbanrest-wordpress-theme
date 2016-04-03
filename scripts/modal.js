jQuery(function($){
	Urb.setupModal = function() {
		$('.modal').urbModal();
		$('[data-action="modal"]').on('click', Urb.showModal);
	};

	Urb.showModal = function( target ) {
		if('string' !== typeof target) {
			target = $(this).data('target');
		}
		//console.log(target);
		$( target ).data 	('urbModal').show();
	};

	Urb.$window.on('load', Urb.setupModal);


//	var $body = $('body');
//	var $modals = $('.modal');

//	$modals.urbanrestModal();
	/*
	$modals.each(function(){
		var $modalContent = $(this).addClass('modal-content');
		var $modalShade = $('<div class="modal-shade" />');
		var $modalClose = $('<button class="modal-close" type="button" />');

		var closeHandler = function(e){
			var $target = $(e.target);

			if( $target.is('.modal-content') || $target.closest('.modal-content').length) {
				return true;
			}

			$modalContent.removeClass('animated fadeInDown').addClass('animated fadeOutDown');
			$modalContent.parents('.modal-shade').removeClass('modal-opened animated fadeIn').addClass('modal-closing animated fadeOut');
			setTimeout(function() {
				$body.removeClass('no-scroll');
				$modalContent.parents('.modal-shade').removeClass('modal-closing animated fadeOut');
			}, 500);
		};

		$modalShade.on('click', closeHandler );

		$modalContent.wrap($modalShade);
		$modalContent.after($modalClose);
	});
*/

//	var $modalTriggers = $('[data-action="modal"]');
//	$modalTriggers.each(function(){
//		 var $modalTrigger = $(this);
//		 var $modalContent = $( $modalTrigger.data('target') );

		 /*
		 $modalTrigger.on('click',function(){
		 	$modalContent.removeClass('fadeOutDown').addClass('animated fadeInDown');
		 	$modalContent.parents('.modal-shade').addClass('modal-opened animated fadeIn');
			$body.addClass('no-scroll');
		 });
		*/
//		$modalTrigger.click(function() {
//			$modalContent.data('urbanrestModal').show();
//		});
//	});
});