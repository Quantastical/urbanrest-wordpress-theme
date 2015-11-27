<?php
function urb_pre_get_document_title() {
	if( is_home() || is_front_page() ) {
		return get_bloginfo('name');
	} else if( is_category() ) {
		return single_cat_title('', false) . ' - ' . get_bloginfo('name');
	} else if( is_single() ) {
		return single_post_title('', false);
	} else if( is_page() ) {
		return get_bloginfo('name') . ': ' . single_post_title('', false);
	} else {
		return wp_title('', false);
	}
}

add_filter( 'pre_get_document_title', 'urb_pre_get_document_title' );
?>