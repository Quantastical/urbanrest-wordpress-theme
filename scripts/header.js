jQuery( function( $ ) {
	var wpAdminBarHeight = (Urb.$wpadminbar) ? Urb.$wpadminbar.outerHeight() : 0;
	var navBarWithAdminBarHeight = Urb.$mainNavigation.outerHeight() + wpAdminBarHeight;

	var $nextButton = $('<button class="next"><span class="fa fa-angle-right"></span></button>');
	var $previousButton = $('<button class="previous"><span class="fa fa-angle-left"></span></button>');
	var automaticInterval = setInterval(function() { Urb.automaticNavigation(); }, 5 * 1000); // milliseconds

	var $postHeadings = $('.site-posts .latest-posts .blog-post h4');

	Urb.automaticNavigation = function() {
		var $currentPost = $('.site-posts .latest-posts .blog-post.active');
		var $nextPost = $currentPost.next('.next.blog-post');

		if( $nextPost.length ) {
			$nextButton.trigger('click');
		}
	};

	Urb.scrollHeader = function() {
		$postHeadings.each(function() {
			var $postHeading = $(this);

			if($postHeading.parents('.blog-post').is('.active')) {
				if( Urb.scrollPosition > 0 && Urb.scrollPosition < Urb.$window.height() ) {
					$postHeading.css({
						//'opacity'    : Math.max(0, (1 - Urb.scrollPosition / Urb.$window.height() * 4)).toFixed(2),
						'height' : (100 - 25 * Urb.scrollPosition / Urb.$window.height()).toFixed(2) + '%',
						'transform'  : 'scale(' + (1 - 0.15 * Urb.scrollPosition / Urb.$window.height()).toFixed(3) + ')'
					});
				} else {
					$postHeading.removeAttr('style');
				}
			}
		});
	};

	Urb.setupHeaderNavigation = function() {
		$nextButton.on('click', function(e) {
			var $currentPost = $('.site-posts .latest-posts .blog-post.active');
			var $nextPost = $currentPost.next('.next.blog-post');
			var $firstPost = $('.site-posts .latest-posts .blog-post:first-child');

			if($currentPost.length) {
				$previousButton.addClass('active');
				$currentPost.removeClass('active').addClass('previous');
				if($nextPost.length) {
					$nextPost.removeClass('previous next').addClass('active');
				}
				if(!$nextPost.next('.next.blog-post').length) {
					$nextButton.removeClass('active');
				}
			} else {
				$firstPost.removeClass('previous next').addClass('active');
			}

			if(e.which != undefined && automaticInterval) {
				clearInterval(automaticInterval);
			}
		});

		$previousButton.on('click', function(e) {
			var $currentPost = $('.site-posts .latest-posts .blog-post.active');
			var $previousPost = $currentPost.prev('.previous.blog-post');
			var $lastPost = $('.site-posts .latest-posts .blog-post:last-child');

			if($currentPost.length) {
				$nextButton.addClass('active');
				$currentPost.removeClass('active').addClass('next');
				if($previousPost.length) {
					$previousPost.removeClass('previous next').addClass('active');
				}
				if(!$previousPost.prev('.previous.blog-post').length) {
					$previousButton.removeClass('active');
				}
			} else {
				$lastPost.removeClass('previous next').addClass('active');
			}

			if(e.which != undefined && automaticInterval) {
				clearInterval(automaticInterval);
			}
		});

		$('.site-posts .latest-posts').after($nextButton).after($previousButton);

		setTimeout(Urb.showNavigation, 500);
	};

	Urb.stopAutomaticNavigation = function() {
		if( automaticInterval ) {
			clearInterval(automaticInterval);
		}
		Urb.$window.off('scroll', Urb.stopAutomaticNavigation);
	};

	Urb.showNavigation = function() {
		$nextButton.addClass('active');
		//$previousButton.addClass('active');
	};

	/*
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
	
	Urb.$window.on('load orientationchange resize scroll', Urb.scrollLogos);
	*/

	Urb.$window.on('scroll', Urb.stopAutomaticNavigation);
	Urb.$window.on('load scroll', Urb.scrollHeader);
	Urb.$window.on('load', Urb.setupHeaderNavigation);
} );