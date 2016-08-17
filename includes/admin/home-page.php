<?php

if( !function_exists( 'change_home_page_editor_template' ) ) :
function change_home_page_editor_template() {
	$post_id = array_key_exists('post', $_GET) ? $_GET['post'] : ( array_key_exists('post_ID', $_POST) ? $_POST['post_ID'] : false );
	if( !isset( $post_id ) ) return;

	$homepgname = get_the_title($post_id);
	if($homepgname == 'Homepage'){ 
		remove_post_type_support('page', 'editor');
	}
}
endif;

add_action( 'admin_init', 'change_home_page_editor_template' );
?>