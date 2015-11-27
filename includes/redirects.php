<?php
if( !function_exists('urbanrest_send_headers') ) :
	function urbanrest_send_headers( )
	{
		global $route, $wp_query, $window_title;
		$bits = explode( "/", $_SERVER['REQUEST_URI'] );

		if( preg_match('/sitemap(-pages|-posts)?.xml/', $bits[1], $matches ) )
		{
			if($matches[1]) {
				$sitemap_type = 'urlset';
				$post_type = trim( $matches[1], '-s' );
			} else {
				$sitemap_type = 'index';
			}

			include('sitemap.php');
			die();
		}
		else if( $bits[1] === 'humans.txt' )
		{
			include('humans.php');
			die();
		}
		else if( $bits[1] === 'robots.txt' )
		{
			include('robots.php');
			die();
		}
	}
endif;
add_action( 'send_headers', 'urbanrest_send_headers');
?>