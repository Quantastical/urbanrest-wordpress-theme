<?php
include_once($_SERVER['DOCUMENT_ROOT'].'/wp-load.php' );

if( empty($_POST) )
{
	$form_post = get_post($_POST['form_post_id']);
	unset($_POST['form_post_id']);

	$current_user = wp_get_current_user();
	if ( $current_user->ID ) {
		$user_id = $current_user->ID;
	} else {
		$email_address = sanitize_email($_POST['email_address']);
		$user_id = email_exists($email_address);
		if( !$user_id ) {
			$random_username = urb_generate_username( 'user' );
			$random_password = wp_generate_password( 11 );
			$user_data = array(
				'user_login'  => $random_username,
				'user_email'  => $email_address,
				'user_pass'   => $random_password,
				'admin_color' => 'coffee'
			);
			$user_id = wp_insert_user( $user_data );
		}
	}

	$post_content = json_encode($_POST);

	$post = array(
		'post_author'   => $user_id,
		'post_category' => $form_post->title,
		'post_content'  => $post_content,
		'post_status'   => 'publish',
		'post_type'     => 'response'
	);
	wp_insert_post( $post );

	echo json_encode( array(
		'success' => true
	) );

	die();
}
?>
<?php get_header(); ?>
<?php get_sidebar(); ?>
<?php urb_get_specials(); ?>
<?php urb_get_community(); ?>
<?php urb_get_shop(); ?>
<?php urb_get_company(); ?>
<?php get_footer(); ?>