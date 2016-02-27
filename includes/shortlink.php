<?php

function urb_admin_init_shortlink_domain()
{
	$option_group = 'permalink';
	$option_name = 'shortlink_domain';
	$sanitiaze_callback = '';

	register_setting( $option_group, $option_name, $sanitize_callback );
	

	$id = 'shortlink_domain';
	$title = 'Shortlink Domain';
	$callback = 'urb_shortlink_domain';
	$page = 'permalink';
	$section = 'optional';
	$args = '';

	add_settings_field( $id, $title, $callback, $page, $section, $args );
}

function urb_shortlink_domain()
{
	
	$option = 'shortlink_domain';
	echo '<input type="text" name="' . $option . '" id="' . $option . '" value="' . get_option( $option ) . '" class="regular-text ltr" />';
}

function urb_get_shortlink( $shortlink, $id = 0, $context = null, $allow_slugs = null )
{
	global $post;

	//if(get_option('shortlink_domain')) {
		return get_option('shortlink_domain') . '/?p=' . $post->ID;
	//}

	return false;
}

add_filter( 'get_shortlink', 'urb_get_shortlink' );
add_action( 'admin_init', 'urb_admin_init_shortlink_domain' );
?>