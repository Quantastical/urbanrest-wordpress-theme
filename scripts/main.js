jQuery( function( $ )
{
	var $body = $('body');
	var $document = $(document);
	var $html = $('html');
	var $window = $(window);
	var $kickstarter = $('#kickstarter');
	var $iframe = $('iframe');
	var $community = $('#community');

	//$window.on('load',function() {
		$html.addClass('ready');
	//});

	$html.removeClass('no-javascript').addClass('javascript');

	var $enteredViewport = $('[data-entered-viewport]');
	$enteredViewport.on('enteredViewport', function() {
		var $this = $(this);
		var className = $this.data('entered-viewport') || 'visible';
		$this.addClass(className);
	});
	var triggerPoint = $window.height() * 0.85;
	var scrollHandler = function() {
		$enteredViewport = $.grep($enteredViewport, function(element){
			var $this = $(element);
			if( $window.scrollTop() >= $this.offset().top - triggerPoint ) {
				$this.trigger('enteredViewport');
				return false;
			}
			return true;
		});

		var y = $document.scrollTop();

		// Parallax Backgrounds
		if($kickstarter.length)
		{
			$kickstarter.css({
				'background-position': 'center ' + (-1 * 25 * (y - $kickstarter.offset().top) / $window.height()).toFixed(2) + 'vh',
			});
		}

		if($community.length)
		{
			$community.css({
				'background-position': 'center ' + (-1 * 25 * (y - $community.offset().top) / $window.height()).toFixed(2) + 'vh',
			});
		}
	};
	$document.on('scroll', scrollHandler);
	//$window.on('load', scrollHandler);
	scrollHandler();

	// Iframe Sizing
	var iframeHandler = function( )
	{
		$iframe.css(
		{
			height: $iframe.outerWidth() * $iframe.attr('height') / $iframe.attr('width') + 'px'
		} );
	};
	$window.on( 'load resize orientationchange', iframeHandler );
	iframeHandler();

	// Analytics
	$( 'a' ).on( 'click', function( )
	{
		if( typeof ga !== 'function' )
		{
			return;
		}

		var $link = $( event.target ).closest( 'a' );
		if( $link.length != 1 || window.location.host == $link[0].host || $link.attr('onclick') )
		{
			return;
		}

		event.preventDefault( );
		var href = $link[0].href;
		var route = function( ) {
			document.location = href;
		};

		if( $link.data('event-action') )
		{
			ga( 'send',
			{
				'hitType'       : 'event',
				'eventCategory' : window.location.pathname,
				'eventAction'   : $link.data('event-action'),
				'eventLabel'    : $link.data('event-label'),
				'hitCallback'   : route
			} );
		}
		else
		{
			ga( 'send',
			{
				'hitType'       : 'event',
				'eventCategory' : window.location.pathname,
				'eventAction'   : 'Outbound',
				'eventLabel'    : href,
				'hitCallback'   : route
			} );
		}

		setTimeout( route, 666 );
	} );

	// Scroll to anchored links
	$document.on('click', 'a[href^="#"]', function(e) {
		e.preventDefault();
		var href = $.attr(this, 'href');
		var targetOffset = 0;
		if(href !== '#' && $(href).length !== 0){
			targetOffset = $(href).offset().top;
		} else {
			href = '';
		}

		$body.animate({
			scrollTop: targetOffset
		}, 666, function () {
			window.location.hash = href;
		});
		return false;
	});
} );