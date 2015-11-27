jQuery(function($){
	//$('.wp-toolbar').removeClass('wp-toolbar');
	//$('#wpadminbar').remove();

	Urb.countDecimalPlaces = function decimalPlaces(num) {
		// http://stackoverflow.com/a/10454560/1028949
		var match = (''+num).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
		if (!match) { return 0; }
		return Math.max(
			0,
			// Number of digits right of decimal point.
			(match[1] ? match[1].length : 0)
			// Adjust for scientific notation.
			- (match[2] ? +match[2] : 0));
	};

	Urb.setupSliders = function() {
		$('[data-slider]').each(function() {
			var $slider = $(this);
			var $input = $('[name="' + $slider.data('slider-target') + '"]');
			
			$slider.bind( 'slider:changed', function (event, data) {
				$input.val( parseFloat(data.value).toFixed( Urb.countDecimalPlaces($slider.data('slider-step')) ) );
			} );

			$input.bind('blur change', function(event) {
				$(this).val( parseFloat(this.value).toFixed( Urb.countDecimalPlaces($slider.data('slider-step')) ) );
				$slider.simpleSlider( 'setValue', this.value );
			});

			$input.val( parseFloat(this.value).toFixed( Urb.countDecimalPlaces($slider.data('slider-step')) ) );
		} );
	};

	Urb.$window.on('load', Urb.setupSliders);
});