jQuery( function( $ ) {
	var wpAdminBarHeight = (Urb.$wpadminbar) ? Urb.$wpadminbar.outerHeight() : 0;
	var viewportHeight = Urb.$window.height() - wpAdminBarHeight - Urb.$mainNavigation.outerHeight();
	var viewportHeightPercent = 0;
	var logoScale = 50;

	Urb.scrollLogos = function() {
		if( Urb.scrollPosition < viewportHeight ) {
			logoScale = (Urb.$viewport.is('.phone')) ? 60 : (Urb.$viewport.is('.tablet')) ? 45 : 35;
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

	Urb.setupHeaderNavigation = function() {
		var $nextButton = $('<button class="next"><span class="fa fa-angle-right"></span></button>');
		var $previousButton = $('<button class="previous"><span class="fa fa-angle-left"></span></button>');

		$nextButton.on('click', function() {
			console.log('next');
			if($('.site-posts .latest-posts .blog-post.active').length) {
				$('.site-posts .latest-posts .blog-post.active').removeClass('active').next('.blog-post').addClass('active');
			} else {
				$('.site-posts .latest-posts .blog-post:first-child').addClass('active');
			}
		});

		$previousButton.on('click', function() {
			if($('.site-posts .latest-posts .blog-post.active').length) {
				$('.site-posts .latest-posts .blog-post.active').removeClass('active').prev('.blog-post').addClass('active');
			} else {
				$('.site-posts .latest-posts .blog-post:last-child').addClass('active');
			}
		});

		$('.site-posts .latest-posts').after($nextButton).after($previousButton);
	};
	
	Urb.$window.on('load orientationchange resize scroll', Urb.scrollLogos);
	Urb.$window.on('load', Urb.setupHeaderNavigation);
} );