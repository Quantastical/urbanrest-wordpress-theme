// onScreen jQuery plugin v0.2.1
// (c) 2011-2013 Ben Pickles
//
// http://benpickles.github.io/onScreen
//
// Released under MIT license.
(function(a){a.expr[":"].onScreen=function(b){var c=a(window),d=c.scrollTop(),e=c.height(),f=d+e,g=a(b),h=g.offset().top,i=g.height(),j=h+i;return h>=d&&h<f||j>d&&j<=f||i>e&&h<=d&&j>=f}})(jQuery);

jQuery(function($){
	// Iframe Sizing
	var $iframe = $('iframe');

	$( window ).on( 'load resize orientationchange', function( )
	{
		$iframe.css(
		{
			height: $iframe.outerWidth() * $iframe.attr('height') / $iframe.attr('width') + 'px'
		} );
	} );

	// Kickstarter Progress
	var $pledged = $('#pledged');
	$(document).scroll(function() {
		if($pledged.hasClass('hidden') && $pledged.is(':onScreen')) {
			$pledged.removeClass('hidden');
		}
	});

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