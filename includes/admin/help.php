<?php
if( !function_exists('urbanrest_contextual_help') ) :
	function urbanrest_contextual_help($old_help, $screen_id, $screen) {
		$screen->remove_help_tabs();
		return $old_help;
	}
endif;
add_filter('contextual_help', 'urbanrest_contextual_help', 999, 3 );
?>