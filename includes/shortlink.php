<?php

function urb_admin_enqueue_scripts_shortlink($hook)
{
	if( 'post.php' != $hook && 'post-new.php' != $hook )
	{
		return;
	}

	global $post;

	$slug = 'urb_shortlink';
	$URL = get_template_directory_uri() . '/scripts/shortlink.js';
	$deps = null;
	$ver = null;
	$in_footer = true;
	wp_enqueue_script( $slug, $URL, $deps, $ver, $in_footer );

	$shortlink_slug = get_post_meta( $post->ID, 'shortlink' );

	$domain = 'http://' . get_option('shortlink_domain') . '/';
	$slug = (!empty($shortlink_slug)) ? $shortlink_slug[0] : '?p=' . $post->ID;
	$url = $domain . $slug;

	$handle = 'urb_shortlink';
	$name = '_URB';
	$data = array(
		'shortlinkDomain' => $domain,
		'shortlinkSlug' => $slug,
		'shortlinkUrl' => $url,

		'url'   => admin_url('admin-ajax.php'),
		'nonce' => wp_create_nonce('admin-ajax')
	);
	wp_localize_script( $handle, $name, $data );
}

function urb_admin_init_shortlink_domain()
{
	/*
	$section_id = 'admin_section_shortlink';
	$title = 'Shortlink Domain';
	$section_callback = null;
	$page = 'urb_admin_page_3rd_parties';

	add_settings_section( $section_id, $title, $section_callback, $page );	
	*/

	$option_group = 'permalink'; // 'urb_admin_page_3rd_parties';
	$option_name = 'shortlink_domain';
	$sanitize_callback = null;

	register_setting( $option_group, $option_name, $sanitize_callback );

	$id = 'shortlink_domain';
	$title = 'Shortlink Domain';
	$callback = 'urb_shortlink_domain';
	$page = 'permalink'; // 'urb_admin_page_3rd_parties';
	$section = 'optional'; // 'admin_section_shortlink';
	$args = null;

	add_settings_field( $id, $title, $callback, $page, $section, $args );

	// Do save logic
	if( isset($_POST['permalink_structure']) && isset( $_POST['shortlink_domain'] ) )
	{
		$short_domain = wp_unslash( $_POST['shortlink_domain'] );
		update_option( 'shortlink_domain',  $short_domain );
	}
}

function urb_shortlink_domain()
{
	$option = 'shortlink_domain';
	echo '<code>http://</code><input type="text" name="' . $option . '" id="' . $option . '" value="' . get_option( $option ) . '" class="regular-text ltr" />';
}

function urb_get_shortlink( $shortlink, $id = 0, $context = null, $allow_slugs = null )
{
	global $post;

	$shortlink = false;

	if(get_option('shortlink_domain') && $post)
	{
		$shortlink = 'http://' . get_option('shortlink_domain') . '/';
		$shortlink_slug = get_post_meta( $post->ID, 'shortlink' );

		if(!empty($shortlink_slug)) {
			$shortlink .= $shortlink_slug[0];
		} else {
			$shortlink .= '?p=' . $post->ID;
		}
	}

	return $shortlink;
}

function urb_shortlink_exists($shortlink) {
	global $wpdb;
	$args = array(
		'post_type'    => 'any',
		'post_status'  => 'publish',
		'meta_key'     => 'shortlink',
		'meta_value'   => $shortlink,
		'meta_compare' => '='
	);
	$the_query = new WP_Query( $args );
	return $the_query->have_posts();
}

function urb_sanitize_post_meta_shortlink($shortlink) {
	$shortlink_count = 1;
	$clean_shortlink = $shortlink;
	
	while(urb_shortlink_exists($clean_shortlink)){
		++$shortlink_count;
		$clean_shortlink = $shortlink . '-' . $shortlink_count;
	}

	return ($shortlink_count > 1) ? $shortlink . '-' . $shortlink_count : $shortlink;
}

function saveshortlink() {
	global $wpdb;

	$post = get_post($_POST['post_id']);
	$slug = (empty($_POST['slug'])) ? '?p=' . $post->ID : urb_sanitize_post_meta_shortlink($_POST['slug']);//sanitize_meta( 'shortlink', $_POST['slug'], 'post' );
	
	if(!empty($post)) {
		$post_id = $post->ID;
		$meta_key = 'shortlink';
		$meta_value = $slug;
		$last_slug = get_post_meta( $post->ID, $meta_key );
		$prev_value = ($last_slug) ? $last_slug[0] : null;
		update_post_meta($post_id, $meta_key, $meta_value, $prev_value);

		$return = array(
			'slug' => $slug,
			'meta_value' => $meta_value,
			'prev_value' => $prev_value
		);
		
		wp_send_json_success($return);
	} else {
		wp_send_json_error( 'No post found.' );
	}
}

//add_filter( 'sanitize_post_meta_shortlink', 'urb_sanitize_post_meta_shortlink' );
add_filter( 'get_shortlink', 'urb_get_shortlink' );
add_action( 'admin_init', 'urb_admin_init_shortlink_domain' );
add_action( 'admin_enqueue_scripts', 'urb_admin_enqueue_scripts_shortlink' );

add_action( 'wp_ajax_saveshortlink', 'saveshortlink' );
//add_action( 'wp_ajax_nopriv_saveshortlink', 'saveshortlink');
?>