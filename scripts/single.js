jQuery(function($){
	/*
	Urb.scrollToContent = function() {
		if(!Urb.$body.hasClass('home') && Urb.$window.scrollTop() == 0 && Urb.$body.hasClass('single')) {
			Urb.$window.scrollTop( $('.single .post').offset().top );
		} else if( location.hash ) {
			console.log('test');
		}
	};

	Urb.$window.on('load', function() { setTimeout(Urb.scrollToContent, 1); }); // TODO: figure out why setTimeout has to be used here
	*/
	/*
	var $document = $(document);
	var $head = $('head');
	var $window = $(window);

	var $post = $('#post');
	var $postShare = $('.post-share');
	var $postShareCount = $('<span class="share-count" />');

	$window.scrollTop( $post.offset().top );

	// Get blog post share count from Facebook
	$.getJSON('http://graph.facebook.com/' + $('link[rel="canonical"]', $head).attr('href'),function(data) {
		if( data.shares ) {
			$postShareCount.text(data.shares).appendTo($postShare);
		}
	});
	*/
});