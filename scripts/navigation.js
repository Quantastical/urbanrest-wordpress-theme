jQuery( function( $ ) {
	var wpAdminBarHeight = (Urb.$wpadminbar && Urb.$window.outerWidth() > 600) ? Urb.$wpadminbar.outerHeight() : 0;
	var navBarWithAdminBarHeight = Urb.$pageNavigation.outerHeight() + wpAdminBarHeight;
	var $main = $('main');
	var contentAreas = {
		'#contact' : $('#contact'),
		'#beer' : $('#beer')
	};
	if($main.length){
		contentAreas[$main.attr('id')] = $main;
	}

	Urb.highlightCurrentSection = function() {
		$('a.active', Urb.$pageNavigation).removeClass('active');

		for(var i in contentAreas) {
			var $contentArea = contentAreas[i];
			//if(Urb.contentAreas[i] > Urb.scrollPosition && Urb.contentAreas[i] < Urb.scrollPosition + Urb.$window.height()) {
			if(
				Urb.scrollPosition > $contentArea.offset().top - Urb.$window.height() * 0.5 && 
				Urb.scrollPosition < $contentArea.offset().top + $contentArea.outerHeight() - Urb.$window.height() * 0.5
			) {
				$('a[href*="' + i + '"]', Urb.$pageNavigation).addClass('active');
			}
		}
	};

	Urb.loadPage = function(slug) {
		var $currentPage = $('main');
		//var $nextPage = $('<main class="page loading row around-xs"><span class="loading text">Loading<span class="dot"></span><span class="dot"></span><span class="dot"></span></span></main>');

		Urb.$body.removeClass('no-scroll');
		
		// Homepage
		if(slug === '/' || slug === '') {
			var targetOffset = 0;
			var duration = Math.round( 500 * (Math.abs(Urb.$window.scrollTop() - targetOffset) / Urb.$window.height()) );
			
			//Urb.$body.animate(
			$('html,body').animate(
				{ scrollTop: targetOffset },
				duration
			);
			$currentPage.animate({height:0}, duration);
			setTimeout(function(){
				$currentPage.remove();
			}, duration + 250);
			return;
		}

		// Fragment Anchors
		var fragmentAnchors = [];
		$('a[href^="#"]').each(function() {
			var anchor = this.href.substring( this.href.indexOf('#') );
			fragmentAnchors.push(anchor);
		});
		
		var fragmented = slug.replace('/','#');
		if($.inArray(fragmented, fragmentAnchors) !== -1){
			var targetOffset = $( slug.replace('/','#') ).offset().top - wpAdminBarHeight;
			var duration = Math.round( 500 * (Math.abs(Urb.$window.scrollTop() - targetOffset) / Urb.$window.height()) );
			
			//Urb.$body.animate(
			$('html,body').animate(
				{ scrollTop: targetOffset },
				duration
			);
			$currentPage.animate({height:0}, duration);
			setTimeout(function(){
				$currentPage.remove();
			}, duration + 250);
			return;
		}
		
		var targetOffset = $('.site-posts').offset().top + $('.site-posts').outerHeight();
		//var targetHasPadding = ($currentPage.innerHeight() - $currentPage.height()) > navBarWithAdminBarHeight;
		var duration = Math.round( 500 * (Math.abs(Urb.$window.scrollTop() - targetOffset) / Urb.$window.height()) );
		
		if($currentPage.length > 0) {
			//$currentPage.before($nextPage);
		} else {
			//$nextPage.insertAfter($('section'));
			//$('.site-posts').after($nextPage);
			$currentPage = $('<main class="new page row around-xs" />');
			$('.site-posts').after($currentPage);
		}

		
		//$('> *', $currentPage).fadeOut(duration, function() {
			//$currentPage.prepend('<span class="loading">Loading</span>');
		//});
		//$nextPage.slideDown(duration);

		//$currentPage.slideUp(duration, function() {
		//	$currentPage.remove();
			$currentPage.append('<span class="loading-text"><span class="dot"></span><span class="dot"></span><span class="dot"></span></span>').addClass('loading');
			setTimeout(function(){
				$currentPage.animate({height:0},500);
			},duration);
		//});

		//Urb.$window.scrollTop( $currentPage.offset().top );
		//Urb.$body.animate(
		$('html,body').animate(
			{ scrollTop: targetOffset - wpAdminBarHeight },
			duration
		);

		$.ajax({
			type: 'POST',
			url: _URB.url,
			data: {
				'action': 'getmaincontent',
				'nonce': _URB.nonce,
				'slug': slug
			},
			dataType: 'json',
			success: function(response){
				if(response.success) {
					var $content = $(response.data);
					//$nextPage.replaceWith($content);
					$currentPage.replaceWith($content);
					Urb.$window.trigger('ajaxload');
					var timeout = 0;
					$('.page-header > *, .page-content > *, .page-footer > *, .post-header > *, .post-content > *, .post-footer > *', $content).each(function() {
						var $this = $(this);
						$this.hide();
						setTimeout(function(){
							$this.fadeIn(330);
						}, timeout);
						timeout += 88;
					});
					$('#qr-code').html('.page-footer:after {content: url(http://chart.googleapis.com/chart?cht=qr&chs=200x200&choe=UTF-8&chld=H&chl=https://' + encodeURIComponent(window.location.host + slug) + ');}}');
				} else {
					console.log(response.data);
				}
			}
		});
	};

	Urb.navigateInternally = function(e) {
		if(window.history) {
			e.preventDefault();
		} else {
			return;
		}

		Urb.$menuToggle.toggleClass('open', false);
		Urb.$mainNavigation.toggleClass('open', false);

		var $this = $(this);
		var slug = $this.attr('href').replace(window.location.protocol + '//' + window.location.host, '');

		window.history.pushState({}, $this.text(), slug);

		Urb.loadPage(slug);

		$('body').trigger('click');
	};

	Urb.performHistoryNavigation = function(e) {
		e.preventDefault();
		
		var state = e.state;
		var slug = document.location.pathname;

		Urb.loadPage(slug);
	};

	Urb.setupInternalLinks = function() {
		$('a').not('[href^="#"]')
			.not(':not([href^="http://' + window.location.host + '"]):not([href^="https://' + window.location.host + '"])')
			.not('[href$=".png"]').not('[href$=".jpg"]').not('[href$=".bmp"]').not('[href$=".gif"]').not('[href$=".jpeg"]')
			.not('[href$=".pdf"]').not('[href$=".doc"]').not('[href$=".docx"]').not('[href$=".xls"]').not('[href$=".xlsx"]')
			.each(function() {
				var $anchor = $(this);
				//if($anchor.closest('.menu-item').length == 1) {
				//	return;
				//}

				// Ignore WordPress navbar links
				if($anchor.closest($('#wpadminbar')).length > 0) {
					return;
				}

				$anchor.unbind('click').click(Urb.navigateInternally);
			});
	};

	Urb.setupExternalLinks = function() {
		$('a[href^="http"]:not([href*="' + window.location.host + '"])').attr('target', '_blank');
	};

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

//			if(window.history){
//				window.history.pushState({}, $(this).text(), fragmentIdentifier.replace('#','/'));
//			}

			//var targetHasPadding = ($fragment.innerHeight() - $fragment.height()) > navBarWithAdminBarHeight;

			//Urb.$body.animate(
			$('html,body').animate(
				{ scrollTop: Math.ceil(targetOffset - wpAdminBarHeight/*(targetHasPadding ? 0 : navBarWithAdminBarHeight * 1.5)*/ ) },
				Math.round( 500 * (Math.abs(Urb.$window.scrollTop() - targetOffset) / Urb.$window.height()) )
			);

			return false;
		});
	};

	Urb.setupPageNavigation = function() {
		// After clicking a menu item, automatically lose :focus styles
		Urb.$pageNavigation.find('.menu-item a').click(function() {
			var $this = $(this);
			$this.blur();
			/*
			if(window.history){
				var slug = $this.attr('href').replace('#', '');
				
				window.history.pushState({}, $this.text(), slug);
			}
			*/
		});

		Urb.$menuToggle = $('#menu-toggle');//$('<div id="menu-toggle"><div id="hamburger"><span></span><span></span><span></span></div><div id="cross"><span></span><span></span></div></div>');
		Urb.$menuToggle.on('click', function() {
			var targetPosition = false;

			if(Urb.scrollPosition > 0 ) {
				if( Urb.scrollPosition < Urb.$window.height() / 2 ) {
					targetPosition = 0;
				} else if( Urb.scrollPosition < Urb.$window.height() ) {
					targetPosition = Urb.$window.height();
				}
			}

			if( targetPosition !== false ) {
				$('html,body').animate(
					{
						scrollTop: targetPosition - wpAdminBarHeight
					},
					{
						duration: 250,
						easing: 'swing'
					}
				).promise()
				.done( function () {
					Urb.$menuToggle.toggleClass('open');
					Urb.$mainNavigation.toggleClass('open');
				});
			} else {
				Urb.$menuToggle.toggleClass('open');
				Urb.$mainNavigation.toggleClass('open');
			}
		});
		//Urb.$pageNavigation.find('.main-menu [href="#main-menu"]').replaceWith(Urb.$menuToggle);
	};

	Urb.setupNavigationSnap = function() {
		Urb.windowHeightMinusWPHeaderHeight = Urb.$window.height() - Urb.$pageNavigation.outerHeight() - wpAdminBarHeight;
	};

	Urb.scrollPageNavigation = function() {
		if(Urb.scrollPosition >= Urb.windowHeightMinusWPHeaderHeight) {
			Urb.$siteNavigation.addClass('stuck-top');
		} else {
			Urb.$siteNavigation.removeClass('stuck-top');
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
		//Urb.highlightCurrentSection();
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
		if( !Urb.$body.hasClass('home') ) {
			Urb.$body.addClass('home');
			if( Urb.$window.scrollTop() == 0 ) {
				Urb.$window.scrollTop( $('main').offset().top - wpAdminBarHeight );
			}
		} else if( location.hash ) {
			var $anchor = $(location.hash);
			var anchorProximityThreshold = 5; // pixels

			if( Urb.$window.scrollTop() > $anchor.offset().top - (navBarWithAdminBarHeight + anchorProximityThreshold)
			 && Urb.$window.scrollTop() < $anchor.offset().top + anchorProximityThreshold )
			{
				Urb.$window.scrollTop( $anchor.offset().top - navBarWithAdminBarHeight );
			}
		} else if( location.pathname && location.pathname.match(/^\/(beer|contact)\/?$/) ) {
			var $anchor = $( location.pathname.replace(/\/$/, '').replace(/\/+/, '#') );
			var anchorProximityThreshold = 5; // pixels

			if(Urb.$window.scrollTop() == 0 && $anchor.length) {
				//console.log(Urb.$window.scrollTop(),$anchor.offset().top, navBarWithAdminBarHeight );
				//if( Urb.$window.scrollTop() > $anchor.offset().top - (navBarWithAdminBarHeight + anchorProximityThreshold)
				// && Urb.$window.scrollTop() < $anchor.offset().top + anchorProximityThreshold )
				//{
				Urb.$window.scrollTop( $anchor.offset().top );
				//}
			}
		}
		Urb.scrollPageNavigation();
	};

	// Fix for scroll flicker on history navigation [http://stackoverflow.com/a/33004917/1028949]
	if ('scrollRestoration' in history) {
		history.scrollRestoration = 'manual';
	}

	Urb.$window.on('load orientationchange resize', Urb.setupNavigationSnap);
	Urb.$window.on('ajaxload load', Urb.setupExternalLinks);
	Urb.$window.on('load', Urb.setupFragmentAnchors);
	Urb.$window.on('ajaxload load', Urb.setupInternalLinks);
	Urb.$window.on('load', Urb.setupPageNavigation);
	Urb.$window.on('load scroll', Urb.scrollPageNavigation);
	Urb.$window.on('load scroll', Urb.scrollSocialNavigation);
	Urb.$window.on('load', function() { setTimeout(Urb.scrollToContent, 1); }); // TODO: figure out why setTimeout has to be used here
	Urb.$window.on('popstate', Urb.performHistoryNavigation);


	Urb.handleTouchEvents = function() {
		if(Urb.touchEventsHandled) {
			return;
		}

		// Fix :hover issues on mobile devices
		$('a, button').each(function(){
			var $link = $(this);

			$link.on( 'mouseenter mouseover', function(e){ e.preventDefault(); } )
				.on('touchend', function(e) {
					$('body').trigger('touchstart');
				} );
		});

		Urb.touchEventsHandled = true;
	};

	Urb.$window.on('touchstart', Urb.handleTouchEvents);
} );