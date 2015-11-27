<?php

function urb_role_admin_init() {
	remove_role('subscriber');
	remove_role('editor');
	remove_role('author');
	remove_role('contributor');
	
	add_role( 'employee', 'Employee', array(
		'read' => true
	));

	add_role( 'member', 'URBcrew Member', array(
		'read' => true
	));

	add_role( 'customer', 'Customer', array(
		'read' => true
	));
}

function urb_author_slug_init() {
	global $wp_rewrite;
	$author_slug = 'user'; // change slug name
	$wp_rewrite->author_base = $author_slug;
}

add_action( 'admin_init', 'urb_role_admin_init');
add_action( 'init', 'urb_author_slug_init' );
?>