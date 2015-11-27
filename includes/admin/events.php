<?php
/*
if( !function_exists( 'urb_create_post_type_event' ) ) :
	function urb_create_post_type_event() {
		// Add Event Post Type
		register_post_type( 'event',
			array(
				'labels' => array(
					'name' => "Events",
					'singular_name' => "Event",
					'not_found' => "No events found.",
					'menu_name' => "Events",
					'all_items' => "All Events",
					'edit_item' => "Edit Event",
					'view_item' => "View Event",
					'add_new_item' => "Add New Event"
				),
				'public' => true,
				'has_archive' => true,
				'menu_icon' => "dashicons-calendar-alt",
				'supports' => array( 'title', 'editor', 'revisions', 'thumbnail' )
			)
		);
	}
endif;
add_action( 'init', 'urb_create_post_type_event' );
*/
/*
if( !function_exists( 'urbanrest_event_updated_messages' ) ) :
	function urbanrest_event_updated_messages( ) {
		$post             = get_post();
		$post_type        = get_post_type( $post );
		$post_type_object = get_post_type_object( $post_type );

		if( $post_type !== 'event' ) {
			return;
		}

		$messages['event'] = array(
			0  => '', // Unused. Messages start at index 1.
			1  => __( 'Event updated.', 'urbanrest' ),
			2  => __( 'Custom field updated.', 'urbanrest' ),
			3  => __( 'Custom field deleted.', 'urbanrest' ),
			4  => __( 'Event updated.', 'urbanrest' ),
			/ * translators: %s: date and time of the revision * /
			5  => isset( $_GET['revision'] ) ? sprintf( __( 'Event restored to revision from %s', 'urbanrest' ), wp_post_revision_title( (int) $_GET['revision'], false ) ) : false,
			6  => __( 'Event published.', 'urbanrest' ),
			7  => __( 'Event saved.', 'urbanrest' ),
			8  => __( 'Event submitted.', 'urbanrest' ),
			9  => sprintf(
				__( 'Event scheduled for: <strong>%1$s</strong>.', 'urbanrest' ),
				// translators: Publish box date format, see http://php.net/date
				date_i18n( __( 'M j, Y @ G:i', 'urbanrest' ), strtotime( $post->post_date ) )
			),
			10 => __( 'Event draft updated.', 'urbanrest' )
		);

		if ( $post_type_object->publicly_queryable ) {
			$permalink = get_permalink( $post->ID );

			$view_link = sprintf( ' <a href="%s">%s</a>', esc_url( $permalink ), __( 'View event', 'urbanrest' ) );
			$messages[ $post_type ][1] .= $view_link;
			$messages[ $post_type ][6] .= $view_link;
			$messages[ $post_type ][9] .= $view_link;

			$preview_permalink = add_query_arg( 'preview', 'true', $permalink );
			$preview_link = sprintf( ' <a target="_blank" href="%s">%s</a>', esc_url( $preview_permalink ), __( 'Preview event', 'urbanrest' ) );
			$messages[ $post_type ][8]  .= $preview_link;
			$messages[ $post_type ][10] .= $preview_link;
		}

		return $messages;
	}
endif;
add_filter( 'post_updated_messages', 'urbanrest_event_updated_messages' );
*/
/*
if( !function_exists( 'urbanrest_save_event_information' ) ) :
	function urbanrest_save_event_information( $post_id ) {
		// Check if our nonce is set.
		if( !isset( $_POST['urbanrest_event_information_nonce'] ) ) {
			return;
		}

		// Verify that the nonce is valid.
		if( !wp_verify_nonce( $_POST['urbanrest_event_information_nonce'], 'urbanrest_save_event_information' ) ) {
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
		$fields = array('all_day');
		foreach( $fields as $field ) {
			if( isset( $_POST[$field] ) ) {
				$value = sanitize_text_field( $_POST[$field] );
				update_post_meta( $post_id, $field, $value );
			}
		}

		$start_datetime = new DateTime();
		$start_datetime->setTimeZone( new DateTimeZone('America/Detroit') );
		if( isset($_POST['start_datetime_month']) && isset($_POST['start_datetime_day']) && isset($_POST['start_datetime_year']) )
		{
			$start_datetime->setDate(
				$_POST['start_datetime_year'],
				$_POST['start_datetime_month'],
				$_POST['start_datetime_day']
			);
		}
		if( isset($_POST['start_datetime_hour']) && isset($_POST['start_datetime_minute']) )
		{
			$start_datetime->setTime(
				$_POST['start_datetime_hour'],
				$_POST['start_datetime_minute']
			);
		}
		update_post_meta( $post_id, 'start_datetime', $start_datetime->format(DATE_W3C) );

		$end_datetime = new DateTime();
		$end_datetime->setTimeZone( new DateTimeZone('America/Detroit') );
		if( isset($_POST['end_datetime_month']) && isset($_POST['end_datetime_day']) && isset($_POST['end_datetime_year']) )
		{
			$end_datetime->setDate(
				$_POST['end_datetime_year'],
				$_POST['end_datetime_month'],
				$_POST['end_datetime_day']
			);
		}
		if( isset($_POST['end_datetime_hour']) && isset($_POST['end_datetime_minute']) )
		{
			$end_datetime->setTime(
				$_POST['end_datetime_hour'],
				$_POST['end_datetime_minute']
			);
		}
		update_post_meta( $post_id, 'end_datetime', $end_datetime->format(DATE_W3C) );
	}
endif;
add_action( 'save_post', 'urbanrest_save_event_information' );
*/
/*
if( !function_exists( 'urbanrest_event_information' ) ) :
	function urbanrest_event_information( ) {
		global $post;
		
		// Add a nonce field so we can check for it later.
		wp_nonce_field( 'urbanrest_save_event_information', 'urbanrest_event_information_nonce' );

		$event = get_post_custom($post->ID);

		$all_day = ( array_key_exists('all_day', $event) ? $event['all_day'][0] : '' );
		$now = new DateTime('now', new DateTimeZone('America/Detroit'));
		$start_datetime = ( array_key_exists('start_datetime', $event) ? DateTime::createFromFormat( DATE_W3C, $event['start_datetime'][0] ) : $now );
		$end_datetime = ( array_key_exists('end_datetime', $event) ? DateTime::createFromFormat( DATE_W3C, $event['end_datetime'][0] ) : $now );

		include_once('events-fields.php');
	}
endif;
*/
/*
if( !function_exists( 'urb_event_fields' ) ) :
	function urb_event_fields() {
		add_meta_box( 'event_information', 'Event Information', 'urbanrest_event_information', 'event', 'normal', 'low');
	}
endif;
add_action( 'admin_init', 'urb_event_fields' );
*/
?>