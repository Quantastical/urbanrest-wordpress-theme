jQuery( function( $ ) {
	var wpAdminBarHeight = (Urb.$wpadminbar) ? Urb.$wpadminbar.outerHeight() : 0;
	var viewportHeight = Urb.$window.height() - wpAdminBarHeight - Urb.$mainNavigation.outerHeight();
	var viewportHeightPercent = 0;
	var logoScale = 50;

	Urb.scrollLogos = function() {
		if( Urb.scrollPosition < viewportHeight ) {
			logoScale = (Urb.$viewport.is('.phone')) ? 80 : (Urb.$viewport.is('.tablet')) ? 65 : 50;
			viewportHeightPercent = Math.min(Urb.scrollPosition / viewportHeight, 1);

			Urb.$logo.css({
				'background-size' : (logoScale - viewportHeightPercent * 30).toFixed(2) + '%',
				'opacity'         : (1 - viewportHeightPercent).toFixed(2),
				'top'             : (Urb.scrollPosition * 0.33).toFixed(2) + 'px',
			});

			Urb.$menuLogo.css({
				'margin'  : (0.75 * viewportHeightPercent).toFixed(2) + 'em',
				'opacity' : (viewportHeightPercent).toFixed(2),
				'width'   : (6 * viewportHeightPercent).toFixed(2) + 'em',
			})

			Urb.$menuLogo.closest('a').attr('tabindex', '-1');
		} else {
			if(Urb.$menuLogo.css('opacity') !== 1) {
				Urb.$menuLogo.css({
					'width'   : '6em',
					'margin'  : '0.75em',
					'opacity' : 1,
				})
				Urb.$menuLogo.closest('a').removeAttr('tabindex');
			}
		}
	};

	Urb.$window.on('load orientationchange resize scroll', Urb.scrollLogos);
} );