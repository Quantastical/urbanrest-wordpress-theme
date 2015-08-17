<?php
if ( !function_exists('urbanrest_setup') ) :
	function urbanrest_setup() {
		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		// Add featured images to posts
		add_theme_support('post-thumbnails', array('post'));

		// Let WordPress manage the document title.
		//add_theme_support( 'title-tag' );

		// This theme uses wp_nav_menu() in two locations.
		register_nav_menus( array(
			'main'   => 'Main Menu',
//			'social' => 'Social Media Menu',
			'footer' => 'Footer Menu'
		) );

		// Use default core markup for search form, comment form, and comments
		add_theme_support( 'html5', array(
			'search-form', 'comment-form', 'comment-list', 'gallery', 'caption'
		) );

		// Add styles
		//wp_enqueue_style( 'fontawesome', '//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css' );
		wp_enqueue_style( 'main', get_stylesheet_uri(), false, '1.1' );

		// Add scripts
		wp_enqueue_script('jquery', '//code.jquery.com/jquery-1.11.3.min.js');
		wp_enqueue_script('main', get_stylesheet_directory_uri() . '/scripts/main.js', false, '1.1', true);
		wp_enqueue_script('modal', get_stylesheet_directory_uri() . '/scripts/modal.js', false, '1.1', true);
		wp_enqueue_script('ga', get_stylesheet_directory_uri() . '/scripts/analytics.js', false, '1.1', true);
	}
endif;
add_action('after_setup_theme', 'urbanrest_setup');

if( !function_exists('urbanrest_send_headers') ) :
	function urbanrest_send_headers( )
	{
		global $route, $wp_query, $window_title;
		$bits = explode( "/", $_SERVER['REQUEST_URI'] );

		if( preg_match('/sitemap(-pages|-posts)?.xml/', $bits[1], $matches ) )
		{
			if($matches[1]) {
				$sitemap_type = 'urlset';
				$post_type = trim( $matches[1], '-s' );
			} else {
				$sitemap_type = 'index';
			}

			include('sitemap.php');
			die();
		}
		else if( $bits[1] === 'humans.txt' )
		{
			include('humans.php');
			die();
		}
		else if( $bits[1] === 'robots.txt' )
		{
			include('robots.php');
			die();
		}
	}
endif;
add_action( 'send_headers', 'urbanrest_send_headers');

if( !function_exists('urbanrest_admin_enqueue_scripts') ) :
	function urbanrest_admin_enqueue_scripts( $hook )
	{
		// Add media uploader to specific admin pages and load admin styles
		$screen = get_current_screen();

		wp_enqueue_style( 'admin', get_stylesheet_directory_uri() . '/admin.css' );

		if ( 'settings_page_urbanrest_admin_page_artwork' == $screen->base ) {
			wp_enqueue_style('media-editor');
			wp_enqueue_media();
		} else {
			return;
		}
	}
endif;
add_action( 'admin_enqueue_scripts', 'urbanrest_admin_enqueue_scripts' );

if( !function_exists('urbanrest_tiny_mce_before_init') ) :
	function urbanrest_tiny_mce_before_init( $init ) {
		$init['block_formats'] = "Paragraph=p; Heading 1=h2; Heading 2=h3; Heading 3=h4; Heading 4=h5; Heading 5=h6";
		return $init;
	}
endif;
add_filter('tiny_mce_before_init', 'urbanrest_tiny_mce_before_init');

if( !function_exists('urbanrest_login_headerurl') ) :
	function urbanrest_login_headerurl() {
		return get_site_url();
	}
endif;
add_filter('login_headerurl','urbanrest_login_headerurl');

if( !function_exists('urbanrest_login_headertitle') ) :
	function urbanrest_login_headertitle() {
		return get_bloginfo('name');
	}
endif;
add_filter('login_headertitle', 'urbanrest_login_headertitle');

if( !function_exists('urbanrest_wp_before_admin_bar_render') ) :
	function urbanrest_wp_before_admin_bar_render() {
		global $wp_admin_bar;
		$wp_admin_bar->remove_menu('wp-logo');
	}
endif;
add_action('wp_before_admin_bar_render', 'urbanrest_wp_before_admin_bar_render', 0);

if ( !function_exists('urbanrest_admin_footer_text') ) :
	function urbanrest_admin_footer_text() {
		return '';
	}
endif;
add_filter('admin_footer_text', 'urbanrest_admin_footer_text');

if( !function_exists('urbanrest_update_footer') ) :
	function urbanrest_update_footer() {
		return '';
	}
endif;
add_filter('update_footer', 'urbanrest_update_footer', 11 );

if( !function_exists('urbanrest_contextual_help') ) :
	function urbanrest_contextual_help($old_help, $screen_id, $screen) {
		$screen->remove_help_tabs();
		return $old_help;
	}
endif;
add_filter('contextual_help', 'urbanrest_contextual_help', 999, 3 );
  

if( !function_exists( 'urbanrest_widgets_init' ) ) :
	function urbanrest_widgets_init() {
		register_sidebar( array(
			'name'          => 'Widget Area',
			'id'            => 'sidebar-1',
			'description'   => 'Add widgets here to appear in your sidebar.',
			'before_widget' => '<aside id="%1$s" class="widget %2$s">',
			'after_widget'  => '</aside>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		) );
	}
endif;
add_action( 'widgets_init', 'urbanrest_widgets_init' );

if( !function_exists('urbanrest_wp_dashboard_setup') ) :
function urbanrest_wp_dashboard_setup() {
	global $wp_meta_boxes;

	// At A Glance
	remove_meta_box('dashboard_right_now', 'dashboard', 'normal');

	// Quick Draft
	//remove_meta_box('dashboard_quick_press', 'dashboard', 'side');

	// WordPress News
	remove_meta_box('dashboard_primary', 'dashboard', 'side');
} 
endif;
add_action('wp_dashboard_setup', 'urbanrest_wp_dashboard_setup' );

if( !function_exists( 'urbanrest_admin_init' ) ) :
	function urbanrest_admin_init( ) {

		// Admin Settings

		// Artwork
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

		// Company
		register_setting(
			'urbanrest_admin_page_company', // $option_group
			'urbanrest_setting_country' // $option_name
			// $sanitize_callback
		);
		register_setting(
			'urbanrest_admin_page_company', // $option_group
			'urbanrest_setting_fax_number' // $option_name
			// $sanitize_callback
		);
		register_setting(
			'urbanrest_admin_page_company', // $option_group
			'urbanrest_setting_friday_start_time' // $option_name
			// $sanitize_callback
		);
		register_setting(
			'urbanrest_admin_page_company', // $option_group
			'urbanrest_setting_friday_end_time' // $option_name
			// $sanitize_callback
		);
		register_setting(
			'urbanrest_admin_page_company', // $option_group
			'urbanrest_setting_latitude' // $option_name
			// $sanitize_callback
		);
		register_setting(
			'urbanrest_admin_page_company', // $option_group
			'urbanrest_setting_locality' // $option_name
			// $sanitize_callback
		);
		register_setting(
			'urbanrest_admin_page_company', // $option_group
			'urbanrest_setting_longitude' // $option_name
			// $sanitize_callback
		);
		register_setting(
			'urbanrest_admin_page_company', // $option_group
			'urbanrest_setting_monday_start_time' // $option_name
			// $sanitize_callback
		);
		register_setting(
			'urbanrest_admin_page_company', // $option_group
			'urbanrest_setting_monday_end_time' // $option_name
			// $sanitize_callback
		);
		register_setting(
			'urbanrest_admin_page_company', // $option_group
			'urbanrest_setting_phone_number' // $option_name
			// $sanitize_callback
		);
		register_setting(
			'urbanrest_admin_page_company', // $option_group
			'urbanrest_setting_postal_code' // $option_name
			// $sanitize_callback
		);
		register_setting(
			'urbanrest_admin_page_company', // $option_group
			'urbanrest_setting_region' // $option_name
			// $sanitize_callback
		);
		register_setting(
			'urbanrest_admin_page_company', // $option_group
			'urbanrest_setting_saturday_start_time' // $option_name
			// $sanitize_callback
		);
		register_setting(
			'urbanrest_admin_page_company', // $option_group
			'urbanrest_setting_saturday_end_time' // $option_name
			// $sanitize_callback
		);
		register_setting(
			'urbanrest_admin_page_company', // $option_group
			'urbanrest_setting_street_address' // $option_name
			// $sanitize_callback
		);
		register_setting(
			'urbanrest_admin_page_company', // $option_group
			'urbanrest_setting_sunday_start_time' // $option_name
			// $sanitize_callback
		);
		register_setting(
			'urbanrest_admin_page_company', // $option_group
			'urbanrest_setting_sunday_end_time' // $option_name
			// $sanitize_callback
		);
		register_setting(
			'urbanrest_admin_page_company', // $option_group
			'urbanrest_setting_thursday_start_time' // $option_name
			// $sanitize_callback
		);
		register_setting(
			'urbanrest_admin_page_company', // $option_group
			'urbanrest_setting_thursday_end_time' // $option_name
			// $sanitize_callback
		);
		register_setting(
			'urbanrest_admin_page_company', // $option_group
			'urbanrest_setting_tuesday_start_time' // $option_name
			// $sanitize_callback
		);
		register_setting(
			'urbanrest_admin_page_company', // $option_group
			'urbanrest_setting_tuesday_end_time' // $option_name
			// $sanitize_callback
		);
		register_setting(
			'urbanrest_admin_page_company', // $option_group
			'urbanrest_setting_wednesday_start_time' // $option_name
			// $sanitize_callback
		);
		register_setting(
			'urbanrest_admin_page_company', // $option_group
			'urbanrest_setting_wednesday_end_time' // $option_name
			// $sanitize_callback
		);

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
			'urbanrest_setting_twitter_username' // $option_name
			// $sanitize_callback
		);
	}
endif;
add_action('admin_init', 'urbanrest_admin_init');

if( !function_exists( 'urbanrest_admin_menu' ) ) :
	
	// Admin Menu

	function urbanrest_admin_menu() {
		// Admin -> Settings -> Artwork
		add_options_page(
			'Artwork & Images', // $page_title
			'Artwork', // $menu_title
			'manage_options', // $capability
			'urbanrest_admin_page_artwork', // $menu_slug
			'urbanrest_admin_page_artwork' // $page_callback
		);

		// Admin -> Settings -> Company
		add_options_page(
			'Company Information', // $page_title
			'Company', // $menu_title
			'manage_options', // $capability
			'urbanrest_admin_page_company', // $menu_slug
			'urbanrest_admin_page_company' // $page_callback
		);

		// Admin -> Settings -> Social Media
		add_options_page(
			'Social Media', // $page_title
			'Social Media', // $menu_title
			'manage_options', // $capability
			'urbanrest_admin_page_social_media', // $menu_slug
			'urbanrest_admin_page_social_media' // $page_callback
		);
	}

	// Admin Pages

	function urbanrest_admin_page_artwork() {
		// Admin -> Settings -> Artwork
		// Icons
		add_settings_section(
			'urbanrest_admin_section_icons', // $section_id
			'Icons', // $title
			'urbanrest_admin_section_icons', // $section_callback
			'urbanrest_admin_page_artwork' // $page
		);

		// Form Markup
		include('admin-artwork.php');
	}

	function urbanrest_admin_page_company() {
		// Admin -> Settings -> Company
		// Location
		add_settings_section(
			'urbanrest_admin_section_location', // $section_id
			'Location', // $title
			'urbanrest_admin_section_location', // $section_callback
			'urbanrest_admin_page_company' // $page
		);

		// Contact
		add_settings_section(
			'urbanrest_admin_section_contact', // $section_id
			'Contact', // $title
			'urbanrest_admin_section_contact', // $section_callback
			'urbanrest_admin_page_company' // $page
		);

		// Form Markup
		include('admin-company.php');
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

		// Twitter
		add_settings_section(
			'urbanrest_admin_section_twitter', // $section_id
			'<span class="fa fa-twitter text-twitter"></span> Twitter', // $title
			'urbanrest_admin_section_twitter', // $section_callback
			'urbanrest_admin_page_social_media' // $page
		);

		// Form Markup
		include('admin-social-media.php');
	}

	// Admin Page Settings

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

	function urbanrest_admin_section_contact() {
		// Social Media -> Contact
		// Phone Number
		add_settings_field(
			'urbanrest_setting_phone_number', // $setting_id
			'Phone Number', // $setting_title
			'urbanrest_setting_phone_number', // $setting_callback
			'urbanrest_admin_page_company', // $page
			'urbanrest_admin_section_contact', // $section = 'default'
			array() // $args = array()
		);

		// Fax Number
		add_settings_field(
			'urbanrest_setting_fax_number', // $setting_id
			'Fax Number', // $setting_title
			'urbanrest_setting_fax_number', // $setting_callback
			'urbanrest_admin_page_company', // $page
			'urbanrest_admin_section_contact', // $section = 'default'
			array() // $args = array()
		);

		// Hours of Operation
		add_settings_field(
			'urbanrest_setting_hours_of_operation', // $setting_id
			'Hours of Operation', // $setting_title
			'urbanrest_setting_hours_of_operation', // $setting_callback
			'urbanrest_admin_page_company', // $page
			'urbanrest_admin_section_contact', // $section = 'default'
			array() // $args = array()
		);
	}

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

	function urbanrest_admin_section_location() {
		// Company -> Location
		// Street Address
		add_settings_field(
			'urbanrest_setting_street_address', // $setting_id
			'Street Address', // $setting_title
			'urbanrest_setting_street_address', // $setting_callback
			'urbanrest_admin_page_company', // $page
			'urbanrest_admin_section_location', // $section = 'default'
			array() // $args = array()
		);

		// Locality
		add_settings_field(
			'urbanrest_setting_locality', // $setting_id
			'Locality', // $setting_title
			'urbanrest_setting_locality', // $setting_callback
			'urbanrest_admin_page_company', // $page
			'urbanrest_admin_section_location', // $section = 'default'
			array() // $args = array()
		);

		// Region
		add_settings_field(
			'urbanrest_setting_region', // $setting_id
			'Region', // $setting_title
			'urbanrest_setting_region', // $setting_callback
			'urbanrest_admin_page_company', // $page
			'urbanrest_admin_section_location', // $section = 'default'
			array() // $args = array()
		);

		// Postal Code
		add_settings_field(
			'urbanrest_setting_postal_code', // $setting_id
			'Postal Code', // $setting_title
			'urbanrest_setting_postal_code', // $setting_callback
			'urbanrest_admin_page_company', // $page
			'urbanrest_admin_section_location', // $section = 'default'
			array() // $args = array()
		);

		// Country
		add_settings_field(
			'urbanrest_setting_country', // $setting_id
			'Country', // $setting_title
			'urbanrest_setting_country', // $setting_callback
			'urbanrest_admin_page_company', // $page
			'urbanrest_admin_section_location', // $section = 'default'
			array() // $args = array()
		);

		// Coordinates
		add_settings_field(
			'urbanrest_setting_coordinates', // $setting_id
			'Coordinates', // $setting_title
			'urbanrest_setting_coordinates', // $setting_callback
			'urbanrest_admin_page_company', // $page
			'urbanrest_admin_section_location', // $section = 'default'
			array() // $args = array()
		);
	}

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

	// Setting Fields

	function urbanrest_setting_apple_app_id() {
		// Social Media -> Apple -> Apple App ID
		echo '<input type="text" name="urbanrest_setting_apple_app_id" id="urbanrest_setting_apple_app_id" value="' . get_option( 'urbanrest_setting_apple_app_id' ) . '" aria-describedby="urbanrest_setting_apple_app_id_description" class="regular-text ltr" />';
	}

	function urbanrest_setting_apple_app_name() {
		// Social Media -> Apple -> Apple App ID
		echo '<input type="text" name="urbanrest_setting_apple_app_name" id="urbanrest_setting_apple_app_name" value="' . get_option( 'urbanrest_setting_apple_app_name' ) . '" aria-describedby="urbanrest_setting_apple_app_inamedescription" class="regular-text ltr" />';
		echo '<p class="description" id="urbanrest_setting_apple_app_name_description">Homescreen icon name, less than 15 characters</p>';
	}

	function urbanrest_setting_apple_itunes_affiliate_id() {
		// Social Media -> Apple -> Apple iTunes Affiliate ID
		echo '<input type="text" name="urbanrest_setting_apple_itunes_affiliate_id" id="urbanrest_setting_apple_itunes_affiliate_id" value="' . get_option( 'urbanrest_setting_apple_itunes_affiliate_id' ) . '" aria-describedby="urbanrest_setting_apple_itunes_affiliate_id_description" class="regular-text ltr" />';
	}

	function urbanrest_setting_apple_touch_icon() {
		// Artwork -> Icons -> Apple Touch Icon
		echo '<input type="text" id="urbanrest_setting_apple_touch_icon" name="urbanrest_setting_apple_touch_icon" value="' . get_option( 'urbanrest_setting_apple_touch_icon' ) . '" />';
		echo '<span class="wp-media-buttons">';
		echo '	<a href="#urbanrest_setting_apple_touch_icon" class="button view_image">View Image</a>';
		echo '	<a href="#urbanrest_setting_apple_touch_icon" class="button add_media" data-editor="content" title="Add Media">';
		echo '		<span class="wp-media-buttons-icon"></span>';
		echo '		Add Media';
		echo '	</a>';
		echo '</span>';
		echo '<p class="description" id="urbanrest_setting_apple_touch_icon_description">1024 &times; 1024px PNG</p>';
	}

	function urbanrest_setting_apple_touch_startup_image() {
		// Artwork -> Icons -> Apple Touch Startup Image
		echo '<input type="text" id="urbanrest_setting_apple_touch_startup_image" name="urbanrest_setting_apple_touch_startup_image" value="' . get_option( 'urbanrest_setting_apple_touch_startup_image' ) . '" />';
		echo '<span class="wp-media-buttons">';
		echo '	<a target="_blank" href="#urbanrest_setting_apple_touch_startup_image" class="button view_image">View Image</a>';
		echo '	<a href="#urbanrest_setting_apple_touch_startup_image" class="button add_media" data-editor="content" title="Add Media">';
		echo '		<span class="wp-media-buttons-icon"></span>';
		echo '		Add Media';
		echo '	</a>';
		echo '</span>';
		echo '<p class="description" id="urbanrest_setting_apple_touch_startup_image_description">1242 &times; 2208px or 2208 &times; 1242px PNG</p>';
	}

	function urbanrest_setting_coordinates() {
		// Company -> Location -> Coordinates
		echo '<input type="text" name="urbanrest_setting_latitude" id="urbanrest_setting_latitude" value="' . get_option( 'urbanrest_setting_latitude' ) . '" class="regular-text ltr" />';
		echo '<input type="text" name="urbanrest_setting_longitude" id="urbanrest_setting_longitude" value="' . get_option( 'urbanrest_setting_longitude' ) . '" class="regular-text ltr" />';
		echo '<span class="wp-media-buttons">';
		echo '	<a target="_blank" href="#urbanrest_setting_latitude" class="button use_address">Use Address</a>';
		echo '</span>';
	}

	function urbanrest_setting_country() {
		// Company -> Location -> Country
		echo '<input type="text" name="urbanrest_setting_country" id="urbanrest_setting_country" value="' . get_option( 'urbanrest_setting_country' ) . '" class="regular-text ltr" />';
	}

	function urbanrest_setting_facebook_app_id() {
		// Social Media -> Apple -> Apple App ID
		echo '<input type="text" name="urbanrest_setting_facebook_app_id" id="urbanrest_setting_facebook_app_id" value="' . get_option( 'urbanrest_setting_facebook_app_id' ) . '" aria-describedby="urbanrest_setting_facebook_app_id_description" class="regular-text ltr" />';
	}

	function urbanrest_setting_hours_of_operation() {
		// Company -> Contact -> Hours of Operation
		echo '<div>';
		echo '	<label>Monday</label>';
		echo '	<label>Start</label>';
		echo '	<input type="time" name="urbanrest_setting_monday_start_time" id="urbanrest_setting_monday_start_time" value="' . get_option( 'urbanrest_setting_monday_start_time' ) . '" class="ltr" />';
		echo '	<label>End</label>';
		echo '	<input type="time" name="urbanrest_setting_monday_end_time" id="urbanrest_setting_monday_end_time" value="' . get_option( 'urbanrest_setting_monday_end_time' ) . '" class="ltr" />';
		echo '</div>';
		echo '<div>';
		echo '	<label>Tuesday</label>';
		echo '	<label>Start</label>';
		echo '	<input type="time" name="urbanrest_setting_tuesday_start_time" id="urbanrest_setting_tuesday_start_time" value="' . get_option( 'urbanrest_setting_tuesday_start_time' ) . '" class="ltr" />';
		echo '	<label>End</label>';
		echo '	<input type="time" name="urbanrest_setting_tuesday_end_time" id="urbanrest_setting_tuesday_end_time" value="' . get_option( 'urbanrest_setting_tuesday_end_time' ) . '" class="ltr" />';
		echo '</div>';
		echo '<div>';
		echo '	<label>Wednesday</label>';
		echo '	<label>Start</label>';
		echo '	<input type="time" name="urbanrest_setting_wednesday_start_time" id="urbanrest_setting_wednesday_start_time" value="' . get_option( 'urbanrest_setting_wednesday_start_time' ) . '" class="ltr" />';
		echo '	<label>End</label>';
		echo '	<input type="time" name="urbanrest_setting_wednesday_end_time" id="urbanrest_setting_wednesday_end_time" value="' . get_option( 'urbanrest_setting_wednesday_end_time' ) . '" class="ltr" />';
		echo '</div>';
		echo '<div>';
		echo '	<label>Thursday</label>';
		echo '	<label>Start</label>';
		echo '	<input type="time" name="urbanrest_setting_thursday_start_time" id="urbanrest_setting_thursday_start_time" value="' . get_option( 'urbanrest_setting_thursday_start_time' ) . '" class="ltr" />';
		echo '	<label>End</label>';
		echo '	<input type="time" name="urbanrest_setting_thursday_end_time" id="urbanrest_setting_thursday_end_time" value="' . get_option( 'urbanrest_setting_thursday_end_time' ) . '" class="ltr" />';
		echo '</div>';
		echo '<div>';
		echo '	<label>Friday</label>';
		echo '	<label>Start</label>';
		echo '	<input type="time" name="urbanrest_setting_friday_start_time" id="urbanrest_setting_friday_start_time" value="' . get_option( 'urbanrest_setting_friday_start_time' ) . '" class="ltr" />';
		echo '	<label>End</label>';
		echo '	<input type="time" name="urbanrest_setting_friday_end_time" id="urbanrest_setting_friday_end_time" value="' . get_option( 'urbanrest_setting_friday_end_time' ) . '" class="ltr" />';
		echo '</div>';
		echo '<div>';
		echo '	<label>Saturday</label>';
		echo '	<label>Start</label>';
		echo '	<input type="time" name="urbanrest_setting_saturday_start_time" id="urbanrest_setting_saturday_start_time" value="' . get_option( 'urbanrest_setting_saturday_start_time' ) . '" class="ltr" />';
		echo '	<label>End</label>';
		echo '	<input type="time" name="urbanrest_setting_saturday_end_time" id="urbanrest_setting_saturday_end_time" value="' . get_option( 'urbanrest_setting_saturday_end_time' ) . '" class="ltr" />';
		echo '</div>';
		echo '<div>';
		echo '	<label>Sunday</label>';
		echo '	<label>Start</label>';
		echo '	<input type="time" name="urbanrest_setting_sunday_start_time" id="urbanrest_setting_sunday_start_time" value="' . get_option( 'urbanrest_setting_sunday_start_time' ) . '" class="ltr" />';
		echo '	<label>End</label>';
		echo '	<input type="time" name="urbanrest_setting_sunday_end_time" id="urbanrest_setting_sunday_end_time" value="' . get_option( 'urbanrest_setting_sunday_end_time' ) . '" class="ltr" />';
		echo '</div>';
	}

	function urbanrest_setting_street_address() {
		// Company -> Location -> Street Address
		echo '<input type="text" name="urbanrest_setting_street_address" id="urbanrest_setting_street_address" value="' . get_option( 'urbanrest_setting_street_address' ) . '" class="regular-text ltr" />';
	}

	function urbanrest_setting_favicon() {
		// Artwork -> Icons -> Favicon
		echo '<input type="text" id="urbanrest_setting_favicon" name="urbanrest_setting_favicon" value="' . get_option( 'urbanrest_setting_favicon' ) . '" />';
		echo '<span class="wp-media-buttons">';
		echo '	<a href="#urbanrest_setting_favicon" class="button view_image">View Image</a>';
		echo '	<a href="#urbanrest_setting_favicon" id="urbanrest_setting_favicon" class="button add_media" data-editor="content" title="Add Media">';
		echo '		<span class="wp-media-buttons-icon"></span>';
		echo '		Add Media';
		echo '	</a>';
		echo '</span>';
		echo '<p class="description" id="urbanrest_setting_favicon_description">32 &times; 32px PNG</p>';
	}

	function urbanrest_setting_facebook_opengraph_image() {
		// Artwork -> Icons -> Facebook OpenGraph Image
		echo '<input type="text" id="urbanrest_setting_facebook_opengraph_image" name="urbanrest_setting_facebook_opengraph_image" value="' . get_option( 'urbanrest_setting_facebook_opengraph_image' ) . '" />';
		echo '<input type="hidden" id="urbanrest_setting_facebook_opengraph_image_mime" name="urbanrest_setting_facebook_opengraph_image_mime" value="' . get_option( 'urbanrest_setting_facebook_opengraph_image_mime' ) . '" />';
		echo '<input type="hidden" id="urbanrest_setting_facebook_opengraph_image_width" name="urbanrest_setting_facebook_opengraph_image_width" value="' . get_option( 'urbanrest_setting_facebook_opengraph_image_width' ) . '" />';
		echo '<input type="hidden" id="urbanrest_setting_facebook_opengraph_image_height" name="urbanrest_setting_facebook_opengraph_image_height" value="' . get_option( 'urbanrest_setting_facebook_opengraph_image_height' ) . '" />';
		echo '<span class="wp-media-buttons">';
		echo '	<a href="#urbanrest_setting_facebook_opengraph_image" class="button view_image">View Image</a>';
		echo '	<a href="#urbanrest_setting_facebook_opengraph_image" class="button add_media" data-editor="content" title="Add Media">';
		echo '		<span class="wp-media-buttons-icon"></span>';
		echo '		Add Media';
		echo '	</a>';
		echo '</span>';
		echo '<p class="description" id="urbanrest_setting_facebook_opengraph_image_description">1500 &times; 1500px 5MB PNG</p>';
	}

	function urbanrest_setting_facebook_username() {
		// Social Media -> Social Media -> Facebook Username
		echo '<input type="text" name="urbanrest_setting_facebook_username" id="urbanrest_setting_facebook_username" value="' . get_option( 'urbanrest_setting_facebook_username' ) . '" class="regular-text ltr" />';
	}

	function urbanrest_setting_fax_number() {
		// Company -> Contact -> Fax Number
		echo '<input type="text" name="urbanrest_setting_fax_number" id="urbanrest_setting_phone_number" value="' . get_option( 'urbanrest_setting_fax_number' ) . '" class="regular-text ltr" />';
	}

	function urbanrest_setting_google_developers_api_key() {
		// Social Media -> Social Media -> Google Developers API Key
		echo '<input type="text" name="urbanrest_setting_google_developers_api_key" id="urbanrest_setting_google_developers_api_key" value="' . get_option( 'urbanrest_setting_google_developers_api_key' ) . '" class="regular-text ltr" />';
	}

	function urbanrest_setting_google_plus_id() {
		// Social Media -> Social Media -> Google+ ID
		echo '<input type="text" name="urbanrest_setting_google_plus_id" id="urbanrest_setting_google_plus_id" value="' . get_option( 'urbanrest_setting_google_plus_id' ) . '" class="regular-text ltr" />';
	}

	function urbanrest_setting_instagram_username() {
		// Social Media -> Social Media -> Instagram Username
		echo '<input type="text" name="urbanrest_setting_instagram_username" id="urbanrest_setting_instagram_username" value="' . get_option( 'urbanrest_setting_instagram_username' ) . '" class="regular-text ltr" />';
	}

	function urbanrest_setting_locality() {
		// Company -> Location -> Locality
		echo '<input type="text" name="urbanrest_setting_locality" id="urbanrest_setting_locality" value="' . get_option( 'urbanrest_setting_locality' ) . '" class="regular-text ltr" />';
	}

	function urbanrest_setting_phone_number() {
		// Company -> Contact -> Phone Number
		echo '<input type="text" name="urbanrest_setting_phone_number" id="urbanrest_setting_phone_number" value="' . get_option( 'urbanrest_setting_phone_number' ) . '" class="regular-text ltr" />';
	}

	function urbanrest_setting_postal_code() {
		// Company -> Location -> Postal Code
		echo '<input type="text" name="urbanrest_setting_postal_code" id="urbanrest_setting_postal_code" value="' . get_option( 'urbanrest_setting_postal_code' ) . '" class="regular-text ltr" />';
	}

	function urbanrest_setting_region() {
		// Company -> Location -> Region
		echo '<input type="text" name="urbanrest_setting_region" id="urbanrest_setting_region" value="' . get_option( 'urbanrest_setting_region' ) . '" class="regular-text ltr" />';
	}

	function urbanrest_setting_twitter_card_image() {
		// Artwork -> Icons -> Twitter Image
		echo '<input type="text" id="urbanrest_setting_twitter_card_image" name="urbanrest_setting_twitter_card_image" value="' . get_option( 'urbanrest_setting_twitter_card_image' ) . '" />';
		echo '<span class="wp-media-buttons">';
		echo '	<a href="#urbanrest_setting_twitter_card_image" class="button view_image">View Image</a>';
		echo '	<a href="#urbanrest_setting_twitter_card_image" class="button add_media" data-editor="content" title="Add Media">';
		echo '		<span class="wp-media-buttons-icon"></span>';
		echo '		Add Media';
		echo '	</a>';
		echo '</span>';
		echo '<p class="description" id="urbanrest_setting_twitter_card_image_description">300 &times; 300px 1MB PNG</p>';
	}

	function urbanrest_setting_twitter_username() {
		// Social Media -> Social Media -> Twitter Username
		echo '<input type="text" name="urbanrest_setting_twitter_username" id="urbanrest_setting_twitter_username" value="' . get_option( 'urbanrest_setting_twitter_username' ) . '" class="regular-text ltr" />';
	}
endif;
add_action('admin_menu', 'urbanrest_admin_menu');