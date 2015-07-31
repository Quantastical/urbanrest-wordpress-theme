jQuery( function( $ )
{
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

	// Skip Link
	var $skipLink = $( '.skip-link' );

	setTimeout( function( )
	{
		$skipLink.removeClass('hidden');
	}, 2000 );
	
	$skipLink.on( 'click', function( )
	{
		event.preventDefault( );
		$( 'html, body' ).animate( {
			scrollTop : $( 'main' ).offset( ).top
		}, 666 );
	} );

	$( window ).scroll( function( )
	{
		if( $( this ).scrollTop( ) > 33 )
		{
			$skipLink.addClass( 'hidden' );
		}
		else
		{
			$skipLink.removeClass( 'hidden' );
		}
	} );
} );