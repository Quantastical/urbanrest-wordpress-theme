<?php
//if( !function_exists( 'urbanrest_admin_init_social_media' ) ) :
/*
	function urbanrest_admin_init_social_media( ) {
		// Social Media
		register_setting(
			'urbanrest_admin_page_social_media', // $option_group
			'urbanrest_setting_apple_app_id' // $option_name
			// $sanitize_callback
		);
		register_setting(
			'urbanrest_admin_page_social_media', // $option_group
			'urbanrest_setting_apple_app_name' // $option_name
			// $sanitize_callback
		);
		register_setting(
			'urbanrest_admin_page_social_media', // $option_group
			'urbanrest_setting_apple_itunes_affiliate_id' // $option_name
			// $sanitize_callback
		);
		register_setting(
			'urbanrest_admin_page_social_media', // $option_group
			'urbanrest_setting_facebook_app_id' // $option_name
			// $sanitize_callback
		);
		register_setting(
			'urbanrest_admin_page_social_media', // $option_group
			'urbanrest_setting_facebook_username' // $option_name
			// $sanitize_callback
		);
		register_setting(
			'urbanrest_admin_page_social_media', // $option_group
			'urbanrest_setting_google_developers_api_key' // $option_name
			// $sanitize_callback
		);
		register_setting(
			'urbanrest_admin_page_social_media', // $option_group
			'urbanrest_setting_google_plus_id' // $option_name
			// $sanitize_callback
		);
		register_setting(
			'urbanrest_admin_page_social_media', // $option_group
			'urbanrest_setting_instagram_username' // $option_name
			// $sanitize_callback
		);
		register_setting(
			'urbanrest_admin_page_social_media', // $option_group
			'urbanrest_setting_mailchimp_api_key' // $option_name
			// $sanitize_callback
		);
		register_setting(
			'urbanrest_admin_page_social_media', // $option_group
			'urbanrest_setting_pinterest_username' // $option_name
			// $sanitize_callback
		);
		register_setting(
			'urbanrest_admin_page_social_media', // $option_group
			'urbanrest_setting_twitter_username' // $option_name
			// $sanitize_callback
		);
		register_setting(
			'urbanrest_admin_page_social_media', // $option_group
			'urbanrest_setting_youtube_channel_id' // $option_name
			// $sanitize_callback
		);
	}

	function urbanrest_admin_page_social_media() {
		// Admin -> Settings -> Social Media
		// Apple
		add_settings_section(
			'urbanrest_admin_section_apple', // $section_id
			'<span class="fa fa-apple text-apple"></span> Apple', // $title
			'urbanrest_admin_section_apple', // $section_callback
			'urbanrest_admin_page_social_media' // $page
		);

		// Facebook
		add_settings_section(
			'urbanrest_admin_section_facebook', // $section_id
			'<span class="fa fa-facebook-official text-facebook"></span> Facebook', // $title
			'urbanrest_admin_section_facebook', // $section_callback
			'urbanrest_admin_page_social_media' // $page
		);

		// Google
		add_settings_section(
			'urbanrest_admin_section_google', // $section_id
			'<span class="fa fa-google-plus-square text-google"></span> Google', // $title
			'urbanrest_admin_section_google', // $section_callback
			'urbanrest_admin_page_social_media' // $page
		);

		// Instagram
		add_settings_section(
			'urbanrest_admin_section_instagram', // $section_id
			'<span class="fa fa-instagram text-instagram"></span> Instagram', // $title
			'urbanrest_admin_section_instagram', // $section_callback
			'urbanrest_admin_page_social_media' // $page
		);

		// MailChimp
		add_settings_section(
			'urbanrest_admin_section_mailchimp', // $section_id
			'MailChimp', // $title
			'urbanrest_admin_section_mailchimp', // $section_callback
			'urbanrest_admin_page_social_media' // $page
		);

		// Pinterest
		add_settings_section(
			'urbanrest_admin_section_pinterest', // $section_id
			'<span class="fa fa-pinterest text-pinterest"></span> Pinterest', // $title
			'urbanrest_admin_section_pinterest', // $section_callback
			'urbanrest_admin_page_social_media' // $page
		);

		// Twitter
		add_settings_section(
			'urbanrest_admin_section_twitter', // $section_id
			'<span class="fa fa-twitter text-twitter"></span> Twitter', // $title
			'urbanrest_admin_section_twitter', // $section_callback
			'urbanrest_admin_page_social_media' // $page
		);

		// YouTube
		add_settings_section(
			'urbanrest_admin_section_youtube', // $section_id
			'<span class="fa fa-youtube text-youtube"></span> YouTube', // $title
			'urbanrest_admin_section_youtube', // $section_callback
			'urbanrest_admin_page_social_media' // $page
		);

		// Form Markup
		include('social-media-form.php');
	}
*/
/*
	function urbanrest_admin_section_apple() {
		// Social Media -> Apple
		// Apple App ID
		add_settings_field(
			'urbanrest_setting_apple_app_id', // $setting_id
			'Apple App ID', // $setting_title
			'urbanrest_setting_apple_app_id', // $setting_callback
			'urbanrest_admin_page_social_media', // $page
			'urbanrest_admin_section_apple', // $section = 'default'
			array() // $args = array()
		);

		// Apple App Name
		add_settings_field(
			'urbanrest_setting_apple_app_name', // $setting_id
			'Apple App Name', // $setting_title
			'urbanrest_setting_apple_app_name', // $setting_callback
			'urbanrest_admin_page_social_media', // $page
			'urbanrest_admin_section_apple', // $section = 'default'
			array() // $args = array()
		);

		// Apple iTunes Affiliate ID
		add_settings_field(
			'urbanrest_setting_apple_itunes_affiliate_id', // $setting_id
			'Apple iTunes Affiliate ID', // $setting_title
			'urbanrest_setting_apple_itunes_affiliate_id', // $setting_callback
			'urbanrest_admin_page_social_media', // $page
			'urbanrest_admin_section_apple', // $section = 'default'
			array() // $args = array()
		);
	}
	*/
/*
	function urbanrest_admin_section_facebook() {
		// Social Media -> Facebook
		// Facebook App ID
		add_settings_field(
			'urbanrest_setting_facebook_app_id', // $setting_id
			'Facebook App ID', // $setting_title
			'urbanrest_setting_facebook_app_id', // $setting_callback
			'urbanrest_admin_page_social_media', // $page
			'urbanrest_admin_section_facebook', // $section = 'default'
			array() // $args = array()
		);

		// Facebook Username
		add_settings_field(
			'urbanrest_setting_facebook_username', // $setting_id
			'Facebook Username', // $setting_title
			'urbanrest_setting_facebook_username', // $setting_callback
			'urbanrest_admin_page_social_media', // $page
			'urbanrest_admin_section_facebook', // $section = 'default'
			array() // $args = array()
		);
	}
*/
	/*
	function urbanrest_admin_section_google() {
		// Social Media -> Google
		// Google Developers API Key
		add_settings_field(
			'urbanrest_setting_google_developers_api_key', // $setting_id
			'Google Developers API Key', // $setting_title
			'urbanrest_setting_google_developers_api_key', // $setting_callback
			'urbanrest_admin_page_social_media', // $page
			'urbanrest_admin_section_google', // $section = 'default'
			array() // $args = array()
		);

		// Google+ ID
		add_settings_field(
			'urbanrest_setting_google_plus_id', // $setting_id
			'Google+ Page ID', // $setting_title
			'urbanrest_setting_google_plus_id', // $setting_callback
			'urbanrest_admin_page_social_media', // $page
			'urbanrest_admin_section_google', // $section = 'default'
			array() // $args = array()
		);
	}
	*/
/*
	function urbanrest_admin_section_instagram() {
		// Social Media -> Instagram
		// Instagram Username
		add_settings_field(
			'urbanrest_setting_instagram_username', // $setting_id
			'Instagram Username', // $setting_title
			'urbanrest_setting_instagram_username', // $setting_callback
			'urbanrest_admin_page_social_media', // $page
			'urbanrest_admin_section_instagram', // $section = 'default'
			array() // $args = array()
		);
	}
*/
	/*
	function urbanrest_admin_section_mailchimp() {
		// Social Media -> MailChimp
		// MailChimp API Key
		add_settings_field(
			'urbanrest_setting_mailchimp_api_key', // $setting_id
			'MailChimp API Key', // $setting_title
			'urbanrest_setting_mailchimp_api_key', // $setting_callback
			'urbanrest_admin_page_social_media', // $page
			'urbanrest_admin_section_mailchimp', // $section = 'default'
			array() // $args = array()
		);
	}
	*/
/*
	function urbanrest_admin_section_pinterest() {
		// Social Media -> Pinterest
		// Pinterest Username
		add_settings_field(
			'urbanrest_setting_pinterest_username', // $setting_id
			'Pinterest Username', // $setting_title
			'urbanrest_setting_pinterest_username', // $setting_callback
			'urbanrest_admin_page_social_media', // $page
			'urbanrest_admin_section_pinterest', // $section = 'default'
			array() // $args = array()
		);
	}*/
/*
	function urbanrest_admin_section_twitter() {
		// Social Media -> Twitter
		// Twitter Username
		add_settings_field(
			'urbanrest_setting_twitter_username', // $setting_id
			'Twitter Username', // $setting_title
			'urbanrest_setting_twitter_username', // $setting_callback
			'urbanrest_admin_page_social_media', // $page
			'urbanrest_admin_section_twitter', // $section = 'default'
			array() // $args = array()
		);
	}
*/
	/*
	function urbanrest_admin_section_youtube() {
		// Social Media -> YouTube
		// YouTube Channel ID
		add_settings_field(
			'urbanrest_setting_youtube_channel_id', // $setting_id
			'YouTube Channel ID', // $setting_title
			'urbanrest_setting_youtube_channel_id', // $setting_callback
			'urbanrest_admin_page_social_media', // $page
			'urbanrest_admin_section_youtube', // $section = 'default'
			array() // $args = array()
		);
	}
	*/
//endif;
//add_action('admin_init', 'urbanrest_admin_init_social_media');
?>