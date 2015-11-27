<?php

function urb_profile_admin_enqueue_scripts() {
	wp_enqueue_script( 'urb_profile', get_template_directory_uri() . '/scripts/profile.js' );
}

function urb_profile_edit_show_user_profile( $user ) {
	include(get_template_directory() . '/views/user-profile-notifications.php');
}

function urb_profile_personal_options_update( $user_id ) {
	if( !current_user_can( 'edit_user', $user_id ) ) { return false; }

	update_user_meta( $user_id, 'urb_newsletter', isset( $_POST['urb_newsletter'] ) );
}

function urb_profile_user_profile_update_errors( &$errors, $update, &$user ) {
	global $wpdb;

	$current_username = $user->user_login;
	$new_username = sanitize_user($_POST['user_login']);

	if( $update && isset($new_username) && $current_username !== $new_username ) {
		if( !username_exists( $new_username ) ) {
			$user_nicename = sanitize_user( $new_username, true );
			if ( mb_strlen( $user_nicename ) > 50 ) {
				$errors->add( 'user_nicename_too_long', __( 'Username may not be longer than 50 characters.' ) );
			} else {
				$user_nicename = sanitize_title( $user_nicename );
				$user_nicename_check = $wpdb->get_var( $wpdb->prepare("SELECT ID FROM $wpdb->users WHERE user_nicename = %s AND user_login != %s LIMIT 1" , $user_nicename, $current_username) );
				if ( $user_nicename_check ) {
					$suffix = 2;
					while ($user_nicename_check) {
						// user_nicename allows 50 chars. Subtract one for a hyphen, plus the length of the suffix.
						$base_length = 49 - mb_strlen( $suffix );
						$alt_user_nicename = mb_substr( $user_nicename, 0, $base_length ) . "-$suffix";
						$user_nicename_check = $wpdb->get_var( $wpdb->prepare("SELECT ID FROM $wpdb->users WHERE user_nicename = %s AND user_login != %s LIMIT 1" , $alt_user_nicename, $current_username));
						$suffix++;
					}
					$user_nicename = $alt_user_nicename;
				}

				$update_username_query = $wpdb->prepare( "UPDATE $wpdb->users SET user_login = %s, user_nicename = %s WHERE user_login = %s", $new_username, $user_nicename, $current_username );
				if( false === $wpdb->query($update_username_query) ) {
					$errors->add( 'empty_missing_', '<strong>ERROR</strong>: There was a problem updating your username.' );
				}

				die('<!doctype html><html><head><title>Changing username...</title></head><body onload="window.location = \'/login\';">Changing username...</body></html>');
			}
		} else {
			$errors->add( 'empty_missing_', '<strong>ERROR</strong>: That username is already taken.' );
		}
	}
}

add_action( 'admin_enqueue_scripts', 'urb_profile_admin_enqueue_scripts' );
add_action( 'edit_user_profile', 'urb_profile_edit_show_user_profile' );
add_action( 'edit_user_profile_update', 'urb_profile_personal_options_update' );
add_action( 'personal_options_update', 'urb_profile_personal_options_update' );
add_action( 'show_user_profile', 'urb_profile_edit_show_user_profile' );
add_filter( 'user_profile_update_errors', 'urb_profile_user_profile_update_errors', 10, 3 ); // TODO: figure out why 10, 3 has to be here

?>