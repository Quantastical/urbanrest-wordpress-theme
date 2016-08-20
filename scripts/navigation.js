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

	Urb.$loading = $('<span class="loading-text" id="loading"><span class="dot"></span><span class="dot"></span><span class="dot"></span></span>');

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
		var duration = Math.round( 500 * (Math.abs(Urb.$window.scrollTop() - targetOffset) / Urb.$window.height()) );
		
		if($currentPage.length == 0) {
			$currentPage = $('<main class="new page row around-xs" />');
			$('.site-posts').after($currentPage);
		}

		Urb.$body.append(Urb.$loading)
		$currentPage.addClass('loading');
		setTimeout(function(){
			$currentPage.animate({height:0},500);
		},duration);

		//Urb.$body.animate(
		$('html,body').animate(
			{ scrollTop: targetOffset - wpAdminBarHeight },
			duration
		);

		var ellipsis = '...';
		var loadingTimeout = setInterval(function() {
			if(ellipsis.length == 3) {
				ellipsis = '';
			} else {
				ellipsis += '.';
			}
			document.title = 'Loading' + ellipsis;
		}, 250);

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
				Urb.log(response);

				if(response.success) {
					document.title = response.data.title;
					var $content = $(response.data.content);
					$currentPage.replaceWith($content);
					Urb.$loading.remove();
					Urb.$window.trigger('ajaxloaded');
					var timeout = 0;
					$('.page-header > *:not(.hidden), .page-content > *:not(.hidden), .page-footer > *:not(.hidden), .post-header > *:not(.hidden), .post-content > *:not(.hidden), .post-footer > *:not(.hidden)', $content).each(function() {
						var $this = $(this);
						$this.hide();
						setTimeout(function(){
							$this.fadeIn(330);
						}, timeout);
						timeout += 88;
					});
					$('#qr-code').html('.page-footer:before {content: url(http://chart.googleapis.com/chart?cht=qr&chs=200x200&choe=UTF-8&chld=H&chl=' + encodeURIComponent(response.data.shortlink.replace(/URB.beer/i, 'QR.URB.beer')) + ') !important;}}');
				} else {
					// TODO: Show an error or soemthing
					Urb.log(response.data);
				}
			},
			complete: function() {
				console.log('clear Timeout');
				clearInterval(loadingTimeout);
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
		Urb.$mainNavigation.toggleClass('open', false).removeAttr('style');

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

	Urb.setupImageLinks = function() {
		$('a').filter('[href$=".png"],[href$=".jpg"],[href$=".bmp"],[href$=".gif"],[href$=".jpeg"]')
		.magnificPopup({
			type:'image',
			autoFocusLast: false,
			mainClass: 'mfp-fade',
			closeMarkup: '<button title="%title%" type="button" class="mfp-close"></button>',
			image: {
				cursor: null
			},
			callbacks: {
				open: function() {
		 			Urb.$body.addClass('modal-active');
				},
				beforeClose: function() {
		 			Urb.$body.removeClass('modal-active');
				}
			}
		})
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
		Urb.$mainMenu = $('#menu-main-menu');
		Urb.$menuToggle.on('click', function() {
			var targetPosition = false;

			if(Urb.scrollPosition > 0 ) {
				if( Urb.scrollPosition < Urb.$window.height() / 2 ) {
					targetPosition = 0;
				} else if( Urb.scrollPosition < Urb.$window.height() ) {
					targetPosition = Urb.$window.height();
				}
			}

			var openMenu = function() {
				Urb.$menuToggle.toggleClass('open');
				Urb.$mainNavigation.toggleClass('open');
				if(Urb.$mainNavigation.hasClass('open')) {
					if(Urb.scrollPosition < Urb.$window.height() / 2) {
						Urb.$mainNavigation.css('top', Urb.$window.height() - Urb.$pageNavigation.outerHeight() - Urb.$mainMenu.outerHeight());
					} else {
						Urb.$mainNavigation.css('bottom', Urb.$window.height() - Urb.$pageNavigation.outerHeight() - Urb.$mainMenu.outerHeight());
					}
				} else {
					Urb.$mainNavigation.removeAttr('style');
				}
			};

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
				.done( openMenu );
			} else {
				openMenu();
			}
		});
		//Urb.$pageNavigation.find('.main-menu [href="#main-menu"]').replaceWith(Urb.$menuToggle);
	};

	Urb.setupNavigationSnap = function() {
		Urb.windowHeightMinusWPHeaderHeight = Urb.$window.height() - Urb.$pageNavigation.outerHeight() - wpAdminBarHeight;
	};

	Urb.scrollPageNavigation = function() {
		if(Urb.scrollPosition >= Urb.windowHeightMinusWPHeaderHeight) {
			Urb.$siteNavigation.addClass('stuck-top').removeClass('past-midpoint');
		} else if(Urb.scrollPosition >= Urb.$window.height() / 2) {
			Urb.$siteNavigation.addClass('past-midpoint').removeClass('stuck-top');
		}else {
			Urb.$siteNavigation.removeClass('past-midpoint').removeClass('stuck-top');
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
			var $main = $('main');
			if( Urb.$window.scrollTop() == 0 && $main.length ) {
				Urb.$window.scrollTop( $main.offset().top - wpAdminBarHeight );
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
	Urb.$window.on('ajaxloaded load', Urb.setupExternalLinks);
	Urb.$window.on('ajaxloaded load', Urb.setupImageLinks);
	Urb.$window.on('load', Urb.setupFragmentAnchors);
	Urb.$window.on('ajaxloaded load', Urb.setupInternalLinks);
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