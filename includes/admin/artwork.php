<?php
if( !function_exists( 'urbanrest_admin_init_artwork' ) ) :
	function urbanrest_admin_init_artwork( ) {
		// Artwork
		register_setting(
			'urbanrest_admin_page_artwork', // $option_group
			'urbanrest_setting_logo' // $option_name
			// $sanitize_callback
		);
		register_setting(
			'urbanrest_admin_page_artwork', // $option_group
			'urbanrest_setting_apple_touch_icon' // $option_name
			// $sanitize_callback
		);
		register_setting(
			'urbanrest_admin_page_artwork', // $option_group
			'urbanrest_setting_apple_touch_startup_image' // $option_name
			// $sanitize_callback
		);
		register_setting(
			'urbanrest_admin_page_artwork', // $option_group
			'urbanrest_setting_favicon' // $option_name
			// $sanitize_callback
		);
		register_setting(
			'urbanrest_admin_page_artwork', // $option_group
			'urbanrest_setting_facebook_opengraph_image' // $option_name
			// $sanitize_callback
		);
		register_setting(
			'urbanrest_admin_page_artwork', // $option_group
			'urbanrest_setting_facebook_opengraph_image_mime' // $option_name
			// $sanitize_callback
		);
		register_setting(
			'urbanrest_admin_page_artwork', // $option_group
			'urbanrest_setting_facebook_opengraph_image_width' // $option_name
			// $sanitize_callback
		);
		register_setting(
			'urbanrest_admin_page_artwork', // $option_group
			'urbanrest_setting_facebook_opengraph_image_height' // $option_name
			// $sanitize_callback
		);
		register_setting(
			'urbanrest_admin_page_artwork', // $option_group
			'urbanrest_setting_twitter_card_image' // $option_name
			// $sanitize_callback
		);
	}
endif;

if( !function_exists( 'urbanrest_admin_page_artwork' ) ) :
	function urbanrest_admin_page_artwork() {
		// Admin -> Settings -> Artwork
		// Logos
		add_settings_section(
			'urbanrest_admin_section_logos', // $section_id
			'Logos', // $title
			'urbanrest_admin_section_logos', // $section_callback
			'urbanrest_admin_page_artwork' // $page
		);

		// Icons
		add_settings_section(
			'urbanrest_admin_section_icons', // $section_id
			'Icons', // $title
			'urbanrest_admin_section_icons', // $section_callback
			'urbanrest_admin_page_artwork' // $page
		);

		// Form Markup
		include('artwork-form.php');
	}
endif;

if( !function_exists( 'urbanrest_admin_section_icons' ) ) :
	function urbanrest_admin_section_icons() {
		// Artwork -> Icons
		// Apple Touch Icon
		add_settings_field(
			'urbanrest_setting_apple_touch_icon', // $setting_id
			'Apple Touch Icon', // $setting_title
			'urbanrest_setting_apple_touch_icon', // $setting_callback
			'urbanrest_admin_page_artwork', // $page
			'urbanrest_admin_section_icons', // $section = 'default'
			array() // $args = array()
		);

		// Apple Touch Startup Image
		add_settings_field(
			'urbanrest_setting_apple_touch_startup_image', // $setting_id
			'Apple Touch Startup Image', // $setting_title
			'urbanrest_setting_apple_touch_startup_image', // $setting_callback
			'urbanrest_admin_page_artwork', // $page
			'urbanrest_admin_section_icons', // $section = 'default'
			array() // $args = array()
		);

		// Favicon
		add_settings_field(
			'urbanrest_setting_favicon', // $setting_id
			'Favicon', // $setting_title
			'urbanrest_setting_favicon', // $setting_callback
			'urbanrest_admin_page_artwork', // $page
			'urbanrest_admin_section_icons', // $section = 'default'
			array() // $args = array()
		);

		// Facebook OpenGraph Image
		add_settings_field(
			'urbanrest_setting_facebook_opengraph_image', // $setting_id
			'Facebook OpenGraph Image', // $setting_title
			'urbanrest_setting_facebook_opengraph_image', // $setting_callback
			'urbanrest_admin_page_artwork', // $page
			'urbanrest_admin_section_icons', // $section = 'default'
			array() // $args = array()
		);

		// Twitter Card Image
		add_settings_field(
			'urbanrest_setting_twitter_card_image', // $setting_id
			'Twitter Card Image', // $setting_title
			'urbanrest_setting_twitter_card_image', // $setting_callback
			'urbanrest_admin_page_artwork', // $page
			'urbanrest_admin_section_icons', // $section = 'default'
			array() // $args = array()
		);
	}
endif;

if( !function_exists( 'urbanrest_admin_section_logos' ) ) :
	function urbanrest_admin_section_logos() {
		// Artwork -> Logos
		// 1-Color Black on Transparent Logo
		add_settings_field(
			'urbanrest_setting_logo', // $setting_id
			'Logo',
			'urbanrest_setting_logo',
			'urbanrest_admin_page_artwork',
			'urbanrest_admin_section_logos',
			array()
		);
	}
endif;

add_action('admin_init', 'urbanrest_admin_init_artwork');
?>