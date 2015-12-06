<?php
function urb_load_textdomain() {
	// TODO: replace hard-coded domain with configurable option
	if($_SERVER['HTTP_HOST'] === 'localapi.urbanrest.com') {
		include(TEMPLATEPATH . '/api/index.php');
		die();
	}
}

function urb_send_headers( )
{
	global $route, $wp_query, $window_title;
	$bits = explode( "/", $_SERVER['REQUEST_URI'] );

	if( preg_match('/sitemap(-beers|-pages|-posts)?.xml/', $bits[1], $matches ) )
	{
		if( count($matches) > 1) {
			$sitemap_type = 'urlset';
			$post_type = trim( $matches[1], '-s' );
		} else {
			$sitemap_type = 'index';
		}

		include(TEMPLATEPATH . '/sitemap.php');
		die();
	}
	else if( $bits[1] === 'humans.txt' )
	{
		include(TEMPLATEPATH . '/humans.php');
		die();
	} 
	else if( $bits[1] === 'robots.txt' )
	{
		include(TEMPLATEPATH . '/robots.php');
		die();
	}
}
add_action( 'load_textdomain', 'urb_load_textdomain');
add_action( 'send_headers', 'urb_send_headers');
?>