<?php
if( !function_exists( 'urbanrest_remove_admin_bar') ) :
	function urbanrest_remove_admin_bar() {
		if( current_user_can('administrator') )
		{
			return true;
		}

		return false;
	}
endif;
add_action('show_admin_bar', 'urbanrest_remove_admin_bar');

if( !function_exists('urbanrest_remove_admin_bar_wp_logo') ) :
	function urbanrest_remove_admin_bar_wp_logo() {
		global $wp_admin_bar;
		$wp_admin_bar->remove_menu('wp-logo');
	}
endif;
add_action('wp_before_admin_bar_render', 'urbanrest_remove_admin_bar_wp_logo', 0);
?>