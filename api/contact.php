<?php
include_once($_SERVER['DOCUMENT_ROOT'].'/wp-load.php' );

$api_key = get_option('urbanrest_setting_mailchimp_api_key');
$mailchimp_datacenter_id = substr( strrchr($api_key, '-'), 1 );
$mailchimp_list_id = 'e5898a07c6';

header('Content-Type: application/json');

$email_address = sanitize_email($_POST['email_address']);
$first_name    = sanitize_text_field($_POST['first_name']);
$last_name     = sanitize_text_field($_POST['last_name']);
$full_name     = $first_name . ($first_name || $last_name ? ' ' : '') . $last_name;
$message       = sanitize_text_field($_POST['message']);
$newsletter    = isset($_POST['newsletter']);

die($full_name);

// Update notification preference for WordPress user
$user_id = email_exists($email_address);

if( !$user_id ) {
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

update_user_meta( $user_id, 'urb_newsletter', $newsletter );

// Deliver message
if( !empty($message) ) {
	$to          = get_option('admin_email');
	$subject     = "Staying Connected";
	$attachments = null;
	$headers     = array(
		"From: \"{$full_name}\" <{$email_address}>",
		"Reply-To: \"$full_name\" <{$email_address}>"
	);
	wp_mail( $to, $subject, $message, $headers, $attachments );
}

// Update MailChimp newsletter list
/*
if( $api_key ) {
	$api_data = array(
		'method'            => 'listSubscribe',
		'apikey'            => $api_key,
		'id'                => $mailchimp_list_id,
		'email_address'     => $email_address,
		'merge_vars[FNAME]' => $first_name,
		'merge_vars[LNAME]' => $last_name,
		'output'            => 'json'
	);

	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, "http://{$mailchimp_datacenter_id}.api.mailchimp.com/1.3/?" . http_build_query($api_data));
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	echo curl_exec($ch);
	curl_close($ch);
} else {
	$message = array(
		'error_message' => "No API Key has been provided.",
		'results' => array(),
		'status' => "REQUEST_DENIED"
	);
	echo json_encode($message);
}
*/
?>