jQuery(function($){
	Urb.hideTooltip = function() {
		Urb.log('Urb.hideTooltip');

		var $element = $(this);
		var $tooltip = $element.data('tooltip');
		
		if($tooltip){
			$tooltip.removeClass('active');
			
			setTimeout(function() {
				if(!$tooltip.hasClass('active')) {
					$element.data('tooltip', false);
					$element.attr('title', $element.attr('data-title'));
					$element.removeAttr('data-title');
					$tooltip.remove();
				}
			}, 1000);
		}
	};

	Urb.positionTooltip = function($tooltip, $element) {
		var tooltipAboveViewportTop = $element.offset().top - $tooltip.outerHeight() * 1.25 < Urb.scrollPosition;
		
		$tooltip.toggleClass('above', !tooltipAboveViewportTop);
		$tooltip.toggleClass('below', tooltipAboveViewportTop);

		if(tooltipAboveViewportTop) {
			$tooltip.css({
				left: $element.offset().left + $element.width() / 2 - $tooltip.outerWidth() / 2,
				top: $element.offset().top + $element.outerHeight() + $tooltip.outerHeight() * 0.25,
			});
		} else {
			$tooltip.css({
				left: $element.offset().left + $element.width() / 2 - $tooltip.outerWidth() / 2,
				top: $element.offset().top - $tooltip.outerHeight() * 1.25,
			});
		}

		var tooltipOffLeftEdge = $tooltip.offset().left < 0;
		var tooltipOffRightEdge = $tooltip.offset().left + $tooltip.outerWidth() > Urb.$window.width();

		$tooltip.toggleClass('left', tooltipOffLeftEdge);
		$tooltip.toggleClass('right', tooltipOffRightEdge);

		if(tooltipOffLeftEdge) {
			$tooltip.css({
				left: $element.offset().left + $element.width() / 2 - $tooltip.outerWidth() / 2 + $tooltip.offset().left * -1
			});
		} else if(tooltipOffRightEdge) {
			$tooltip.css({
				left: $element.offset().left + $element.width() / 2 - $tooltip.outerWidth() / 2 - ($tooltip.offset().left + $tooltip.outerWidth() - Urb.$window.width())
			});
		}
	};

	Urb.showTooltip = function() {
		Urb.log('showTooltip');
		
		var $element = $(this);
		var $tooltip = $element.data('tooltip');
		var $tip = $element.attr('title');

		if($element.parents('.map-canvas')) {
			return;
		}

		if(!$tooltip) {
			$tooltip = $('<div />');
			$tooltip.addClass('tooltip');
			$tooltip.text($tip);
			Urb.$body.append($tooltip);
			Urb.positionTooltip($tooltip, $element);
			$element.data('tooltip', $tooltip);
			$tooltip.addClass('active');
			$element.attr('data-title', $tip);
			$element.removeAttr('title');
		} else {
			Urb.positionTooltip($tooltip, $element);
			$tooltip.addClass('active');
		}
	};

	Urb.setupTooltips = function() {
		Urb.$body.on('mouseleave', '[title], [data-title]', Urb.hideTooltip);
		Urb.$body.on('mouseenter', '[title], [data-title]', Urb.showTooltip);
	};

	Urb.$window.on('ajaxloaded load', Urb.setupTooltips);
});