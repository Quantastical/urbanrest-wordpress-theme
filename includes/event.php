<?php

function urb_event_admin_init() {
	add_meta_box( 'event_information', 'Event Information', 'urb_event_admin_init_event_information', 'event', 'normal', 'low');
}

function urb_event_admin_init_event_information() {
	global $post;
		
	// Add a nonce field so we can check for it later.
	wp_nonce_field( 'urb_event_save_post', 'urb_event_save_post' );

	$event = get_post_custom($post->ID);

	$all_day = ( array_key_exists('all_day', $event) ? $event['all_day'][0] : '' );
	$now = new DateTime('now', new DateTimeZone('America/Detroit'));
	$start_datetime = ( array_key_exists('start_datetime', $event) ? DateTime::createFromFormat( DATE_W3C, $event['start_datetime'][0] ) : $now );
	$end_datetime = ( array_key_exists('end_datetime', $event) ? DateTime::createFromFormat( DATE_W3C, $event['end_datetime'][0] ) : $now );

	echo '<p>' . "\n";
	echo "\t" . '<label for="all_day">All Day Event:</label>' . "\n";
	echo "\t" . '<input type="checkbox" id="all_day" name="all_day" value="true"' . ($all_day ? ' checked="checked"' : '') . ' />' . "\n";
	echo "\t" . '<script type="text/javascript">' . "\n";
	echo "\t\t" . 'jQuery(function($){' . "\n";
	echo "\t\t\t" . "$('#all_day').on('change',function(){" . "\n";
	echo "\t\t\t\t" . "$('.label_time, .start_datetime_time, .end_datetime_time').css('display', ($(this).is(':checked')) ? 'none' : '');" . "\n";
	echo "\t\t\t" . '});' . "\n";
	echo "\t\t" . '});' . "\n";
	echo "\t" . '</script>' . "\n";
	echo '</p>' . "\n";
	echo '<p>' . "\n";
	echo "\t" . '<label for="start_datetime_month">Start Date<span class="label_time"> &amp; Time</span>:</label>' . "\n";
	echo "\t" . '<span class="start_datetime_date">' . "\n";
	echo "\t\t" . '<select id="start_datetime_month" name="start_datetime_month">' . "\n";
	for( $month = 1; $month <= 12; $month++ ) {
		echo "\t\t\t" . '<option value="' . str_pad($month, 2, '0') . '"' . ($start_datetime->format('m') == $month ? ' selected="selected"' : '') . '>' . date('m-M', mktime(0, 0, 0, $month, 10)) . '</option>' . "\n";
	}
	echo "\t\t" . '</select>';
	echo "\t\t" . '<input id="start_datetime_day" name="start_datetime_day" type="number" min="1" max="31" step="1" maxlength="2" value="' . $start_datetime->format('d') . '" />' . "\n";
	echo "\t\t" . ',' . "\n";
	echo "\t\t" . '<input id="start_datetime_year" name="start_datetime_year" type="number" min="2000" max="2100" step="1" maxlength="4" value="' . $start_datetime->format('Y') . '" />' . "\n";
	echo "\t" . '</span>' . "\n";
	echo "\t" . '<span class="start_datetime_time">' . "\n";
	echo "\t\t" . '@' . "\n";
	echo "\t\t" . '<input id="start_datetime_hour" name="start_datetime_hour" type="number" min="1" max="24" step="1" maxlength="2" value="' . $start_datetime->format('H') . '" />' . "\n";
	echo "\t\t" . ':' . "\n";
	echo "\t\t" . '<input id="start_datetime_minute" name="start_datetime_minute" type="number" min="0" max="59" step="1" maxlength="2"value="' . $start_datetime->format('i') . '" />' . "\n";
	echo "\t" . '</span>' . "\n";
	echo '</p>' . "\n";
	echo '<p>' . "\n";
	echo "\t" . '<label for="end_datetime_month">End Date<span class="label_time"> &amp; Time</span>:</label>' . "\n";
	echo "\t" . '<span class="end_datetime_date">' . "\n";
	echo "\t\t" . '<select id="end_datetime_month" name="end_datetime_month">' . "\n";
	for( $month = 1; $month <= 12; $month++ ) {
		echo "\t\t\t" . '<option value="' . str_pad($month, 2, '0') . '"' . ($end_datetime->format('m') == $month ? ' selected="selected"' : '') . '>' . date('m-M', mktime(0, 0, 0, $month, 10)) . '</option>' . "\n";
	}
	echo "\t\t" . '</select>' . "\n";
	echo "\t\t" . '<input id="end_datetime_day" name="end_datetime_day" type="number" min="1" max="31" step="1" maxlength="2" value="' . $end_datetime->format('d') . '" />' . "\n";
	echo "\t\t" . ',' . "\n";
	echo "\t\t" . '<input id="end_datetime_year" name="end_datetime_year" type="number" min="2000" max="2100" step="1" maxlength="4" value="' . $end_datetime->format('Y') . '" />' . "\n";
	echo "\t" . '</span>' . "\n";
	echo "\t" . '<span class="end_datetime_time">' . "\n";
	echo "\t\t" . '@' . "\n";
	echo "\t\t" . '<input id="end_datetime_hour" name="end_datetime_hour" type="number" min="1" max="24" step="1" maxlength="2" value="' . $end_datetime->format('H') . '" />' . "\n";
	echo "\t\t" . ':' . "\n";
	echo "\t\t" . '<input id="end_datetime_minute" name="end_datetime_minute" type="number" min="0" max="59" step="1" maxlength="2" value="' . $end_datetime->format('i') . '" />' . "\n";
	echo "\t" . '</span>' . "\n";
	echo '</p>' . "\n";
}

function urb_event_after_setup_theme() {
	$single_name = "Event";
	$plural_name = "Events";
	$capability_type = array( sanitize_key($single_name), sanitize_key($plural_name) );
	$capabilities = array(
		'edit_post'          => "edit_{$capability_type[0]}",
		'read_post'          => "read_{$capability_type[0]}",
		'delete_posts'       => "delete_{$capability_type[1]}",
		'edit_posts'         => "edit_{$capability_type[1]}",
		'edit_others_posts'  => "edit_others_{$capability_type[1]}",
		'publish_posts'      => "publish_{$capability_type[1]}",
		'read_private_posts' => "read_private_{$capability_type[1]}",
		'create_posts'       => "edit_{$capability_type[1]}"
	);
	
	$administrator_role = get_role( 'administrator' );
	foreach( $capabilities as $capability ) {
		$administrator_role->add_cap( $capability, true );
	}
}

function urb_event_init() {
	$single_name = "Event";
	$plural_name = "Events";
	$description = "Events are happenings such as festivals, competitions, special occasions, and other timed experiences.";
	$post_type   = sanitize_key($single_name);

	$labels = array(
		'name'               => $plural_name,
		'singular_name'      => $single_name,
		'menu_name'          => $plural_name,
		'name_admin_bar'     => $single_name,
		'all_items'          => "All {$plural_name}",
		'add_new'            => "Add New",
		'add_new_item'       => "Add New {$single_name}",
		'edit_item'          => "Edit {$single_name}",
		'new_item'           => "New {$single_name}",
		'view_item'          => "View {$single_name}",
		'search_items'       => "Search {$plural_name}",
		'not_found'          => "No " . strtolower($plural_name) . " found.",
		'not_found_in_trash' => "No " . strtolower($plural_name) . " found in Trash.",
		'parent_item_colon'  => "Parent {$plural_name}"
	);

	$capability_type = array( sanitize_key($single_name), sanitize_key($plural_name) );
	$capabilities = array(
		'edit_post'          => "edit_{$capability_type[0]}",
		'read_post'          => "read_{$capability_type[0]}",
		'delete_posts'       => "delete_{$capability_type[1]}",
		'edit_posts'         => "edit_{$capability_type[1]}",
		'edit_others_posts'  => "edit_others_{$capability_type[1]}",
		'publish_posts'      => "publish_{$capability_type[1]}",
		'read_private_posts' => "read_private_{$capability_type[1]}",
		'create_posts'       => "edit_{$capability_type[1]}"
	);

	$supports = array(
		'title',
		'editor',
		//'author',
		'thumbnail',
		//'excerpt',
		//'trackbacks',
		//'custom-fields',
		//'comments',
		'revisions',
		//'page-attributes'
		//'post-formats'
	);

	$taxonomies = array();

	$rewrite = array(
		'slug'       => $post_type,
		'with_front' => false,
		'feeds'      => true,
		'pages'      => true,
		'ep_mask'    => EP_PERMALINK
	);

	$args = array(
		'labels'               => $labels,
		'description'          => $description,
		'public'               => true,
		'exclude_from_search'  => false,
		'publicly_queryable'   => true,
		'show_ui'              => true,
		'snow_in_nav_menus'    => true,
		'show_in_menu'         => true,
		'show_in_admin_bar'    => true,
		'menu_position'        => 42, // default WP menu_positions multiplied by 10
		'menu_icon'            => 'dashicons-calendar-alt',
		'capability_type'      => $capability_type,
		'capabilities'         => $capabilities,
		'map_meta_cap'         => false,
		'hierarchical'         => false,
		'supports'             => $supports,
		'register_meta_box_cb' => null,
		'taxonomies'           => $taxonomies,
		'has_archive'          => true,
		'permalink_epmask'     => EP_PERMALINK,
		'rewrite'              => $rewrite,
		'query_var'            => $post_type,
		'can_export'           => true
	);

	register_post_type( $post_type, $args );
}

function urb_event_post_updated_messages() {
	$post             = get_post();
	$post_type        = get_post_type( $post );
	$post_type_object = get_post_type_object( $post_type );

	if( $post_type !== 'event' ) {
		return;
	}

	$messages['event'] = array(
		0  => '', // Unused. Messages start at index 1.
		1  => 'Event updated.',
		2  => 'Custom field updated.',
		3  => 'Custom field deleted.',
		4  => 'Event updated.',
		/* translators: %s: date and time of the revision */
		5  => isset( $_GET['revision'] ) ? sprintf( 'Event restored to revision from %s', wp_post_revision_title( (int) $_GET['revision'], false ) ) : false,
		6  => 'Event published.',
		7  => 'Event saved.',
		8  => 'Event submitted.',
		9  => sprintf(
			'Event scheduled for: <strong>%1$s</strong>.',
			// translators: Publish box date format, see http://php.net/date
			date_i18n( __( 'M j, Y @ G:i', 'urbanrest' ), strtotime( $post->post_date ) )
		),
		10 => 'Event draft updated.'
	);

	if ( $post_type_object->publicly_queryable ) {
		$permalink = get_permalink( $post->ID );

		$view_link = sprintf( ' <a href="%s">%s</a>', esc_url( $permalink ), 'View event' );
		$messages[ $post_type ][1] .= $view_link;
		$messages[ $post_type ][6] .= $view_link;
		$messages[ $post_type ][9] .= $view_link;

		$preview_permalink = add_query_arg( 'preview', 'true', $permalink );
		$preview_link = sprintf( ' <a target="_blank" href="%s">%s</a>', esc_url( $preview_permalink ), 'Preview event' );
		$messages[ $post_type ][8]  .= $preview_link;
		$messages[ $post_type ][10] .= $preview_link;
	}

	return $messages;
}

function urb_event_save_post() {
	// Check if our nonce is set.
	if( !isset( $_POST['urb_event_save_post'] ) ) {
		return;
	}

	// Verify that the nonce is valid.
	if( !wp_verify_nonce( $_POST['urb_event_save_post'], 'urb_event_save_post' ) ) {
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

add_action( 'admin_init', 'urb_event_admin_init' );
add_action( 'after_setup_theme', 'urb_event_after_setup_theme' );
add_action( 'init', 'urb_event_init' );
add_action( 'save_post', 'urb_event_save_post' );

add_filter( 'post_updated_messages', 'urb_event_post_updated_messages' );

?>