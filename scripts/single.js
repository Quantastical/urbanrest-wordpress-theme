jQuery(function($){
	var $document = $(document);
	var $head = $('head');
	var $window = $(window);

	var $mainNavigation = $('#main-navigation');
	var $mainMenuLogoImage = $('.menu-item-logo img');
	var $postShare = $('.post-share');
	var $postShareCount = $('<span class="share-count" />');
	var $postImage = $('.post-image');

	var mainLogoMargin = 0;

	// Get blog post share count from Facebook
	$.getJSON('http://graph.facebook.com/' + $('link[rel="canonical"]', $head).attr('href'),function(data) {
		if( data.shares ) {
			$postShareCount.text(data.shares).appendTo($postShare);
		}
	});

	var sizeHandler = function(){
		mainLogoMargin = $window.outerWidth() > 768 ? '-0.2em' : '-25px';

		$mainMenuLogoImage.css({
			'margin': mainLogoMargin + ' 0.75em 0'
		});
	};

	var scrollHandler = function(){
		if( $postImage.not('.visible') && $window.scrollTop() >= $postImage.offset().top - $window.height() ) {
			$postImage.addClass('visible');
		}
	};

	//$window.on('load', scrollHandler);
	sizeHandler();
	scrollHandler();
	$window.on('resize orientationchange', function() { sizeHandler(); scrollHandler(); } );
	$document.on('scroll', scrollHandler);

	// Add logo image (scroll to top) to main menu
	var $mainMenuLogoImage = $('<img src="/wp-content/themes/urbanrest-wordpress-theme/images/logo-urbanrest-text-inverted-min.png" />');
	var $mainMenuLogo = $('<li class="menu-item menu-item-logo"></li>');
	$('<a href="#"></a>').append($mainMenuLogoImage).appendTo($mainMenuLogo);
	$('#menu-main-menu li:nth-child(2)', $mainNavigation).after($mainMenuLogo);
	$mainMenuLogoImage.css({
		'height': '1.25em',
		'margin': mainLogoMargin + ' 0.75em 0',
		'opacity' : '1',
	});
});