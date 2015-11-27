<?php

	function urb_product_edit_tag_form_fields( $tag ) {
		global $wpdb;
		$meta_type = substr($wpdb->termmeta, strlen($wpdb->prefix), strlen('meta'));
	$object_id = $tag->term_id;
	$meta_key = 'subtitle';
	$single = true;
	$value = get_metadata( $meta_type, $object_id, $meta_key, $single);
?>
<tr class="form-field term-description-wrap">
	<th scope="row">
		<label for="subtitle">Subtitle</label>
	</th>
	<td>
		<input name="subtitle" id="subtitle" type="text" value="<?php echo $value; ?>" size="40" />
	</td>
</tr>   
<?php
}

function urb_product_edited_terms( $term_id ) {
	global $wpdb;
	$meta_type = substr($wpdb->termmeta, strlen($wpdb->prefix), strlen('meta'));
	$object_id = $term_id;	
	$meta_key = 'subtitle';
	$prev_value = null;

	if( isset($_POST[$meta_key]) ) {
		$meta_value = esc_attr( $_POST[$meta_key] );
		update_metadata( $meta_type, $object_id, $meta_key, $meta_value, $prev_value );
	}
}

function urb_product_after_setup_theme() {
	$single_name = "Product";
	$plural_name = "Products";
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

function urb_product_init() {
	$single_name = "Product";
	$plural_name = "Products";
	$description = "Procuts are the items that can be sold.";
	$menu_icon   = "dashicons-barcode";
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
		'menu_position'        => 43, // default WP menu_positions multiplied by 10
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

function urb_product_init_categories() {
	$single_name = 'Category';
	$plural_name = 'Categories';
	$description = "Categorize products into groups and sub-groups of similar items.";
	$taxonomy    = sanitize_key($single_name);

	$object_type = array( 'product' );
	
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
		'slug'         => "product/{$taxonomy}",
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
		'query_var'             => $taxonomy,
		'rewrite'               => $rewrite,
		'capabilities'          => $capabilities,
		'sort'                  => null
	);

	register_taxonomy( "product_{$taxonomy}", $object_type, $args );
}

function urb_product_post_updated_messages() {
	$post             = get_post();
	$post_type        = get_post_type( $post );
	$post_type_object = get_post_type_object( $post_type );

	if( $post_type !== 'product' ) {
		return;
	}

	$messages['product'] = array(
		0  => '', // Unused. Messages start at index 1.
		1  => 'Product updated.',
		2  => 'Custom field updated.',
		3  => 'Custom field deleted.',
		4  => 'Product updated.',
		/* translators: %s: date and time of the revision */
		5  => isset( $_GET['revision'] ) ? sprintf( 'Product restored to revision from %s', wp_post_revision_title( (int) $_GET['revision'], false ) ) : false,
		6  => 'Product published.',
		7  => 'Product saved.',
		8  => 'Product submitted.',
		9  => sprintf(
			'Product scheduled for: <strong>%1$s</strong>.',
			// translators: Publish box date format, see http://php.net/date
			date_i18n( __( 'M j, Y @ G:i', 'urbanrest' ), strtotime( $post->post_date ) )
		),
		10 => 'Product draft updated.'
	);

	if ( $post_type_object->publicly_queryable ) {
		$permalink = get_permalink( $post->ID );

		$view_link = sprintf( ' <a href="%s">%s</a>', esc_url( $permalink ), 'View product' );
		$messages[ $post_type ][1] .= $view_link;
		$messages[ $post_type ][6] .= $view_link;
		$messages[ $post_type ][9] .= $view_link;

		$preview_permalink = add_query_arg( 'preview', 'true', $permalink );
		$preview_link = sprintf( ' <a target="_blank" href="%s">%s</a>', esc_url( $preview_permalink ), 'Preview product' );
		$messages[ $post_type ][8]  .= $preview_link;
		$messages[ $post_type ][10] .= $preview_link;
	}

	return $messages;
}

add_action( 'after_setup_theme', 'urb_product_after_setup_theme' );
add_action( 'init', 'urb_product_init' );
add_action( 'init', 'urb_product_init_categories' );
add_action( 'edit_tag_form_fields', 'urb_product_edit_tag_form_fields' );
add_action( 'edited_terms', 'urb_product_edited_terms' );
//add_action( 'init', 'urb_product_add_taxonomy_meta' );

add_filter( 'post_updated_messages', 'urb_product_post_updated_messages' );

?>