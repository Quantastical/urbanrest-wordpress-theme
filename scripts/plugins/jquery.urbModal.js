;(function ( $, window, document, undefined ) {
	"use strict";

	var pluginName = "urbModal";
	var defaults = {
	};

	function Plugin( element, options ) {
		this.element = element;

		this.settings = $.extend( {}, defaults, options );
		this._defaults = defaults;
		this._name = pluginName;
		this.init();
	}

	$.extend(Plugin.prototype, {
		init: function () {
			var $modalShade = $(this.element).addClass('modal-shade');
			var $modalContent = $('<div class="modal-content" />');
			var $modalClose = $('<button class="modal-close" type="button" />');

			// Prevent touch events on modal-shade to disable scrolling content behind the modal
			$('body').on('touchmove touchstart', function(e) {
				e = e || window.event;
				var $target = e.target ? $(e.target) : $(e.srcElement);

				if( $target.hasClass('modal-shade') ) {
					e.returnValue = false;
					e.cancelBubble = true;
					if (e.preventDefault) {
						e.preventDefault();
						e.stopPropagation();
					}
					return false;
				}
			});

			//var $modalContent = $(this.element).addClass('modal-content');
			//var $modalShade = $('<div class="modal-shade" />');
			//var $modalClose = $('<button class="modal-close" type="button" />');

			var closeHandler = function(e){
				var $target = $(e.target);
				if( $target.is('.modal-content') || $target.closest('.modal-content').length) {
					return true;
				}
				$modalContent.removeClass('animated fadeIn').addClass('animated fadeOut');
				$modalShade.removeClass('modal-opened animated fadeIn').addClass('modal-closing animated fadeOut');
				$('body').removeClass('modal-active');
				setTimeout(function() {
					$('body').removeClass('no-scroll');
					$modalShade.removeClass('modal-closing animated fadeOut');
				}, 500);
			};

			$modalShade.on('click', closeHandler );
			//$modalContent.wrap($modalShade);
			//$modalContent.after($modalClose);

			$modalShade.wrapInner($modalContent);
			$modalShade.append($modalClose);
		},
		show: function() {
			var $modalShade = $(this.element);
			var $modalContent = $('.modal-content',$modalShade);
		 	$modalContent.removeClass('fadeOut').addClass('animated fadeIn');
		 	$modalShade.addClass('modal-opened animated fadeIn');

		 	$('body').addClass('no-scroll modal-active');
		}
	});

	$.fn[ pluginName ] = function ( options ) {
		return this.each(function() {
			if ( !$.data( this, pluginName ) ) {
				$.data( this, pluginName, new Plugin( this, options ) );
			}
		});
	};
})( jQuery, window, document );