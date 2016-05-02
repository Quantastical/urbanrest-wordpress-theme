<?php
if( !function_exists( 'urbanrest_setup_ajax' ) ) :
	function urbanrest_setup_ajax() {
		// Create end-point for JS AJAX calls
		wp_localize_script('site', '_URB', array(
			'url'   => admin_url('admin-ajax.php'),
			'nonce' => wp_create_nonce('admin-ajax')
		));
	}
endif;
add_action('wp_enqueue_scripts', 'urbanrest_setup_ajax');

function getmaincontent() {
	global $post;

	$post_id = url_to_postid($_POST['slug']);
	
	if($post_id > 0) {
		$post = get_post($post_id);
		setup_postdata( $post );

		ob_start();
		include( TEMPLATEPATH . '/ajax-main-content.php' );
		$buffer = ob_get_clean();
		
		wp_send_json_success($buffer);
	} else {
		wp_send_json_error( 'No content found.' );
	}

	die();
}
add_action( 'wp_ajax_getmaincontent', 'getmaincontent' );
add_action( 'wp_ajax_nopriv_getmaincontent', 'getmaincontent');

function getnext() {
	global $wpdb;

	$previous_post = false;
	
	$post = get_post($_POST['id']);
	$current_post_date = $post->post_date;
	
	$where = apply_filters(
		'get_previous_post_where',
		$wpdb->prepare(
			"WHERE  p.post_date < %s "
			. "AND p.post_type = %s "
			. "AND p.post_status = 'publish' ",
			$current_post_date,
			'post' ,
			$author_id
		),
		'',
		''
	);
	$sort  = apply_filters(
		"get_previous_post_sort",
		"ORDER BY p.post_date DESC LIMIT 1"
	);

	$query = "SELECT p.ID FROM $wpdb->posts AS p $where $sort";
	$result = $wpdb->get_var( $query );

	if ( null === $result )
		$result = '';
	if ( $result )
		$previous_post = get_post( $result );
	
	if(!empty($previous_post)) {
		$return = array(
			'ID' => $previous_post->ID,
			'post_title' => $previous_post->post_title,
			'guid' => $previous_post->guid,
			'post_name' => $previous_post->post_name,
			'permalink' => get_permalink($previous_post->ID)
		);
		if(has_post_thumbnail($previous_post->ID)){
			$return['image_src'] = wp_get_attachment_image_src( get_post_thumbnail_id($previous_post->ID), array( 720,405 ), false, '' )[0];
			$return['thumbnail'] = get_the_post_thumbnail($previous_post->ID);
		}
		if( substr_count( $_SERVER['HTTP_ACCEPT_ENCODING'], 'gzip') )
			ob_start('ob_gzhandler');
		else
			ob_start();
		wp_send_json_success($return);
	} else {
		wp_send_json_error( 'No post found.' );
	}

	die();
	/*
	global $post;
	$post_id = intval($_POST['id']);
	$post = get_post( $post_id );
	//setup_postdata($post);
	
	$in_same_term = false;
	$excluded_categories = '';
	$taxonomy = '';
	$prevPost = get_previous_post($in_same_term, $excluded_categories, $taxonomy);

	if(!empty($prevPost)) {
		$return = array(
			'ID' => $prevPost->ID,
			'post_title' => $prevPost->post_title,
			'guid' => $prevPost->guid,
			'post_name' => $prevPost->post_name,
			'permalink' => get_permalink($prevPost->ID)
		);
		wp_send_json_success($return);
	} else {
		wp_send_json_error( 'No post found.' );
	}
	die(); // this is required to return a proper result
	*/
}
add_action( 'wp_ajax_getnext', 'getnext' );
add_action( 'wp_ajax_nopriv_getnext', 'getnext');
?>