<?php
/*
if( !function_exists( 'urbanrest_append_beer_status_edit_post' ) ) :
	function urbanrest_append_beer_status_edit_post( ) {
		$post             = get_post();
		$post_type        = get_post_type( $post );
		$post_type_object = get_post_type_object( $post_type );

		if( $post_type !== 'beer' ) {
			return;
		}

		//global $post;

		$on_deck_selected = false;
		$on_tap_selected = false;
		$post_status_display = '';
		$post_publish_action = '';
		$post_publish_button = '';

		switch($post->post_status) {
			case 'on_deck' :
				$on_deck_selected = true;
				$post_status_display = "\t\t" . '$("#post-status-display").text("On Deck");' . "\n";
			break;

			case 'on_tap' :
				$on_tap_selected = true;
				$post_status_display = "\t\t" . '$("#post-status-display").text("On Tap");' . "\n";
			break;
		}

		if($on_deck_selected || $on_tap_selected) {
			$post_publish_action = "\t\t" . '$("#original_publish").attr("value", "Update");' . "\n";
			$post_publish_button = "\t\t" . '$("#publish").attr({"name": "save", "value": "Update"});' . "\n";
		}

		echo '<script>' . "\n"
		   . "\t" . 'jQuery(function($) {' . "\n"
		   . "\t\t" . 'var $on_deck_option = $("<option>On Deck</option>");' . "\n"
		   . "\t\t" . '$on_deck_option.attr({' . "\n"
		   . "\t\t\t" . '"selected" : ' . ($on_deck_selected ? 'true' : 'false') . ',' . "\n"
		   . "\t\t\t" . '"value" : "on_deck",' . "\n"
		   . "\t\t" . '});' . "\n"
		   . "\t\t" . '$("select#post_status").append($on_deck_option);' . "\n"

		   . "\t\t" . 'var $on_tap_option = $("<option>On Tap</option>");' . "\n"
		   . "\t\t" . '$on_tap_option.attr({' . "\n"
		   . "\t\t\t" . '"selected" : ' . ($on_tap_selected ? 'true' : 'false') . ',' . "\n"
		   . "\t\t\t" . '"value" : "on_tap",' . "\n"
		   . "\t\t" . '});' . "\n"
		   . "\t\t" . '$("select#post_status").append($on_tap_option);' . "\n"

		   . $post_publish_action
		   . $post_publish_button
		   . $post_status_display
		   . "\t" . '});' . "\n"
		   . '</script>';
	}
endif;
add_action('admin_footer-post.php', 'urbanrest_append_beer_status_edit_post');
*/
/*
if( !function_exists( 'urbanrest_append_beer_status_quick_edit' ) ) :
	function urbanrest_append_beer_status_quick_edit( ) {
		echo '<script>' . "\n"
		   . "\t" . 'jQuery(function($) {' . "\n"
		   . "\t\t" . 'var $on_deck_option = $("<option value=\"on_deck\">On Deck</option>");' . "\n"
		   . "\t\t" . 'var $on_tap_option = $("<option value=\"on_tap\">On Tap</option>");' . "\n"
		   . "\t\t" . '$("select[name=\"_status\"]").append($on_deck_option, $on_tap_option);' . "\n"
		   . "\t" . '});' . "\n"
		   . '</script>';
	}
endif;
add_action('admin_footer-edit.php', 'urbanrest_append_beer_status_quick_edit');
*/
/*
if( !function_exists( 'urbanrest_append_beer_status_new_post' ) ) :
	function urbanrest_append_beer_status_new_post( ) {
		$post             = get_post();
		$post_type        = get_post_type( $post );
		$post_type_object = get_post_type_object( $post_type );

		if( $post_type !== 'beer' ) {
			return;
		}
		
		//global $post;

		$on_deck_selected = false;
		$on_tap_selected = false;
		$post_status_display = '';

		switch($post->post_status) {
			case 'on_deck' :
				$on_deck_selected = true;
				$post_status_display = "\t\t" . '$("#post-status-display").text("On Deck");' . "\n";
			break;

			case 'on_tap' :
				$on_tap_selected = true;
				$post_status_display = "\t\t" . '$("#post-status-display").text("On Tap");' . "\n";
			break;
		}

		echo '<script>' . "\n"
		   . "\t" . 'jQuery(function($) {' . "\n"
		   . "\t\t" . 'var $on_deck_option = $("<option>On Deck</option>");' . "\n"
		   . "\t\t" . '$on_deck_option.attr({' . "\n"
		   . "\t\t\t" . '"selected" : ' . ($on_deck_selected ? 'true' : 'false') . ',' . "\n"
		   . "\t\t\t" . '"value" : "on_deck",' . "\n"
		   . "\t\t" . '});' . "\n"
		   . "\t\t" . '$("select#post_status").append($on_deck_option);' . "\n"

		   . "\t\t" . 'var $on_tap_option = $("<option>On Tap</option>");' . "\n"
		   . "\t\t" . '$on_tap_option.attr({' . "\n"
		   . "\t\t\t" . '"selected" : ' . ($on_tap_selected ? 'true' : 'false') . ',' . "\n"
		   . "\t\t\t" . '"value" : "on_tap",' . "\n"
		   . "\t\t" . '});' . "\n"
		   . "\t\t" . '$("select#post_status").append($on_tap_option);' . "\n"

		   . $post_status_display
		   . "\t" . '});' . "\n"
		   . '</script>';
	}
endif;
add_action('admin_footer-post-new.php', 'urbanrest_append_beer_status_new_post');
*/
?>