<?php
if( !function_exists( 'urbanrest_admin_menu_custom_menus' ) ) :
	function urbanrest_admin_menu_custom_menus() {
		// Admin -> Settings -> Artwork
		add_options_page(
			'Artwork & Images', // $page_title
			'Artwork', // $menu_title
			'manage_options', // $capability
			'urbanrest_admin_page_artwork', // $menu_slug
			'urbanrest_admin_page_artwork' // $page_callback
		);

		// Admin -> Settings -> Company
		add_options_page(
			'Company Information', // $page_title
			'Company', // $menu_title
			'manage_options', // $capability
			'urbanrest_admin_page_company', // $menu_slug
			'urbanrest_admin_page_company' // $page_callback
		);
	}
endif;
add_action('admin_menu', 'urbanrest_admin_menu_custom_menus');

if( !function_exists( 'urbanrest_admin_menu_remove_dashboard' ) ) :
	function urbanrest_admin_menu_remove_dashboard( )
	{
		global $current_user, $menu, $submenu;
		$current_user = wp_get_current_user();

		if( !current_user_can('administrator') )
		{
			reset( $menu );
			$page = key( $menu );
			while( ( __( 'Dashboard' ) != $menu[$page][0] ) && next( $menu ) )
			{
				$page = key( $menu );
			}

			if( __( 'Dashboard' ) == $menu[$page][0] )
			{
				unset( $menu[$page] );
			}

			reset($menu);
			$page = key($menu);
			while( ! $current_user->has_cap( $menu[$page][1] ) && next( $menu ) )
			{
				$page = key( $menu );
			}

			if( preg_match( '#wp-admin/?(index.php)?$#', $_SERVER['REQUEST_URI'] ) && ( 'index.php' != $menu[$page][2] ) )
			{
				wp_redirect( get_option( 'siteurl' ) . '/wp-admin/profile.php');
			}
		}
	}
endif;
add_action('admin_menu', 'urbanrest_admin_menu_remove_dashboard');
?>