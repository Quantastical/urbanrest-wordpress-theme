<?php
include_once($_SERVER['DOCUMENT_ROOT'].'/wp-load.php' );

if( !empty($_POST) )
{
	header('Content-Type: application/json');

	$email_address = sanitize_email($_POST['email_address']);
	$first_name    = sanitize_text_field($_POST['first_name']);
	$last_name     = sanitize_text_field($_POST['last_name']);
	$full_name     = $first_name . ($first_name || $last_name ? ' ' : '') . $last_name;
	$message       = sanitize_text_field($_POST['message']);
	$newsletter    = isset($_POST['newsletter']);

	// Check if email address already exists
	$user_id = email_exists($email_address);

	if( !$user_id ) {
		// Create a WordPress user for this email if it doesn't already exist
		$random_username = urb_generate_username( 'user' );
		$random_password = wp_generate_password( 11 );
		$user_data = array(
			'user_login'  => $random_username,
			'user_email'  => $email_address,
			'user_pass'   => $random_password,
			'first_name'  => $first_name,
			'last_name'   => $last_name,
			'admin_color' => 'coffee'
		);
		$user_id = wp_insert_user( $user_data );
	}

	// Update notification preference for user
	update_user_meta( $user_id, 'urb_newsletter', $newsletter );

	// Add response to database
	$form_post = get_post($_POST['form_post_id']);
	$post_content = json_encode($_POST);
	$post = array(
		'post_author'   => $user_id,
		'post_title'    => $form_post->post_title,
		'post_content'  => $post_content,
		'post_status'   => 'private',
		'post_type'     => 'response'
	);
	wp_insert_post( $post );

	// Send message to administrator
	if( !empty($message) ) {
		$to          = get_option('admin_email');
		$subject     = "Stay Connected";
		$attachments = null;
		$headers     = array(
			"From: \"Urbanrest WordPress\" <wordpress@urbanrest.com>",
			"Reply-To: \"$full_name\" <{$email_address}>"
		);
		wp_mail( $to, $subject, stripslashes($message), $headers, $attachments );
	}

	// Update MailChimp newsletter list
	$mailchimp_api_key = get_option('mailchimp_api_key');
	$mailchimp_list_id = get_option('mailchimp_mailing_list_id');

	if( $mailchimp_api_key ) {
		$subscription_status = (!$newsletter) ? 'unsubscribed' : 'subscribed';
		$hashed_email_address = md5(strtolower($email_address));

		$mailing_list_request = array(
			'apikey' => $mailchimp_api_key,
			'method' => 'PUT', // GET, PUT, POST, PATCH, DELETE
			'path'   => "lists/{$mailchimp_list_id}/members/{$hashed_email_address}",
			'data'   => array(
			            	'status'        => $subscription_status,
			            	'status_if_new' => $subscription_status,
			            	'merge_fields'  => array(
			            	                   	'FNAME' => $first_name,
			            	                   	'LNAME' => $last_name
			            	                   ),
			            	'email_address' => $email_address,
			            )
		);
		$mailing_list_response = urb_mailchimp_request($mailing_list_request);
		
		die( json_encode( array('success' => ($mailing_list_response->status == $subscription_status) ? true : false ) ) );
	} else {
		die( json_encode( array('success' => true) ) );
	}
}
?>
<?php get_header(); ?>
<?php get_sidebar(); ?>
<?php urb_get_specials(); ?>
<?php urb_get_community(); ?>
<?php urb_get_shop(); ?>
<?php urb_get_company(); ?>
<?php get_footer(); ?>