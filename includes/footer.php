<?php
if( !function_exists('urbanrest_update_footer') ) :
	function urbanrest_update_footer() {
		return '';
	}
endif;
add_filter('update_footer', 'urbanrest_update_footer', 11 );
?>