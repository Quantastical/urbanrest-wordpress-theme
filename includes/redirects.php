<?php
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

		include(TEMPLATEPATH . '/sitemap.xml.php');
		die();
	}
	else if( preg_match('/^\/(beer|contact)\/?$/', $_SERVER['REQUEST_URI'], $matches ) )
	{
		add_filter( 'body_class', function( $classes ) {
			$classes[] = 'home';
			return $classes;
		} );
		include(TEMPLATEPATH . '/home.php');
		die();
	}
	else if( $bits[1] === 'humans.txt' )
	{
		include(TEMPLATEPATH . '/humans.txt.php');
		die();
	} 
	else if( $bits[1] === 'robots.txt' )
	{
		include(TEMPLATEPATH . '/robots.txt.php');
		die();
	}
}
add_action( 'send_headers', 'urb_send_headers');
?>