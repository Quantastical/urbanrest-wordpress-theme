<?php
if( !function_exists( 'urbanrest_setup_ajax' ) ) :
	function urbanrest_setup_ajax() {
		// Create end-point for JS AJAX calls
		wp_localize_script('site', '_URB', array(
			'url'                       => admin_url('admin-ajax.php'),
			'nonce'                     => wp_create_nonce('admin-ajax'),
			'googleAnalyticsTrackingID' => get_option('google_analytics_tracking_id'),
			'googleBrowserMapApiKey'    => get_option('google_browser_api_key')
		));
	}
endif;
add_action('wp_enqueue_scripts', 'urbanrest_setup_ajax');

function getgeocode() {
	$api_key = get_option('google_browser_api_key');

	if( $api_key ) {
		$street_address = $_POST['urbanrest_setting_street_address'];
		$locality = $_POST['urbanrest_setting_locality'];
		$region = $_POST['urbanrest_setting_region'];
		$postal_code = $_POST['urbanrest_setting_postal_code'];
		$country = $_POST['urbanrest_setting_country'];

		$address = urlencode($street_address . ', ' . $locality . ', ' . $region . ', ' . $country . ', ' . $postal_code);

		$ch = curl_init();
	   curl_setopt($ch, CURLOPT_URL, "https://maps.googleapis.com/maps/api/geocode/json?address={$address}&key={$api_key}");
	   curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	   $response = json_decode(curl_exec($ch));
	   curl_close($ch);

	   wp_send_json_success($response);
	} else {
		wp_send_json_error( "No API Key has been provided." );
	}

	die();
}
add_action( 'wp_ajax_getgeocode', 'getgeocode' );
add_action( 'wp_ajax_nopriv_getgeocode', 'getgeocode');

function getmaincontent() {
	global $post;

	$post_id = url_to_postid($_POST['slug']);
	
	if($post_id > 0) {
		$post_info = get_post($post_id);
		$post = get_post($post_id);
		setup_postdata( $post );

		ob_start();
		include( TEMPLATEPATH . '/ajax-main-content.php' );
		$buffer = ob_get_clean();

		$return = array(
			'ID'        => $post_id,
			'title'     => $post_info->post_title,
			'guid'      => $post_info->guid,
			'permalink' => get_permalink($post_id),
			'shortlink' => wp_get_shortlink($post_id),
			'content'   => $buffer
		);
		
		wp_send_json_success($return);
	} else {
		wp_send_json_error( 'No content found.' );
	}

	die();
}
add_action( 'wp_ajax_getmaincontent', 'getmaincontent' );
add_action( 'wp_ajax_nopriv_getmaincontent', 'getmaincontent');

function getnext() {
	global $wpdb;

	$locations = get_nav_menu_locations();
	$menu = get_term( $locations['featured'], 'nav_menu' );
	$featured = wp_get_nav_menu_items($menu->term_id);

	if($featured == false || count($featured) == 0) {
		getnext_post();
	} else {
		getnext_menu($featured);
	}
}

function getnext_menu($featured) {
	$result = null;
	//var_dump($featured);
	foreach( $featured as $key => $post ) {
		if( $post->object_id == $_POST['id'] && $key < count($featured) - 1 ) {
			$result = $featured[$key + 1];
			break;
		}
	}
	$previous_post = get_post( $result->object_id );

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
		wp_send_json_error( 'No menu found.' );
	}

	die();
}

function getnext_post() {
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
}
add_action( 'wp_ajax_getnext', 'getnext' );
add_action( 'wp_ajax_nopriv_getnext', 'getnext');

function getrating() {
	global $post;

	$rating_system = $_POST['rating_system'];
	$slug = $_POST['slug'];
	
	switch($rating_system) {
		case 'beeradvocate':
			$beeradvocate = new beeradvocate_beer();
			$beeradvocate->info($slug);
		break;
		case 'ratebeer':
			$ratebeer = new ratebeer_beer();
			$ratebeer->info($slug);
		break;
		case 'untappd':
			$untappd = new untappd_beer();
			$untappd->info($slug);
		break;
	}

	die();
}
add_action( 'wp_ajax_getrating', 'getrating' );
add_action( 'wp_ajax_nopriv_getrating', 'getrating');
?>