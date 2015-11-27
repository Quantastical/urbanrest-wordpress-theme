<?php
/*
if( !function_exists('urb_user_profile') ) :
	function urb_user_profile( $user ) {
		include(get_template_directory() . '/views/user-profile-notifications.php');
	}
endif;
add_action( 'show_user_profile', 'urb_user_profile' );
add_action( 'edit_user_profile', 'urb_user_profile' );

if( !function_exists('urb_save_user_profile') ) :
	function urb_save_user_profile( $user_id ) {
		if( !current_user_can( 'edit_user', $user_id ) ) { return false; }

		update_user_meta( $user_id, 'urb_newsletter', isset( $_POST['urb_newsletter'] ) );
	}
endif;
add_action( 'personal_options_update', 'urb_save_user_profile' );
add_action( 'edit_user_profile_update', 'urb_save_user_profile' );
*/
?>