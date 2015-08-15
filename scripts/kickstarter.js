jQuery(function($){
	var $html = $('html').removeClass('no-javascript');
	var $body = $('body');
	var $document = $(document);
	var $window = $(window);

	var $mainLogo = $('.site-title img');
	var $mainNavigation = $('#main-navigation');
	var $socialNavigation = $('#social-navigation');
	var $wpAdminBar = $('#wpadminbar');
	var $iframe = $('iframe');
	var $kickstarter = $('#kickstarter');
	var $community = $('#community');
	var $subscribe = $('.subscribe', $community);
	
	var navbarTop = 0;
	var mainLogoSize = 0;
	var mainLogoMargin = 0;
	var phone = 400;

	// For addressing WordPress Admin bar height
	if($wpAdminBar.length && $body.hasClass('admin-bar')) {
		navbarTop = $wpAdminBar.outerHeight();
	}

	// Add logo image (scroll to top) to main menu
	var $mainMenuLogoImage = $('<img src="/wp-content/themes/urbanrest-wordpress-theme/images/logo-urbanrest-text-inverted-min.png" />');
	var $mainMenuLogo = $('<li class="menu-item menu-item-logo"></li>');
	$('<a href="#"></a>').append($mainMenuLogoImage).appendTo($mainMenuLogo);
	$('#menu-main-menu li:nth-child(2)', $mainNavigation).after($mainMenuLogo);

	// For when the screen size changes or rotates
	var sizeHandler = function(){
		$mainLogo.removeAttr('style');
		mainLogoSize = ($window.outerWidth() > 1024) ? 50 : ($window.outerWidth() > 768) ? 65 : 80;
		mainLogoMargin = $window.outerWidth() > 768 ? '-0.2em' : '-25px';
		
		$community.css({
			'padding-bottom': $subscribe.outerHeight() + 'px'
		});

		$subscribe.css({
			'bottom': '0',
			'position': 'absolute'
		});

		if(navbarTop > 0) {
			$socialNavigation.css({'top': 'calc(5% + ' + navbarTop + 'px)'});
		} else {
			$socialNavigation.css({'top': '5%'});
		}
	};

	// For when the document is scrolled
	var y;
	var scrollHandler = function() {
		y = $document.scrollTop();
		
		// Scale & Change Logo
		if(y < $window.height() ) {
			// Scale Big Logo
			$mainLogo.css({
//				'background-size' : Math.round((mainLogoSize / 2) + (mainLogoSize / 2) * (1 - y / $window.height())) + '%',
				'background-size' : (mainLogoSize - y / $window.height() * 30).toFixed(2) + '%',
				'opacity' : (1 - y / $window.height()).toFixed(2),
				'top' : (y * 0.33).toFixed(2) + 'px',
			});

			$mainMenuLogoImage.css({
				'height': (1.2 * y / $window.height()).toFixed(2) + 'em',
				'margin': mainLogoMargin + ' ' + (0.75 * y / $window.height()).toFixed(2) + 'em 0',
				'opacity' : (y / $window.height()).toFixed(2),
			});
		} else if($mainMenuLogoImage.css('opacity').toString() !== '1') {
			$mainMenuLogoImage.css({
				'height': '1.2em',
				'margin': mainLogoMargin + ' 0.75em 0',
				'opacity' : '1',
			});
		}

		// Scroll Main Navigation Bar
		if(y < $window.height() - $mainNavigation.outerHeight() - navbarTop) {
			$mainNavigation.removeClass('stuck-top').css({
				'bottom': 'auto',
				'top': ($window.height() - $mainNavigation.outerHeight() - y).toFixed(2) + 'px',
			});
		} else {
			$mainNavigation.addClass('stuck-top');
		}

		// Scale & Hide Social Navigation Buttons
		if($socialNavigation.is(':visible')) {
			if( y > $window.height() / 5) {
				$socialNavigation.addClass('hidden');
			} else {
				$socialNavigation.css({
					'opacity' : (1 - y / ($window.height() / 5)).toFixed(2),
					'margin-top': (-1 * y / 5).toFixed() + 'px',
					'transform': 'scale(' + (1 - 0.2 * y / ($window.height() / 5)).toFixed(2) + ')'
				});
			}
		} else {
			if( y < $window.height() / 5) {
				$socialNavigation.removeClass('hidden');
			}
		}

		// Parallax Backgrounds
		$body.css({
			'background-position': 'center ' + (-1 * 25 * y / $window.height()).toFixed(2) +'vh'
		});

		/*
		$kickstarter.css({
			'background-position': 'center ' + (-1 * $window.height() * 0.25 * (y - $kickstarter.offset().top) / $window.height()) +'px',
		});

		$community.css({
			'background-position': 'center ' + (-1 * $window.height() * 0.25 * (y - $community.offset().top) / $window.height()) +'px',
		});
		*/
	};

	$window.on('resize orientationchange', function() { sizeHandler(); scrollHandler(); } );

	$document.on('scroll', scrollHandler);

	//$window.on('load', function() {
		scrollHandler();
		sizeHandler();
	//});

	// MailChimp Validation
	var $email = $('#mce-EMAIL');
	var $emailHelp = $email.siblings('.help');
	$email.on('keyup',function(){
		$email.removeClass('error');
		$emailHelp.addClass('hidden');
	});

	$('#mc_embed_signup').on('submit',function(){
		if( $email.val().length < 3 || $email.val().indexOf('@') < 0)
		{
			$email.addClass('error');
			$emailHelp.removeClass('hidden');
			return false;
		}

		if( typeof ga === 'function' )
		{
			ga( 'send',
			{
				'hitType'       : 'event',
				'eventCategory' : window.location.pathname,
				'eventAction'   : 'Subscribe',
				'eventLabel'    : 'MailChimp'
			} );
		}

		return true;
	});
});

jQuery( function( $ ) {

	

	
} );