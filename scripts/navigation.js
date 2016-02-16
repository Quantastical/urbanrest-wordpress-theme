jQuery( function( $ ) {
	var wpAdminBarHeight = (Urb.$wpadminbar) ? Urb.$wpadminbar.outerHeight() : 0;
	var navBarWithAdminBarHeight = Urb.$mainNavigation.outerHeight() + wpAdminBarHeight;

	Urb.setupFragmentAnchors = function() {
		Urb.$document.on('click', 'a[href^="#"]', function(e) {
			e.preventDefault();

			var fragmentIdentifier = $.attr(this, 'href');
			var targetOffset = 0;
			var $fragment = $(fragmentIdentifier);
			if(fragmentIdentifier !== '#' && $fragment.length !== 0) {
				targetOffset = $fragment.offset().top;
			} else {
				fragmentIdentifier = '/';
			}

			var targetHasPadding = ($fragment.innerHeight() - $fragment.height()) > navBarWithAdminBarHeight;

			//Urb.$body.animate(
			$('html,body').animate(
				{ scrollTop: Math.ceil(targetOffset - (targetHasPadding ? 0 : navBarWithAdminBarHeight * 1.5) ) },
				Math.round( 500 * (Math.abs(Urb.$window.scrollTop() - targetOffset) / Urb.$window.height()) )
			);

			return false;
		});
	};

	Urb.setupMainNavigation = function() {
		// After clicking a menu item, automatically lose focus to prevent applying :focus styles
		Urb.$mainNavigation.find('.menu-item a').click(function() {
			$(this).blur();
		});
	};

	var windowHeightMinusWPHeaderHeight = Urb.$window.height() - Urb.$mainNavigation.outerHeight() - wpAdminBarHeight;
	Urb.scrollMainNavigation = function() {
		if(Urb.scrollPosition >= windowHeightMinusWPHeaderHeight) {
			Urb.$mainNavigation.addClass('stuck-top');
		} else {
			Urb.$mainNavigation.removeClass('stuck-top');
		}
		/*
		if(Urb.scrollPosition < windowHeightMinusWPHeaderHeight) {
			Urb.$mainNavigation.removeClass('stuck-top').css({
				'bottom': 'auto',
				'top': (Urb.$window.height() - Urb.$mainNavigation.outerHeight() - Urb.scrollPosition).toFixed(2) + 'px',
			});
		} else {
			Urb.$mainNavigation.addClass('stuck-top');
		}
		*/
	};

	Urb.scrollSocialNavigation = function() {
		if(Urb.$socialNavigation.is(':visible')) {
			if( Urb.scrollPosition > Urb.$window.height() ) {
				Urb.$socialNavigation.addClass('hidden');
			} else {
				Urb.$socialNavigation.css({
					'opacity'    : (1 - Urb.scrollPosition / (Urb.$window.height() / 15)).toFixed(2),
					'margin-top' : (-1 * Urb.scrollPosition / 5).toFixed() + 'px',
					'transform'  : 'scale(' + (1 - 0.2 * Urb.scrollPosition / (Urb.$window.height() / 5)).toFixed(2) + ')'
				});
			}
		} else if( Urb.scrollPosition < Urb.$window.height() ) {
			Urb.$socialNavigation.removeClass('hidden');
		}
	};

	Urb.scrollToContent = function() {
		if( !Urb.$body.hasClass('home') && Urb.$window.scrollTop() == 0 ) {
			Urb.$window.scrollTop( $('main').offset().top - wpAdminBarHeight );
		} else if( location.hash ) {
			var $anchor = $(location.hash);
			var anchorProximityThreshold = 5; // pixels

			if( Urb.$window.scrollTop() > $anchor.offset().top - (navBarWithAdminBarHeight + anchorProximityThreshold)
			 && Urb.$window.scrollTop() < $anchor.offset().top + anchorProximityThreshold )
			{
				Urb.$window.scrollTop( $anchor.offset().top - navBarWithAdminBarHeight );
			}
		}
	};

	Urb.$window.on('load', Urb.setupFragmentAnchors);
	Urb.$window.on('load', Urb.setupMainNavigation);
	Urb.$window.on('load scroll', Urb.scrollMainNavigation);
	Urb.$window.on('load scroll', Urb.scrollSocialNavigation);
	Urb.$window.on('load', function() { setTimeout(Urb.scrollToContent, 1); }); // TODO: figure out why setTimeout has to be used here
} );