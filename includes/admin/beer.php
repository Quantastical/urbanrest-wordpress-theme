<?php
/*
if( !function_exists( 'urb_create_post_type_beer' ) ) :
	function urb_create_post_type_beer() {
		// Add Beer Post Type
		register_post_type( 'beer',
			array(
				'labels' => array(
					'name' => "Beer",
					'singular_name' => "Beer",
					'not_found' => "No beer found.",
					'menu_name' => "Beer",
					'all_items' => "All Beer",
					'edit_item' => "Edit Beer",
					'view_item' => "View Beer",
					'add_new_item' => "Add New Beer"
				),
				'public' => true,
				'has_archive' => true,
				'menu_icon' => "dashicons-beer",
				'supports' => array( 'title', 'editor', 'page-attributes', 'revisions', 'thumbnail' )
			)
		);

		// Add Beer Statuses
		register_post_status( 'on_tap', array(
			'label'                     => "On Tap",
			'public'                    => true,
			'exclude_from_search'       => false,
			'show_in_admin_all_list'    => true,
			'show_in_admin_status_list' => true,
			'label_count'               => _n_noop( 'On Tap <span class="count">(%s)</span>', 'On Tap <span class="count">(%s)</span>' )
		) );

		register_post_status( 'on_deck', array(
			'label'                     => __( 'On Deck' ),
			'public'                    => true,
			'exclude_from_search'       => false,
			'show_in_admin_all_list'    => true,
			'show_in_admin_status_list' => true,
			'label_count'               => _n_noop( 'On Deck <span class="count">(%s)</span>', 'On Deck <span class="count">(%s)</span>' )
		) );

		// Add Beer Style Categories
		register_taxonomy( 'styles',
			array( 'beer' ),
			array(
				'labels' => array(
					'name' => __( 'Beer Styles' ),
					'singular_name' => __( 'Style' ),
					'menu_name' => "Beer Styles",
					'not_found' => "No styles found.",
					'add_new_item' => "Add New Style",
					'separate_items_with_commas' => "Separate styles with commas",
					'choose_from_most_used' => "Choose from most used styles."
				),
				'public' => true,
				'hierarchical' => true
			)
		);

		// Add Beer Tags
		register_taxonomy( 'tags',
			array( 'beer' ),
			array(
				'labels' => array(
					'name' => __( 'Beer Tags' ),
					'singular_name' => __( 'Tag' ),
					'menu_name' => "Beer Tags"
				),
				'public' => true,
				'hierarchical' => false
			)
		);
	}
endif;
add_action( 'init', 'urb_create_post_type_beer' );
*/
/*
if( !function_exists( 'urbanrest_beer_updated_messages' ) ) :
	function urbanrest_beer_updated_messages( ) {
		$post             = get_post();
		$post_type        = get_post_type( $post );
		$post_type_object = get_post_type_object( $post_type );

		if( $post_type !== 'beer' ) {
			return;
		}

		$messages['beer'] = array(
			0  => '', // Unused. Messages start at index 1.
			1  => __( 'Beer updated.', 'urbanrest' ),
			2  => __( 'Custom field updated.', 'urbanrest' ),
			3  => __( 'Custom field deleted.', 'urbanrest' ),
			4  => __( 'Beer updated.', 'urbanrest' ),
			/ * translators: %s: date and time of the revision * /
			5  => isset( $_GET['revision'] ) ? sprintf( __( 'Beer restored to revision from %s', 'urbanrest' ), wp_post_revision_title( (int) $_GET['revision'], false ) ) : false,
			6  => __( 'Beer published.', 'urbanrest' ),
			7  => __( 'Beer saved.', 'urbanrest' ),
			8  => __( 'Beer submitted.', 'urbanrest' ),
			9  => sprintf(
				__( 'Beer scheduled for: <strong>%1$s</strong>.', 'urbanrest' ),
				// translators: Publish box date format, see http://php.net/date
				date_i18n( __( 'M j, Y @ G:i', 'urbanrest' ), strtotime( $post->post_date ) )
			),
			10 => __( 'Beer draft updated.', 'urbanrest' )
		);

		if ( $post_type_object->publicly_queryable ) {
			$permalink = get_permalink( $post->ID );

			$view_link = sprintf( ' <a href="%s">%s</a>', esc_url( $permalink ), __( 'View beer', 'urbanrest' ) );
			$messages[ $post_type ][1] .= $view_link;
			$messages[ $post_type ][6] .= $view_link;
			$messages[ $post_type ][9] .= $view_link;

			$preview_permalink = add_query_arg( 'preview', 'true', $permalink );
			$preview_link = sprintf( ' <a target="_blank" href="%s">%s</a>', esc_url( $preview_permalink ), __( 'Preview beer', 'urbanrest' ) );
			$messages[ $post_type ][8]  .= $preview_link;
			$messages[ $post_type ][10] .= $preview_link;
		}

		return $messages;
	}
endif;
add_filter( 'post_updated_messages', 'urbanrest_beer_updated_messages' );
*/
/*
if( !function_exists( 'urbanrest_save_beer_profile' ) ) :
	function urbanrest_save_beer_profile( $post_id ) {
		// Check if our nonce is set.
		if( !isset( $_POST['urbanrest_beer_profile_nonce'] ) ) {
			return;
		}

		// Verify that the nonce is valid.
		if( !wp_verify_nonce( $_POST['urbanrest_beer_profile_nonce'], 'urbanrest_save_beer_profile' ) ) {
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

		/ * OK, it's safe for us to save the data now. * /
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
add_action( 'save_post', 'urbanrest_save_beer_profile' );
*/
/*
if( !function_exists( 'urbanrest_beer_profile' ) ) :
	function urbanrest_beer_profile( ) {
		global $post;
		
		// Add a nonce field so we can check for it later.
		wp_nonce_field( 'urbanrest_save_beer_profile', 'urbanrest_beer_profile_nonce' );

		$beer = get_post_custom($post->ID);

		$alcohol_by_volume = ( array_key_exists('alcohol_by_volume', $beer) ? $beer['alcohol_by_volume'][0] : '' );
		echo '<p>' . "\n";
		echo "\t" . '<label for="alcohol_by_volume">Alcohol:</label>' . "\n";
		echo "\t" . '<input id="alcohol_by_volume" name="alcohol_by_volume" type="number" value="' . $alcohol_by_volume . '" min="0" max="33" step="0.1" />' . "\n";
		echo "\t" . '% <abbr title="Alcohol By Volume">ABV</abbr>' . "\n";
		echo "\t" . '<input data-slider="true" data-slider-target="alcohol_by_volume" type="hidden" value="' . $alcohol_by_volume . '" data-slider-range="0,33" data-slider-step="0.1" />';
		echo '</p>' . "\n";

		$original_gravity = ( array_key_exists('original_gravity', $beer) ? $beer['original_gravity'][0] : '' );
		echo '<p>' . "\n";
		echo "\t" . '<label for="original_gravity">Gravity:</label>' . "\n";
		echo "\t" . '<input id="original_gravity" name="original_gravity" type="number" value="' . $original_gravity . '" max="2" min="1" step="0.01" />' . "\n";
		echo "\t" . '<abbr title="Original Gravity">OG</abbr>/<abbr title="Starting Gravity">SG</abbr>' . "\n";
		echo "\t" . '<input data-slider="true" data-slider-target="original_gravity" type="hidden" value="' . $original_gravity . '" data-slider-range="1,2" data-slider-step="0.01" />';
		echo '</p>' . "\n";

		$international_bittering_unit = ( array_key_exists('international_bittering_unit', $beer) ? $beer['international_bittering_unit'][0] : '' );
		echo '<p>' . "\n";
		echo "\t" . '<label for="international_bittering_unit">Bitterness:</label>' . "\n";
		echo "\t" . '<input id="international_bittering_unit" name="international_bittering_unit" type="number" value="' . $international_bittering_unit . '" min="0" max="100" step="1" />' . "\n";
		echo "\t" . '<abbr title="International Bittering Units">IBUs</abbr>' . "\n";
		echo "\t" . '<input data-slider="true" data-slider-target="international_bittering_unit" type="hidden" value="' . $international_bittering_unit . '" data-slider-range="0,100" data-slider-step="1" />';
		echo '</p>' . "\n";

		$standard_reference_method = ( array_key_exists('standard_reference_method', $beer) ? $beer['standard_reference_method'][0] : '' );
		echo '<p>' . "\n";
		echo "\t" . '<label for="standard_reference_method">Color:</label>' . "\n";
		echo "\t" . '<input id="standard_reference_method" name="standard_reference_method" type="number" value="' . $standard_reference_method . '" min="0" max="100" step="1" />' . "\n";
		echo "\t" . '<abbr title="Standard Reference Method">SRM</abbr>/&deg;<abbr title="Lovibond">L</abbr>' . "\n";
		echo "\t" . '<input data-slider="true" data-slider-target="standard_reference_method" type="hidden" value="' . $standard_reference_method . '" data-slider-range="0,100" data-slider-step="1" />';
		echo '</p>' . "\n";
	}
endif;
*/
/*
if( !function_exists( 'urb_beer_fields' ) ) :
	function urb_beer_fields() {
		add_meta_box( 'beer_profile', 'Beer Profile', 'urbanrest_beer_profile', 'beer', 'normal', 'low');
	}
endif;
add_action( 'admin_init', 'urb_beer_fields' );
*/
?>