<?php

function urb_mce_buttons_2( $buttons ) {
	$buttons[] = 'superscript';
	$buttons[] = 'subscript';

	return $buttons;
}

function urb_mce_buttons_3( $buttons ) {
	array_unshift( $buttons, 'fontselect' );
	array_unshift( $buttons, 'fontsizeselect' );

	return $buttons;
}

function urb_tiny_mce_before_init( $init ) {
	$init['block_formats'] = "Paragraph=p;"
	                       . "Heading 1=h2;"
	                       . "Heading 2=h3;"
	                       . "Heading 3=h4;"
	                       . "Heading 4=h5;"
	                       . "Heading 5=h6;";
	$init['font_formats'] = "Sans-Serif (Default)='Roboto',Arial,'Helvetica Neue',Helvetica,sans-serif;"
	                      . "Serif='Roboto Slab',TimesNewRoman,'Times New Roman',Times,Baskerville,Georgia,serif;"
	                      . "Monospace='Roboto Mono','Courier New',Courier,'Lucida Sans Typewriter','Lucida Typewriter',monospace;"
	                      . "Urbanrest='Legend M54',Impact,Haettenschweiler,'Franklin Gothic Bold',Charcoal,'Helvetica Inserat','Bitstream Vera Sans Bold','Arial Black',sans-serif;"
	                      . "Chalkboard='Chalk It Up',Papyrus,fantasy;"
	                      . "Cursive='Satisfy','Brush Script MT',cursive;"
	                      . "Kickstarter='RNS Baruta','Arial Rounded MT Bold','Helvetica Rounded',Arial,sans-serif;";
	return $init;
}

add_filter('mce_buttons_2', 'urb_mce_buttons_2');
add_filter('mce_buttons_3', 'urb_mce_buttons_3');
add_filter('tiny_mce_before_init', 'urb_tiny_mce_before_init');

?>