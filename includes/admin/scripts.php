<?php
if( !function_exists('urbanrest_admin_enqueue_scripts') ) :
	function urbanrest_admin_enqueue_scripts( $hook )
	{
		wp_enqueue_style( 'fontawesome', '//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css' );

		// Add media uploader to specific admin pages and load admin styles
		$screen = get_current_screen();

		wp_enqueue_style( 'simple-slider', get_stylesheet_directory_uri() . '/node_modules/simple-slider/css/simple-slider.css' );
		wp_enqueue_style( 'admin', get_stylesheet_directory_uri() . '/styles/admin/style.css' );

		wp_enqueue_script( 'simple-slider', get_stylesheet_directory_uri() . '/node_modules/simple-slider/js/simple-slider.js' );
		wp_enqueue_script( 'reset', get_stylesheet_directory_uri() . '/scripts/reset.js' );
		wp_enqueue_script( 'admin', get_stylesheet_directory_uri() . '/scripts/admin/script.js' );

		if ( 'settings_page_urbanrest_admin_page_artwork' == $screen->base ) {
			wp_enqueue_style('media-editor');
			wp_enqueue_media();
		} else {
			return;
		}
	}
endif;
add_action( 'admin_enqueue_scripts', 'urbanrest_admin_enqueue_scripts' );
?>