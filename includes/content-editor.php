<?php
if( !function_exists('urbanrest_tiny_mce_before_init') ) :
	function urbanrest_tiny_mce_before_init( $init ) {
		$init['block_formats'] = "Paragraph=p; Heading 1=h2; Heading 2=h3; Heading 3=h4; Heading 4=h5; Heading 5=h6";
		return $init;
	}
endif;
add_filter('tiny_mce_before_init', 'urbanrest_tiny_mce_before_init');
?>