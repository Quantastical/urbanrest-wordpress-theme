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

	Urb.positionTooltip = function($tooltip, $element) {
		var tooltipAboveViewportTop = $element.offset().top - $tooltip.outerHeight() * 1.25 < Urb.scrollPosition;

		$tooltip.toggleClass('above', !tooltipAboveViewportTop);
		$tooltip.toggleClass('below', tooltipAboveViewportTop);

		if(tooltipAboveViewportTop) {
			$tooltip.css({
				left: $element.offset().left + $element.width() / 2 - $tooltip.outerWidth() / 2,
				top: $element.offset().top + + $element.outerHeight() + $tooltip.outerHeight() * 0.25,
			});
		} else {
			$tooltip.css({
				left: $element.offset().left + $element.width() / 2 - $tooltip.outerWidth() / 2,
				top: $element.offset().top - $tooltip.outerHeight() * 1.25,
			});
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
			/*
			$tooltip.css({
				left: $element.offset().left + $element.outerWidth() / 2 - $tooltip.outerWidth() / 2,
				top: $element.offset().top - $tooltip.outerHeight() * 1.25,
			});
			*/
			Urb.positionTooltip($tooltip, $element);
			$element.data('tooltip', $tooltip);
			$tooltip.addClass('active');
			$element.attr('tooltip', $tip);
			$element.removeAttr('title');
		} else {
			Urb.positionTooltip($tooltip, $element);
			$tooltip.addClass('active');
		}
	};

	Urb.setupTooltips = function() {
		$('[title]').hover(Urb.showTooltip, Urb.hideTooltip);
		//Urb.$body.on('mouseover', '[title]', Urb.showTooltip);
		//Urb.$body.on('mouseleave', '[title]', Urb.hideTooltip);
	};

	Urb.$window.on('load', Urb.setupTooltips);
});