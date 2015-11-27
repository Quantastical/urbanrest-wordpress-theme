<?php
if( !function_exists('urbanrest_wp_dashboard_setup') ) :
function urbanrest_wp_dashboard_setup() {
	global $wp_meta_boxes;

	// At A Glance
	remove_meta_box('dashboard_right_now', 'dashboard', 'normal');

	// Quick Draft
	//remove_meta_box('dashboard_quick_press', 'dashboard', 'side');

	// WordPress News
	remove_meta_box('dashboard_primary', 'dashboard', 'side');
} 
endif;
add_action('wp_dashboard_setup', 'urbanrest_wp_dashboard_setup' );

?>