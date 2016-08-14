<?php

function urb_button_shortcode( $atts ) {
	$button_attributes = shortcode_atts( array(
		'class'    => '',
		'id'       => '',
		'name'     => '',
		'type'     => 'button',
		'value'    => ''
	), $atts, 'button' );

	if( isset($atts['data']) ){
		$data_attributes = array();
		parse_str($atts['data'], $data_attributes);
		foreach($data_attributes as $key => $value) {
			$button_attributes["data-{$key}"] = $value;
		}
	}

	$button = '';
	$label = ( isset($atts['label']) ) ? $atts['label'] : '';
	
	$button .= '<button' . urb_format_attributes($button_attributes) . '>' . $label . '</button>';
	return $button;
}

function urb_field_generic( $atts ) {
	$input_attributes = shortcode_atts( array(
		'class'       => '',
		'id'          => '',
		'maxlength'   => '',
		'name'        => '',
		'placeholder' => '',
		'required'    => false,
		'type'        => '',
		'value'       => ''
	), $atts, 'field' );

	$input = '';
	if( isset($atts['label']) ){
		$input .= ( isset($input_attributes['id']) ) ? '<label for="' . $input_attributes['id'] . '">' . $atts['label'] . '</label>' : '<label>' . $atts['label'] . '</label>';
	}
	$input .= '<input' . urb_format_attributes($input_attributes) . ' />';
	return $input;
}

function urb_field_shortcode( $atts, $content = null ) {
	$field_attributes = shortcode_atts( array(
		'container_class' => ''
	), $atts, 'field' );

	switch($atts['type']){
		case 'button':   $input = do_shortcode($content); break;
		case 'checkbox': $input = do_shortcode($content); break;
		case 'email':    $input = urb_field_generic($atts); break;
		case 'text':     $input = urb_field_generic($atts); break;
		case 'textarea': $input = urb_field_textarea($atts); break;
		default:         $input = urb_field_generic($atts); break;
	}

	$field_attributes = array_combine(
		array_map(
			function($k) { return str_replace('container_', '', $k); },
			array_keys($field_attributes)
		),
		array_values($field_attributes)
	);

	$field = '<div' . urb_format_attributes($field_attributes) . '>' . $input . '</div>';
	return $field;
}

function urb_field_textarea( $atts ) {
	$textarea_attributes = shortcode_atts( array(
		'class'       => '',
		'id'          => '',
		'maxlength'   => '',
		'name'        => '',
		'placeholder' => '',
		'required'    => false,
		'value'       => ''
	), $atts, 'field' );


	$textarea = '';
	if( isset($atts['label']) ){
		$textarea .= ( isset($textarea_attributes['id']) ) ? '<label for="' . $textarea_attributes['id'] . '">' . $atts['label'] . '</label>' : '<label>' . $atts['label'] . '</label>';
	}
	$value = '';
	if($textarea_attributes['value']) {
		$value = $textarea_attributes['value'];
		unset($textarea_attributes['value']);
	}
	$textarea .= '<textarea' . urb_format_attributes($textarea_attributes) . '>' . $value . '</textarea>';
	return $textarea;
}

function urb_form_after_setup_theme() {
	$single_name = "Form";
	$plural_name = "Forms";
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

function urb_form_init() {
	$single_name = "Form";
	$plural_name = "Forms";
	$description = "Forms are sets of fields that can be responded to by users.";
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
		//'thumbnail',
		//'excerpt',
		//'trackbacks',
		//'custom-fields',
		//'comments',
		//'revisions',
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
		'menu_position'        => 203, // default WP menu_positions multiplied by 10
		'menu_icon'            => 'dashicons-index-card',
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

function urb_form_shortcode( $atts, $content = null ) {
	if( empty($atts['post_id']) ) return;

	$form_post = get_post($atts['post_id']);
	$form_attributes = shortcode_atts( array(
		'action'       => '',
		'class'        => '',
		'id'           => '',
		'method'       => 'post',
		'autocomplete' => 'off'
	), $atts, 'form' );
	
	if( empty($form_attributes['action']) ) $form_attributes['action'] = get_permalink($form_post->ID);

	$form = '<form' . urb_format_attributes($form_attributes) . '>';
	if( isset($atts['title']) ) {
		$form .= '<h5 class="col-xs-12">' . $atts['title'] . '</h5>';
	}
	$form .= do_shortcode($form_post->post_content);
	$form .= '<input name="form_post_id" type="hidden" value="' . $form_post->ID . '" />';
	$form .= "</form>";

	return $form;
}

function urb_format_attributes($atts) {
	$attributes = '';
	foreach($atts as $key => $value) {
		if( $value === true || $value === 'true' ) {
			$attributes .= " {$key}=\"{$key}\"";
		} else if( !empty($value) ) {
			$attributes .= " {$key}=\"{$value}\"";
		}
	}

	return $attributes;
}

function urb_option_generic( $atts ) {
	$option_attributes = shortcode_atts( array(
		'id'       => '',
		'name'     => '',
		'selected' => '',
		'type'     => 'checkbox'
	), $atts );

	if( in_array($option_attributes['type'], array('checkbox', 'radio')) ) {
		$option_attributes['checked'] = $option_attributes['selected'];
		unset($option_attributes['selected']);
	}

	$option = '<input' . urb_format_attributes($option_attributes) . ' />';
	if($atts['label']){
		$option .= ( isset($option_attributes['id']) ) ? '<label for="' . $option_attributes['id'] . '">' . $atts['label'] . '</label>' : '<label>' . $atts['label'] . '</label>';
	}
	return $option;
}

function urb_option_shortcode( $atts ) {
	$a = shortcode_atts( array(
		'id'       => '',
		'label'    => '',
		'name'     => '',
		'selected' => '',
		'type'     => 'checkbox'
	), $atts );

	switch($a['type']) {
		default: return urb_option_generic($a);
	}
}

function urb_form_template_redirect() {
	// Remove automatic formatting of content (adding P and BR elements)
	if( is_singular( sanitize_key('form') ) ) {
		remove_filter( 'the_content', 'wpautop' );
	}
}

add_action( 'after_setup_theme', 'urb_form_after_setup_theme' );
add_action( 'init', 'urb_form_init' );
add_action( 'template_redirect', 'urb_form_template_redirect' );

add_shortcode( 'button', 'urb_button_shortcode' );
add_shortcode( 'field', 'urb_field_shortcode' );
add_shortcode( 'form', 'urb_form_shortcode' );
add_shortcode( 'option', 'urb_option_shortcode' );

?>