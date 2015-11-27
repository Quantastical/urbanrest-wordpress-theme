<?php
if ( !function_exists('urbanrest_admin_footer_text') ) :
	function urbanrest_admin_footer_text() {
		return '';
	}
endif;
add_filter('admin_footer_text', 'urbanrest_admin_footer_text');
?>