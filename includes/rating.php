<?php

function urb_ajax_post_rate( ) {
	// Check for nonce security
	$nonce = $_POST['nonce'];

	if( !wp_verify_nonce( $nonce, 'admin-ajax' ) )
		die();

	if(isset($_POST['post_rating']))
	{
		$post_id = $_POST['post_id'];

		$rating = array(
			'ip'      => $_SERVER['REMOTE_ADDR'],
			'user_id' => get_current_user_id(),
			'time'    => time(),
			'rating'  => $_POST['post_rating']
		);
		
		// Get ratings for the current post
		$ratings = get_post_meta($post_id, 'ratings');

		if( count($ratings) > 0 )
			$ratings = $ratings[0];
		
		if( !is_array($ratings) )
			$ratings = array();

		// Check if user can rate
		if( urb_can_rate($post_id) )
		{
			$ratings[] = $rating;

			// Save IP and increase votes count
			update_post_meta($post_id, 'ratings', $ratings);;
			
			// Display count (ie jQuery return value)
			echo json_encode( array(
				'success' => true,
				'ratings_count' => count($ratings)
			) );
		}
		else
			echo json_encode( array(
				'success' => false,
				'message' => "We currently only allow one vote per user."
			) );
	}

	exit;
}

function urb_can_rate( $post_id )
{
	// Get ratings for the current post
	$ratings = get_post_meta( $post_id, 'ratings' );

	if( count($ratings) > 0 )
		$ratings = $ratings[0];
	
	if( !is_array($ratings) )
		$ratings = array();
	
	// Get user ratings for WordPress user ID or IP address
	$user_ratings = array_filter($ratings, function($rating) {
		if( get_current_user_id() > 0 )
			return $rating['id'] === get_current_user_id() || $rating['ip'] === $_SERVER['REMOTE_ADDR'];
		else
			return $rating['ip'] === $_SERVER['REMOTE_ADDR'];
	});

	if( count($user_ratings) > 0 )
		return false;
	else
		return true;
}

function urb_get_average_rating( $post_id )
{
	// Get ratings for the current post
	$ratings = get_post_meta( $post_id, 'ratings' );

	if( count($ratings) > 0 )
		$ratings = $ratings[0];

	if( !is_array($ratings) )
		$ratings = array();

	// Calculate the average rating
	$rating_counts = array();

	foreach( $ratings as $rating )
	{
		if( isset($rating_counts[ $rating['rating'] ]) )
		{
			$rating_counts[ $rating['rating'] ] = $rating_counts[ $rating['rating'] ] + 1;
		}
		else
		{
			$rating_counts[ $rating['rating'] ] = 1;
		}
	}

	$total_ratings = 0;
	foreach( $rating_counts as $rating => $count )
	{
		$total_ratings += $rating * $count;
	}

	$ratings_count = count( $ratings );
	if( $ratings_count > 0 ) {
		$average_rating = $total_ratings / $ratings_count;
	} else {
		$average_rating = 0;
	}

	return sprintf( '%0.1f', $average_rating );
}

function urb_get_user_rating( $post_id )
{
	// Get ratings for the current post
	$ratings = get_post_meta( $post_id, 'ratings' );

	if( count($ratings) > 0 )
		$ratings = $ratings[0];
	
	if( !is_array($ratings) )
		$ratings = array();
	
	// Get user ratings for WordPress user ID or IP address
	$user_ratings = array_filter($ratings, function($rating) {
		if( get_current_user_id() > 0 )
			return $rating['id'] === get_current_user_id() || $rating['ip'] === $_SERVER['REMOTE_ADDR'];
		else
			return $rating['ip'] === $_SERVER['REMOTE_ADDR'];
	});

	if( count($user_ratings > 0) )
	{
		$user_rating = array_pop($user_ratings);
		return $user_rating['rating'];
	}
	else
	{
		return 0;
	}
}

function urb_get_ratings( $post_id )
{
	// Get ratings for the current post
	$ratings = get_post_meta( $post_id, 'ratings' );

	if( count($ratings) > 0 )
		$ratings = $ratings[0];

	if( !is_array($ratings) )
		$ratings = array();

	return $ratings;
}

add_action('wp_ajax_nopriv_post-rate', 'urb_ajax_post_rate');
add_action('wp_ajax_post-post-rate',   'urb_ajax_post_rate');

?>