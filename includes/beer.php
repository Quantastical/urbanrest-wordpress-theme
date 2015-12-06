<?php

function urb_beer_add_meta_boxes() {
	$screen = 'beer';
	$meta_boxes = array(
		'food_pairings_meta_box' => array(
				'title'   => 'Food Pairings',
				'context' => 'advanced'
			),
		'glassware_meta_box' => array(
				'title'   => 'Glassware',
				'context' => 'advanced'
			),
		'third_parties_meta_box' => array(
				'title'   => '3rd Parties',
				'context' => 'side'
			)
	);

	foreach( $meta_boxes as $id => $meta_box ) {
		$callback      = 'urb_' . $id;
		$title         = $meta_box['title'];
		$context       = $meta_box['context'];
		$priority      = 'default';
		$callback_args = null;

		add_meta_box($id, $title, $callback, $screen, $context, $priority, $callback_args);
	}
}

function urb_beer_admin_footer_edit() {
	echo '<script>' . "\n"
	   . "\t" . 'jQuery(function($) {' . "\n"
	   . "\t\t" . 'var $on_deck_option = $("<option value=\"on_deck\">On Deck</option>");' . "\n"
	   . "\t\t" . 'var $on_tap_option = $("<option value=\"on_tap\">On Tap</option>");' . "\n"
	   . "\t\t" . '$("select[name=\"_status\"]").append($on_deck_option, $on_tap_option);' . "\n"
	   . "\t" . '});' . "\n"
	   . '</script>';
}

function urb_beer_admin_footer_post() {
	$post             = get_post();
	$post_type        = get_post_type( $post );
	$post_type_object = get_post_type_object( $post_type );

	if( $post_type !== 'beer' ) {
		return;
	}

	//global $post;

	$on_deck_selected    = false;
	$on_tap_selected     = false;
	$post_status_display = '';
	$post_publish_action = '';
	$post_publish_button = '';

	switch($post->post_status) {
		case 'on_deck' :
			$on_deck_selected = true;
			$post_status_display = "\t\t" . '$("#post-status-display").text("On Deck");' . "\n";
		break;

		case 'on_tap' :
			$on_tap_selected = true;
			$post_status_display = "\t\t" . '$("#post-status-display").text("On Tap");' . "\n";
		break;
	}

	if($on_deck_selected || $on_tap_selected) {
		$post_publish_action = "\t\t" . '$("#original_publish").attr("value", "Update");' . "\n";
		$post_publish_button = "\t\t" . '$("#publish").attr({"name": "save", "value": "Update"});' . "\n";
	}

	echo '<script>' . "\n"
	   . "\t" . 'jQuery(function($) {' . "\n"
	   . "\t\t" . 'var $on_deck_option = $("<option>On Deck</option>");' . "\n"
	   . "\t\t" . '$on_deck_option.attr({' . "\n"
	   . "\t\t\t" . '"selected" : ' . ($on_deck_selected ? 'true' : 'false') . ',' . "\n"
	   . "\t\t\t" . '"value" : "on_deck",' . "\n"
	   . "\t\t" . '});' . "\n"
	   . "\t\t" . '$("select#post_status").append($on_deck_option);' . "\n"

	   . "\t\t" . 'var $on_tap_option = $("<option>On Tap</option>");' . "\n"
	   . "\t\t" . '$on_tap_option.attr({' . "\n"
	   . "\t\t\t" . '"selected" : ' . ($on_tap_selected ? 'true' : 'false') . ',' . "\n"
	   . "\t\t\t" . '"value" : "on_tap",' . "\n"
	   . "\t\t" . '});' . "\n"
	   . "\t\t" . '$("select#post_status").append($on_tap_option);' . "\n"

	   . $post_publish_action
	   . $post_publish_button
	   . $post_status_display
	   . "\t" . '});' . "\n"
	   . '</script>';
}

function urb_beer_admin_footer_post_new() {
	$post             = get_post();
	$post_type        = get_post_type( $post );
	$post_type_object = get_post_type_object( $post_type );

	if( $post_type !== 'beer' ) {
		return;
	}

	$on_deck_selected = false;
	$on_tap_selected = false;
	$post_status_display = '';

	switch($post->post_status) {
		case 'on_deck' :
			$on_deck_selected = true;
			$post_status_display = "\t\t" . '$("#post-status-display").text("On Deck");' . "\n";
		break;

		case 'on_tap' :
			$on_tap_selected = true;
			$post_status_display = "\t\t" . '$("#post-status-display").text("On Tap");' . "\n";
		break;
	}

	echo '<script>' . "\n"
	   . "\t" . 'jQuery(function($) {' . "\n"
	   . "\t\t" . 'var $on_deck_option = $("<option>On Deck</option>");' . "\n"
	   . "\t\t" . '$on_deck_option.attr({' . "\n"
	   . "\t\t\t" . '"selected" : ' . ($on_deck_selected ? 'true' : 'false') . ',' . "\n"
	   . "\t\t\t" . '"value" : "on_deck",' . "\n"
	   . "\t\t" . '});' . "\n"
	   . "\t\t" . '$("select#post_status").append($on_deck_option);' . "\n"

	   . "\t\t" . 'var $on_tap_option = $("<option>On Tap</option>");' . "\n"
	   . "\t\t" . '$on_tap_option.attr({' . "\n"
	   . "\t\t\t" . '"selected" : ' . ($on_tap_selected ? 'true' : 'false') . ',' . "\n"
	   . "\t\t\t" . '"value" : "on_tap",' . "\n"
	   . "\t\t" . '});' . "\n"
	   . "\t\t" . '$("select#post_status").append($on_tap_option);' . "\n"

	   . $post_status_display
	   . "\t" . '});' . "\n"
	   . '</script>';
}

function urb_beer_admin_init() {
	add_meta_box( 'beer_profile', 'Beer Profile', 'urb_beer_admin_init_profile', 'beer', 'normal', 'low');
}

function urb_beer_admin_init_profile() {
	global $post;
	
	// Add a nonce field so we can check for it later.
	wp_nonce_field( 'urb_beer_save_post', 'urb_beer_save_post' );

	$beer = get_post_custom($post->ID);

	$alcohol = ( array_key_exists('alcohol', $beer) ? $beer['alcohol'][0] : '' );
	echo '<p>' . "\n";
	echo "\t" . '<label for="alcohol">Alcohol:</label>' . "\n";
	echo "\t" . '<input id="alcohol" name="alcohol" type="number" value="' . $alcohol . '" min="0" max="33" step="0.1" />' . "\n";
	echo "\t" . '% <abbr title="Alcohol By Volume">ABV</abbr>' . "\n";
	echo "\t" . '<input data-slider="true" data-slider-target="alcohol" type="hidden" value="' . $alcohol . '" data-slider-range="0,33" data-slider-step="0.1" />';
	echo '</p>' . "\n";

	$gravity = ( array_key_exists('gravity', $beer) ? $beer['gravity'][0] : '' );
	echo '<p>' . "\n";
	echo "\t" . '<label for="gravity">Gravity:</label>' . "\n";
	echo "\t" . '<input id="gravity" name="gravity" type="number" max="1.100" min="1.000" step="0.001" value="' . $gravity  . '" />' . "\n";
	echo "\t" . '<abbr title="Original Gravity">OG</abbr>/<abbr title="Starting Gravity">SG</abbr>' . "\n";
	echo "\t" . '<input data-slider="true" data-slider-target="gravity" type="hidden" value="' . $gravity . '" data-slider-range="1.000,1.100" data-slider-step="0.001" />';
	echo '</p>' . "\n";

	$bitterness = ( array_key_exists('bitterness', $beer) ? $beer['bitterness'][0] : '' );
	echo '<p>' . "\n";
	echo "\t" . '<label for="bitterness">Bitterness:</label>' . "\n";
	echo "\t" . '<input id="bitterness" name="bitterness" type="number" value="' . $bitterness . '" min="0" max="100" step="1" />' . "\n";
	echo "\t" . '<abbr title="International Bittering Units">IBUs</abbr>' . "\n";
	echo "\t" . '<input data-slider="true" data-slider-target="bitterness" type="hidden" value="' . $bitterness . '" data-slider-range="0,100" data-slider-step="1" />';
	echo '</p>' . "\n";

	$color = ( array_key_exists('color', $beer) ? $beer['color'][0] : '' );
	echo '<p>' . "\n";
	echo "\t" . '<label for="color">Color:</label>' . "\n";
	echo "\t" . '<input id="color" name="color" type="number" value="' . $color . '" min="0" max="100" step="1" />' . "\n";
	echo "\t" . '<abbr title="Standard Reference Method">SRM</abbr>/&deg;<abbr title="Lovibond">L</abbr>' . "\n";
	echo "\t" . '<input data-slider="true" data-slider-target="color" type="hidden" value="' . $color . '" data-slider-range="0,100" data-slider-step="1" />';
	echo '</p>' . "\n";
}

function urb_beer_after_setup_theme() {
	$single_name = "Beer";
	$plural_name = "Beer";
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

function urb_beer_init() {
	$single_name = "Beer";
	$plural_name = "Beer";
	$description = "Beer is the world's most widely consumed alcoholic beverage.";
	$menu_icon   = "dashicons-beer";
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
		'delete_posts'       => "delete_{$capability_type[0]}",
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
		'page-attributes'
		//'post-formats'
	);

	$taxonomies = array(
		'beer_style',
		'beer_tag'
	);

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
		'menu_position'        => 41, // default WP menu_positions multiplied by 10
		'menu_icon'            => $menu_icon,
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

function urb_food_pairings_meta_box( $post ) {
	/*
	// Add a nonce field so we can check for it later.
	wp_nonce_field( 'urb_beer_save_food_pairings', 'urb_beer_save_food_pairings' );
	*/
	$food_pairings = get_post_meta( $post->ID, 'food_pairings', true );
	$settings = array(
		'wpautop'          => true,
		'media_buttons'    => false,
		'textarea_name'    => 'food_pairings',
		'textarea_rows'    => 3,
		'tabindex'         => null,
		'editor_css'       => null,
		'editor_class'     => '',
		'editor_height'    => null,
		'teeny'            => false,
		'dfw'              => false,
		'tinymce'          => true,
		'quicktags'        => true,
		'drag_drop_upload' => false
	);
	wp_editor($food_pairings, 'food_pairings', $settings);
}

function urb_glassware_meta_box( $post ) {
	/*
	// Add a nonce field so we can check for it later.
	wp_nonce_field( 'urb_beer_save_glassware', 'urb_beer_save_glassware' );
	*/

	$glassware = get_post_meta( $post->ID, 'glassware', true );
	$settings = array(
		'wpautop'          => true,
		'media_buttons'    => false,
		'textarea_name'    => 'glassware',
		'textarea_rows'    => 1,
		'tabindex'         => null,
		'editor_css'       => null,
		'editor_class'     => '',
		'editor_height'    => null,
		'teeny'            => false,
		'dfw'              => false,
		'tinymce'          => true,
		'quicktags'        => true,
		'drag_drop_upload' => false
	);
	wp_editor($glassware, 'glassware', $settings);
}

function urb_third_parties_meta_box( $post ) {
	$options = array(
		'beeradvocate_beer_url' => 'BeerAdvocate Beer URL',
		'ratebeer_beer_url'     => 'RateBeer Beer URL',
		'untappd_beer_url'      => 'Untappd Beer URL'
	);

	foreach( $options as $option => $label ) {
		$value = get_post_meta( $post->ID, $option );

		if( !is_array($value) ) {
			$value = array();
		}

		if( count($value) > 0 ) {
			$value = $value[0];
		} else {
			$value = '';
		}

		echo '<p><strong>' . $label . '</strong></p>';
		echo '<p>';
		echo '<label class="screen-reader-text" for="menu_order">' . $label . '</label>';
		echo '<input type="text" name="' . $option . '" id="' . $option . '" value="' . $value . '" class="ltr" size="16" />';
		echo '</p>';
	}
}

function urb_beer_init_styles() {
	$single_name = 'Style';
	$plural_name = 'Styles';
	$description = "Styles are labels given to beer that describe its overall character and origin.";
	$taxonomy    = sanitize_key($single_name);

	$object_type = 'beer';
	
	$labels = array(
		'name'                       => $plural_name,
		'singular_name'              => $single_name,
		'menu_name'                  => $plural_name,
		'all_items'                  => "All {$plural_name}",
		'edit_item'                  => "Edit {$single_name}",
		'view_item'                  => "View {$single_name}",
		'update_item'                => "Update {$single_name}",
		'add_new_item'               => "Add New {$single_name}",
		'new_item_name'              => "New {$single_name} Name",
		'parent_item'                => "Parent {$single_name}",
		'parent_item_colon'          => "Parent {$single_name}:",
		'search_items'               => "Search {$plural_name}",
		'popular_items'              => "Popular {$plural_name}",
		'separate_items_with_commas' => "Separate " . strtolower($plural_name) . " with commas",
		'add_or_remove_items'        => "Add or remove " . strtolower($plural_name),
		'choose_from_most_used'      => "Choose from most used " . strtolower($plural_name),
		'not_found'                  => "No " . strtolower($plural_name) . " found."
	);
	
	$rewrite = array(
		'slug'         => "style",
		'with_front'   => false,
		'hierarchical' => false,
		'ep_mask'      => EP_NONE
	);
	
	$capabilities = array(
		//'manage_terms',
		//'edit_terms',
		//'delete_terms',
		//'assign_terms'
	);

	$args = array(
		'labels'                => $labels,
		'public'                => true,
		'show_ui'               => true,
		'show_in_menu'          => true,
		'show_in_nav_menus'     => true,
		'show_tagcloud'         => false,
		'show_in_quick_edit'    => true,
		'meta_box_cb'           => null,
		'show_admin_column'     => true,
		'description'           => $description,
		'hierarchical'          => true,
		'update_count_callback' => '',
		'query_var'             => "{$object_type}_{$taxonomy}",
		'rewrite'               => $rewrite,
		'capabilities'          => $capabilities,
		'sort'                  => null
	);

	register_taxonomy( "{$object_type}_{$taxonomy}", $object_type, $args );
}

function urb_beer_init_statuses() {
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
}

function urb_beer_init_tags() {
	$single_name = 'Tag';
	$plural_name = 'Tags';
	$description = "Tags provide a useful way to group related beer that provide more granularity than its style.";
	$taxonomy    = sanitize_key($single_name);

	$object_type = 'beer';
	
	$labels = array(
		'name'                       => $plural_name,
		'singular_name'              => $single_name,
		'menu_name'                  => $plural_name,
		'all_items'                  => "All {$plural_name}",
		'edit_item'                  => "Edit {$single_name}",
		'view_item'                  => "View {$single_name}",
		'update_item'                => "Update {$single_name}",
		'add_new_item'               => "Add New {$single_name}",
		'new_item_name'              => "New {$single_name} Name",
		'parent_item'                => "Parent {$single_name}",
		'parent_item_colon'          => "Parent {$single_name}:",
		'search_items'               => "Search {$plural_name}",
		'popular_items'              => "Popular {$plural_name}",
		'separate_items_with_commas' => "Separate " . strtolower($plural_name) . " with commas",
		'add_or_remove_items'        => "Add or remove " . strtolower($plural_name),
		'choose_from_most_used'      => "Choose from most used " . strtolower($plural_name),
		'not_found'                  => "No " . strtolower($plural_name) . " found."
	);
	
	$rewrite = array(
		'slug'         => "beer/{$taxonomy}",
		'with_front'   => false,
		'hierarchical' => false,
		'ep_mask'      => EP_NONE
	);
	
	$capabilities = array(
		//'manage_terms',
		//'edit_terms',
		//'delete_terms',
		//'assign_terms'
	);

	$args = array(
		'labels'                => $labels,
		'public'                => true,
		'show_ui'               => true,
		'show_in_menu'          => true,
		'show_in_nav_menus'     => true,
		'show_tagcloud'         => false,
		'show_in_quick_edit'    => true,
		'meta_box_cb'           => null,
		'show_admin_column'     => true,
		'description'           => $description,
		'hierarchical'          => false,
		'update_count_callback' => '',
		'query_var'             => $taxonomy,
		'rewrite'               => $rewrite,
		'capabilities'          => $capabilities,
		'sort'                  => null
	);

	register_taxonomy( "{$object_type}_{$taxonomy}", $object_type, $args );
}

function urb_beer_post_updated_messages() {
	$post             = get_post();
	$post_type        = get_post_type( $post );
	$post_type_object = get_post_type_object( $post_type );

	if( $post_type !== 'beer' ) {
		return;
	}

	$messages['beer'] = array(
		0  => '', // Unused. Messages start at index 1.
		1  => 'Beer updated.',
		2  => 'Custom field updated.',
		3  => 'Custom field deleted.',
		4  => 'Beer updated.',
		/* translators: %s: date and time of the revision */
		5  => isset( $_GET['revision'] ) ? sprintf( 'Beer restored to revision from %s', wp_post_revision_title( (int) $_GET['revision'], false ) ) : false,
		6  => 'Beer published.',
		7  => 'Beer saved.',
		8  => 'Beer submitted.',
		9  => sprintf(
			'Beer scheduled for: <strong>%1$s</strong>.',
			// translators: Publish box date format, see http://php.net/date
			date_i18n( __( 'M j, Y @ G:i', 'urbanrest' ), strtotime( $post->post_date ) )
		),
		10 => 'Beer draft updated.'
	);

	if ( $post_type_object->publicly_queryable ) {
		$permalink = get_permalink( $post->ID );

		$view_link = sprintf( ' <a href="%s">%s</a>', esc_url( $permalink ), 'View beer' );
		$messages[ $post_type ][1] .= $view_link;
		$messages[ $post_type ][6] .= $view_link;
		$messages[ $post_type ][9] .= $view_link;

		$preview_permalink = add_query_arg( 'preview', 'true', $permalink );
		$preview_link = sprintf( ' <a target="_blank" href="%s">%s</a>', esc_url( $preview_permalink ), 'Preview beer' );
		$messages[ $post_type ][8]  .= $preview_link;
		$messages[ $post_type ][10] .= $preview_link;
	}

	return $messages;
}

function urb_beer_save_post( $post_id ) {
	// Check if our nonce is set.
	if( !isset( $_POST['urb_beer_save_post'] ) ) {
		return;
	}

	// Verify that the nonce is valid.
	if( !wp_verify_nonce( $_POST['urb_beer_save_post'], 'urb_beer_save_post' ) ) {
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
	urb_beer_save_beer_profile($post_id);
	urb_beer_save_food_pairings($post_id);
	urb_beer_save_glassware($post_id);
	urb_beer_save_third_parties($post_id);
}

function urb_beer_save_beer_profile( $post_id ) {
	if( isset( $_POST['alcohol'] ) ) {
		$alcohol = sanitize_text_field( $_POST['alcohol'] );
		update_post_meta( $post_id, 'alcohol', $alcohol );
	}

	if( isset( $_POST['bitterness'] ) ) {
		$bitterness = sanitize_text_field( $_POST['bitterness'] );
		update_post_meta( $post_id, 'bitterness', $bitterness );
	}

	if( isset( $_POST['gravity'] ) ) {
		$gravity = sanitize_text_field( $_POST['gravity'] );
		update_post_meta( $post_id, 'gravity', $gravity );
	}

	if( isset( $_POST['color'] ) ) {
		$color = sanitize_text_field( $_POST['color'] );
		update_post_meta( $post_id, 'color', $color );
	}
}

function urb_beer_save_food_pairings( $post_id ) {
	/*
	// Check if our nonce is set.
	if( !isset( $_POST['urb_beer_save_food_pairings'] ) ) {
		return;
	}

	// Verify that the nonce is valid.
	if ( ! wp_verify_nonce( $_POST['urb_beer_save_food_pairings'], 'urb_beer_save_food_pairings' ) ) {
		return;
	}

	// If this is an autosave, our form has not been submitted, so we don't want to do anything.
	if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
		return;
	}

	// Check the user's permissions.
	if ( isset( $_POST['post_type'] ) && 'beer' == $_POST['post_type'] ) {

		if ( !current_user_can('edit_beer', $post_id) ) {
			return;
		}

	} else {

		if ( !current_user_can('edit_post', $post_id) ) {
			return;
		}
	}
	*/
	if( isset($_POST['food_pairings']) ) {
		$food_pairings = sanitize_text_field( $_POST['food_pairings'] );
		update_post_meta( $post_id, 'food_pairings', $food_pairings );
	}
}

function urb_beer_save_glassware( $post_id ) {
	/*
	// Check if our nonce is set.
	if( !isset( $_POST['urb_beer_save_glassware'] ) ) {
		return;
	}

	// Verify that the nonce is valid.
	if ( ! wp_verify_nonce( $_POST['urb_beer_save_glassware'], 'urb_beer_save_glassware' ) ) {
		return;
	}

	// If this is an autosave, our form has not been submitted, so we don't want to do anything.
	if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
		return;
	}

	// Check the user's permissions.
	if ( isset( $_POST['post_type'] ) && 'beer' == $_POST['post_type'] ) {

		if ( !current_user_can('edit_beer', $post_id) ) {
			return;
		}

	} else {

		if ( !current_user_can('edit_post', $post_id) ) {
			return;
		}
	}
	*/
	if( isset($_POST['glassware']) ) {
		$glassware = sanitize_text_field( $_POST['glassware'] );
		update_post_meta( $post_id, 'glassware', $glassware );
	}
}

function urb_beer_save_third_parties( $post_id ) {
	/*
	// Check if our nonce is set.
	if( !isset( $_POST['urb_beer_save_third_parties'] ) ) {
		return;
	}

	// Verify that the nonce is valid.
	if ( ! wp_verify_nonce( $_POST['urb_beer_save_third_parties'], 'urb_beer_save_third_parties' ) ) {
		return;
	}

	// If this is an autosave, our form has not been submitted, so we don't want to do anything.
	if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
		return;
	}

	// Check the user's permissions.
	if ( isset( $_POST['post_type'] ) && 'beer' == $_POST['post_type'] ) {

		if ( !current_user_can('edit_beer', $post_id) ) {
			return;
		}

	} else {

		if ( !current_user_can('edit_post', $post_id) ) {
			return;
		}
	}
	*/

	if( isset($_POST['beeradvocate_beer_url']) ) {
		$beeradvocate_beer_url = sanitize_text_field( $_POST['beeradvocate_beer_url'] );
		update_post_meta( $post_id, 'beeradvocate_beer_url', $beeradvocate_beer_url );
	}

	if( isset($_POST['ratebeer_beer_url']) ) {
		$ratebeer_beer_url = sanitize_text_field( $_POST['ratebeer_beer_url'] );
		update_post_meta( $post_id, 'ratebeer_beer_url', $ratebeer_beer_url );
	}

	if( isset($_POST['untappd_beer_url']) ) {
		$untappd_beer_url = sanitize_text_field( $_POST['untappd_beer_url'] );
		update_post_meta( $post_id, 'untappd_beer_url', $untappd_beer_url );
	}
}

add_action( 'add_meta_boxes', 'urb_beer_add_meta_boxes' );
add_action( 'admin_init', 'urb_beer_admin_init' );
add_action( 'admin_footer-post.php', 'urb_beer_admin_footer_post' );
add_action( 'admin_footer-post-new.php', 'urb_Beer_admin_footer_post_new' );
add_action( 'admin_footer-edit.php', 'urb_beer_admin_footer_edit' );
add_action( 'after_setup_theme', 'urb_beer_after_setup_theme' );
add_action( 'init', 'urb_beer_init' );
add_action( 'init', 'urb_beer_init_styles' );
add_action( 'init', 'urb_beer_init_statuses' );
add_action( 'init', 'urb_beer_init_tags' );
add_action( 'save_post', 'urb_beer_save_post' );

add_filter( 'post_updated_messages', 'urb_beer_post_updated_messages' );

?>