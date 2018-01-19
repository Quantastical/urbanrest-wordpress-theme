<?php

function urb_admin_init_3rd_parties( ) {
	$page = 'admin_page_3rd_parties';
	$option_group = 'urb_' . $page;

	$third_party_settings = array(
		'apple_app_id',
		'apple_app_name',
		'apple_itunes_affiliate_id',
		'facebook_app_id',
		'facebook_app_secret',
		'facebook_page_id',
		'facebook_username',
		'google_analytics_tracking_id',
		'google_browser_api_key',
		'google_developers_api_key',
		'google_plus_id',
		'instagram_username',
		'mailchimp_api_key',
		'mailchimp_mailing_list_id',
		'pinterest_username',
		'twitter_username',
		'untappd_api_client_id',
		'untappd_api_client_secret',
		'untappd_for_business_api_username',
		'untappd_for_business_api_readonly_key',
		'untappd_for_business_api_readwrite_key',
		'untappd_for_business_api_beer_section_id',
		'untappd_for_business_api_kombucha_section_id',
		'youtube_channel_id'
	);

	foreach( $third_party_settings as $option_name ) {
		register_setting(
			$option_group,
			$option_name
			// $sanitize_callback
		);
	}
}

function urb_admin_menu_3rd_parties() {
	$page_title = '3rd Parties';
	$menu_title = '3rd Parties';
	$capability = 'manage_options';
	$menu_slug = 'admin_page_3rd_parties';
	$page_callback = 'urb_' . $menu_slug;

	add_options_page( $page_title, $menu_title, $capability, $menu_slug, $page_callback );
}

function urb_admin_page_3rd_parties() {
	$page = 'urb_admin_page_3rd_parties';

	$sections = array(
		'admin_section_apple'     => '<span class="fa fa-apple text-apple"></span> Apple',
		'admin_section_facebook'  => '<span class="fa fa-facebook-official text-facebook"></span> Facebook',
		'admin_section_google'    => '<span class="fa fa-google-plus-square text-google"></span> Google',
		'admin_section_instagram' => '<span class="fa fa-instagram text-instagram"></span> Instagram',
		'admin_section_mailchimp' => 'MailChimp',
		'admin_section_pinterest' => '<span class="fa fa-pinterest text-pinterest"></span> Pinterest',
		'admin_section_twitter'   => '<span class="fa fa-twitter text-twitter"></span> Twitter',
		'admin_section_untappd'   => 'Untappd',
		'admin_section_youtube'   => '<span class="fa fa-youtube text-youtube"></span> YouTube'
	);

	foreach( $sections as $section_id => $title ) {
		$section_callback = 'urb_' . $section_id;
		add_settings_section( $section_id, $title, $section_callback, $page );	
	}

	echo '<div class="wrap">' . "\n";
	echo "\t" . '<h2>3rd Parties</h2>' . "\n";
	echo "\t" . '<p>Configuration settings for various 3rd party services</p>' . "\n";
	echo "\t" . '<form method="POST" action="options.php" novalidate="novalidate">' . "\n";
	settings_fields( 'urb_admin_page_3rd_parties' );
	do_settings_sections( 'urb_admin_page_3rd_parties' );
	submit_button();
	echo "\t" . '</form>' . "\n";
	echo '</div>';
}

# Apple

function urb_admin_section_apple() {
	$page = 'urb_admin_page_3rd_parties';
	$section = 'admin_section_apple';

	$fields = array(
		'apple_app_id'              => 'Apple App ID',
		'apple_app_name'            => 'Apple App Name',
		'apple_itunes_affiliate_id' => 'Apple iTunes Affiliate ID'
	);

	foreach( $fields as $setting_id => $setting_title ) {
		$setting_callback = 'urb_' . $setting_id;
		$args = array();
		add_settings_field( $setting_id, $setting_title, $setting_callback, $page, $section, $args );
	}
}

function urb_apple_app_id() {
	$option = 'apple_app_id';
	echo '<input type="text" name="' . $option . '" id="' . $option . '" value="' . get_option( $option ) . '" class="regular-text ltr" />';
}

function urb_apple_app_name() {
	$option = 'apple_app_name';
	echo '<input type="text" name="' . $option . '" id="' . $option . '" value="' . get_option( $option ) . '" aria-describedby="' . $option . '_description" class="regular-text ltr" maxlength="15" />';
	echo '<p class="description" id="' . $option . '_description">Add to Homescreen icon name, less than 15 characters</p>';
}

function urb_apple_itunes_affiliate_id() {
	$option = 'apple_itunes_affiliate_id';
	echo '<input type="text" name="' . $option . '" id="' . $option . '" value="' . get_option( $option ) . '" class="regular-text ltr" />';
}

# Facebook

function urb_admin_section_facebook() {
	$page = 'urb_admin_page_3rd_parties';
	$section = 'admin_section_facebook';

	$fields = array(
		'facebook_app_id'     => 'Facebook App ID',
		'facebook_app_secret' => 'Facebook App Secret',
		'facebook_page_id'    => 'Facebook Page ID',
		'facebook_username'   => 'Facebook Username'
	);

	foreach( $fields as $setting_id => $setting_title ) {
		$setting_callback = 'urb_' . $setting_id;
		$args = array();
		add_settings_field( $setting_id, $setting_title, $setting_callback, $page, $section, $args );
	}
}

function urb_facebook_app_id() {
	$option = 'facebook_app_id';
	echo '<input type="text" name="' . $option . '" id="' . $option . '" value="' . get_option( $option ) . '" class="regular-text ltr" />';
}

function urb_facebook_app_secret() {
	$option = 'facebook_app_secret';
	echo '<input type="text" name="' . $option . '" id="' . $option . '" value="' . get_option( $option ) . '" class="regular-text ltr" />';
}

function urb_facebook_page_id() {
	$option = 'facebook_page_id';
	echo '<input type="text" name="' . $option . '" id="' . $option . '" value="' . get_option( $option ) . '" class="regular-text ltr" />';
}

function urb_facebook_username() {
	$option = 'facebook_username';
	echo '<input type="text" name="' . $option . '" id="' . $option . '" value="' . get_option( $option ) . '" class="regular-text ltr" />';
}

# Google

function urb_admin_section_google() {
	$page = 'urb_admin_page_3rd_parties';
	$section = 'admin_section_google';

	$fields = array(
		'google_analytics_tracking_id' => 'Google Analytics Tracking ID',
		'google_browser_api_key'       => 'Google Browser API Key',
		'google_developers_api_key'    => 'Google Developers API Key',
		'google_plus_id'               => 'Google+ Page ID'
	);

	foreach( $fields as $setting_id => $setting_title ) {
		$setting_callback = 'urb_' . $setting_id;
		$args = array();
		add_settings_field( $setting_id, $setting_title, $setting_callback, $page, $section, $args );
	}
}

function urb_google_analytics_tracking_id() {
	$option = 'google_analytics_tracking_id';
	echo '<input type="text" name="' . $option . '" id="' . $option . '" value="' . get_option( $option ) . '" class="regular-text ltr" />';
	echo '<p class="description" id="' . $option . '_description">In <a href="http://analytics.google.com" target="_blank">Google Analytics</a>, under <em>Admin</em>, <em>Property Settings</em>, <em>Basic Settings</em></p>';
}

function urb_google_browser_api_key() {
	$option = 'google_browser_api_key';
	echo '<input type="text" name="' . $option . '" id="' . $option . '" value="' . get_option( $option ) . '" class="regular-text ltr" />';
	echo '<p class="description" id="' . $option . '_description">In <a href="http://console.developers.google.com" target="_blank">Google Developers Console</a>, under <em>Credentials</em>, <em>API Keys</em></p>';
}

function urb_google_developers_api_key() {
	$option = 'google_developers_api_key';
	echo '<input type="text" name="' . $option . '" id="' . $option . '" value="' . get_option( $option ) . '" class="regular-text ltr" />';
}

function urb_google_plus_id() {
	$option = 'google_plus_id';
	echo '<input type="text" name="' . $option . '" id="' . $option . '" value="' . get_option( $option ) . '" class="regular-text ltr" />';
}

# Instagram

function urb_admin_section_instagram() {
	$page = 'urb_admin_page_3rd_parties';
	$section = 'admin_section_instagram';

	$fields = array(
		'instagram_username' => 'Instagram Username'
	);

	foreach( $fields as $setting_id => $setting_title ) {
		$setting_callback = 'urb_' . $setting_id;
		$args = array();
		add_settings_field( $setting_id, $setting_title, $setting_callback, $page, $section, $args );
	}
}

function urb_instagram_username() {
	$option = 'instagram_username';
	echo '<input type="text" name="' . $option . '" id="' . $option . '" value="' . get_option( $option ) . '" class="regular-text ltr" />';
}

# MailChimp

function urb_admin_section_mailchimp() {
	$page = 'urb_admin_page_3rd_parties';
	$section = 'admin_section_mailchimp';

	$fields = array(
		'mailchimp_api_key'         => 'MailChimp API Key',
		'mailchimp_mailing_list_id' => 'MailChimp Mailing List ID'
	);

	foreach( $fields as $setting_id => $setting_title ) {
		$setting_callback = 'urb_' . $setting_id;
		$args = array();
		add_settings_field( $setting_id, $setting_title, $setting_callback, $page, $section, $args );
	}
}

function urb_mailchimp_api_key() {
	$option = 'mailchimp_api_key';
	echo '<input type="text" name="' . $option . '" id="' . $option . '" value="' . get_option( $option ) . '" class="regular-text ltr" />';
	echo '<p class="description" id="' . $option . '_description">In MailChimp, under your user Account, choose <em>Extras</em>, <em>API Keys</em></p>';
}

function urb_mailchimp_mailing_list_id() {
	$option = 'mailchimp_mailing_list_id';
	echo '<input type="text" name="' . $option . '" id="' . $option . '" value="' . get_option( $option ) . '" class="regular-text ltr" />';
	echo '<p class="description" id="' . $option . '_description">In MailChimp, select the List and choose <em>Settings</em>, <em>List Name and Defaults</em></p>';
}

# Pinterest

function urb_admin_section_pinterest() {
	$page = 'urb_admin_page_3rd_parties';
	$section = 'admin_section_pinterest';

	$fields = array(
		'pinterest_username' => 'Pinterest Username'
	);

	foreach( $fields as $setting_id => $setting_title ) {
		$setting_callback = 'urb_' . $setting_id;
		$args = array();
		add_settings_field( $setting_id, $setting_title, $setting_callback, $page, $section, $args );
	}
}

function urb_pinterest_username() {
	$option = 'pinterest_username';
	echo '<input type="text" name="' . $option . '" id="' . $option . '" value="' . get_option( $option ) . '" class="regular-text ltr" />';
}

# Twitter

function urb_admin_section_twitter() {
	$page = 'urb_admin_page_3rd_parties';
	$section = 'admin_section_twitter';

	$fields = array(
		'twitter_username' => 'Twitter Username'
	);

	foreach( $fields as $setting_id => $setting_title ) {
		$setting_callback = 'urb_' . $setting_id;
		$args = array();
		add_settings_field( $setting_id, $setting_title, $setting_callback, $page, $section, $args );
	}
}

function urb_twitter_username() {
	$option = 'twitter_username';
	echo '<input type="text" name="' . $option . '" id="' . $option . '" value="' . get_option( $option ) . '" class="regular-text ltr" />';
}

# Untappd

function urb_admin_section_untappd() {
	$page = 'urb_admin_page_3rd_parties';
	$section = 'admin_section_untappd';

	$fields = array(
		'untappd_api_client_id'     => 'Untappd Client ID',
		'untappd_api_client_secret' => 'Untappd Client Secret',
		'untappd_for_business_api_username' => 'Untappd for Business Username',
		'untappd_for_business_api_readonly_key' => 'Untappd for Business Read-Only Key',
		'untappd_for_business_api_readwrite_key' => 'Untappd for Business Read/Write Key',
		'untappd_for_business_api_beer_section_id' => 'Untappd for Business Beer Section ID',
		'untappd_for_business_api_kombucha_section_id' => 'Untappd for Business Kombucha Section ID'
	);

	foreach( $fields as $setting_id => $setting_title ) {
		$setting_callback = 'urb_untappd_generic';
		$args = array('option' => $setting_id);
		add_settings_field( $setting_id, $setting_title, $setting_callback, $page, $section, $args );
	}
}

function urb_untappd_generic($options) {
	$option = $options['option'];
	echo '<input type="text" name="' . $option . '" id="' . $option . '" value="' . get_option( $option ) . '" class="regular-text ltr" />';
}

# YouTube

function urb_admin_section_youtube() {
	$page = 'urb_admin_page_3rd_parties';
	$section = 'admin_section_youtube';

	$fields = array(
		'youtube_channel_id' => 'YouTube Channel ID'
	);

	foreach( $fields as $setting_id => $setting_title ) {
		$setting_callback = 'urb_' . $setting_id;
		$args = array();
		add_settings_field( $setting_id, $setting_title, $setting_callback, $page, $section, $args );
	}
}

function urb_youtube_channel_id() {
	$option = 'youtube_channel_id';
	echo '<input type="text" name="' . $option . '" id="' . $option . '" value="' . get_option( $option ) . '" class="regular-text ltr" />';
}

add_action('admin_init', 'urb_admin_init_3rd_parties');
add_action('admin_menu', 'urb_admin_menu_3rd_parties');

?>