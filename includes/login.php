<?php
function urb_login_headerurl() {
	return get_site_url();
}

function urb_login_headertitle() {
	return get_bloginfo('name');
}

function urb_login_enqueue_scripts() {
	wp_enqueue_style( 'urb_login', get_template_directory_uri() . '/styles/login/style.css' );
}

add_action( 'login_enqueue_scripts', 'urb_login_enqueue_scripts' );

add_filter('login_headertitle', 'urb_login_headertitle');
add_filter('login_headerurl','urb_login_headerurl');
?>