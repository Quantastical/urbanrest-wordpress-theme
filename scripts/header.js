jQuery( function( $ ) {
	var $nextButton = $('<button class="next"><span class="fa fa-angle-right"></span></button>');
	var $previousButton = $('<button class="previous"><span class="fa fa-angle-left"></span></button>');
	var automaticInterval; // seconds

	Urb.automaticNavigation = function() {
		$nextButton.trigger('click');
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

		automaticInterval = setInterval(Urb.automaticNavigation, 5 * 1000); // milliseconds

		setTimeout(Urb.showNavigation, 1500);
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

	Urb.$window.on('load', Urb.setupHeaderNavigation);
} );