jQuery(function($){
	Urb.hideTooltip = function() {
		var $element = $(this);
		var $tooltip = $element.data('tooltip');

		if($tooltip){
			$tooltip.removeClass('active');
			/*
			setTimeout(function() {
				if(!$tooltip.hasClass('active')) {
					$tooltip.data('tooltip', false);
					$element.attr('title', $element.attr('tooltip'));
					$element.removeAttr('tooltip');
					$tooltip.remove();
				}
			}, 1000);
			*/
		}
	};

	Urb.showTooltip = function() {
		var $element = $(this);
		var $tooltip = $element.data('tooltip');
		var $tip = $element.attr('title');

		if(!$tooltip) {
			$tooltip = $('<div />');
			$tooltip.addClass('tooltip');
			$tooltip.text($tip);
			Urb.$body.append($tooltip);
			$tooltip.css({
				left: $element.offset().left + $element.outerWidth() / 2 - $tooltip.outerWidth() / 2,
				top: $element.offset().top - $tooltip.outerHeight() * 1.25,
			});
			$element.data('tooltip', $tooltip);
			$tooltip.addClass('active');
			$element.attr('tooltip', $tip);
			$element.removeAttr('title');
		} else {
			$tooltip.addClass('active');
		}
	};

	Urb.setupTooltips = function() {
		$('[title]').hover(Urb.showTooltip, Urb.hideTooltip);
	};

	Urb.$window.on('load', Urb.setupTooltips);
});