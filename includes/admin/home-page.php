<?php

if( !function_exists( 'urbanrest_save_beer_on_tap' ) ) :
	function urbanrest_save_beer_on_tap( $post_id ) {
		// Check if our nonce is set.
		if( !isset( $_POST['urbanrest_beer_on_tap_nonce'] ) ) {
			return;
		}

		// Verify that the nonce is valid.
		if( !wp_verify_nonce( $_POST['urbanrest_beer_on_tap_nonce'], 'urbanrest_save_beer_on_tap' ) ) {
			return;
		}

		// If this is an autosave, our form has not been submitted, so we don't want to do anything.
		if( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
			return;
		}

		// Check the user's permissions.
		if( isset( $_POST['post_type'] ) && 'page' == $_POST['post_type'] ) {
			if( !current_user_can( 'edit_page', $post_id ) ) {
				return;
			}
		} else {
			if( !current_user_can( 'edit_post', $post_id ) ) {
				return;
			}
		}

		/* OK, it's safe for us to save the data now. */
		if( isset( $_POST['alcohol_by_volume'] ) ) {
			$alcohol_by_volume = sanitize_text_field( $_POST['alcohol_by_volume'] );
			update_post_meta( $post_id, 'alcohol_by_volume', $alcohol_by_volume );
		}

		if( isset( $_POST['international_bittering_unit'] ) ) {
			$international_bittering_unit = sanitize_text_field( $_POST['international_bittering_unit'] );
			update_post_meta( $post_id, 'international_bittering_unit', $international_bittering_unit );
		}

		if( isset( $_POST['original_gravity'] ) ) {
			$original_gravity = sanitize_text_field( $_POST['original_gravity'] );
			update_post_meta( $post_id, 'original_gravity', $original_gravity );
		}

		if( isset( $_POST['standard_reference_method'] ) ) {
			$standard_reference_method = sanitize_text_field( $_POST['standard_reference_method'] );
			update_post_meta( $post_id, 'standard_reference_method', $standard_reference_method );
		}
	}
endif;
add_action( 'save_post', 'urbanrest_save_beer_on_tap' );

if( !function_exists( 'urbanrest_beer_on_tap' ) ) :
	function urbanrest_beer_on_tap( ) {
		// Add a nonce field so we can check for it later.
		wp_nonce_field( 'urbanrest_save_beer_on_tap', 'urbanrest_save_beer_on_tap_nonce' );

		$on_tap_args = array(
			'posts_per_page' => -1, // no pagination
			'post_type'      => 'beer',
			'post_status'    => 'on_tap',
		);
		$taps = get_posts($on_tap_args);

		echo '<ul class="menu ui-sortable" id="on-tap-to-edit">' . "\n";
		foreach( $taps as $tap ) {
			echo "\t" . '<li>' . $tap->post_title . '</li>' . "\n";
		}
		echo '</ul>' . "\n";

	}
endif;

if( !function_exists( 'change_home_page_editor_template' ) ) :
function change_home_page_editor_template() {
	$post_id = array_key_exists('post', $_GET) ? $_GET['post'] : ( array_key_exists('post_ID', $_POST) ? $_POST['post_ID'] : false );
	if( !isset( $post_id ) ) return;

	$homepgname = get_the_title($post_id);
	if($homepgname == 'Homepage'){ 
		remove_post_type_support('page', 'editor');
	}

	// Hide the editor on a page with a specific page template
	// Get the name of the Page Template file.
	$template_file = get_post_meta($post_id, '_wp_page_template', true);
	if($template_file == 'home.php'){ // the filename of the page template
		remove_post_type_support('page', 'editor');
		add_meta_box( 'beer_on_tap', 'On Tap', 'urbanrest_beer_on_tap', 'page', 'normal', 'low');
	}
}
endif;
add_action( 'admin_init', 'change_home_page_editor_template' );
?>