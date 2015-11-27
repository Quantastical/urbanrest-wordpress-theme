<?php
require_once('includes/3rd-parties.php');
require_once('includes/admin-menu.php');
require_once('includes/beer.php');
require_once('includes/event.php');
require_once('includes/form.php');
require_once('includes/login.php');
require_once('includes/product.php');
require_once('includes/profile.php');
require_once('includes/rating.php');
require_once('includes/response.php');
require_once('includes/role.php');
require_once('includes/title.php');

if ( !function_exists('urbanrest_setup') ) :
	function urbanrest_setup() {
		// Add support for titles
		add_theme_support( 'title-tag' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		// Add featured images to posts
		add_theme_support( 'post-thumbnails', array('beer', 'page', 'post', 'product') );

		// Let WordPress manage the document title.
		//add_theme_support( 'title-tag' );

		// This theme uses wp_nav_menu() in two locations.
		register_nav_menus( array(
			'main'        => 'Main Menu',
			'footer'      => 'Footer Menu',
			'kickstarter' => 'Kickstarter Menu',
			'map'         => 'Map Menu',
			'social'      => 'Social Menu',
			'team'        => 'Team Menu'
		) );

		// Use default core markup for search form, comment form, and comments
		add_theme_support( 'html5', array(
			'search-form', 'comment-form', 'comment-list', 'gallery', 'caption'
		) );
	}
endif;
add_action('after_setup_theme', 'urbanrest_setup');

if( !function_exists('urb_generate_username') ) :
	function urb_generate_username( $prefix = '' ) {
		$user_exists = 1;
		do {
			$random_number = sprintf("%0d", mt_rand(1, 999999));
			$user_exists = username_exists( $prefix . $random_number );
		} while( $user_exists > 0 );
		return $prefix . $random_number;
	}
endif;

function urb_get_fonts_for_preloading() {
	$fonts = array(
		'Bad Script'              => array(400),
		'Freckle Face'            => array(400),
		'Griffy'                  => array(400),
		'KG Tangled Up In You'    => array(400),
		'KG Ten Thousand Reasons' => array(400),
		'RNS Baruta'              => array(400),
		'Roboto'                  => array(100, 300, 400, 600, 800),
		'Satisfy'                 => array(400),
		'Witka'                   => array(400)
	);

	foreach( $fonts as $family => $weights ) {
		foreach( $weights as $weight ) {
			echo "<span style=\"font-family: '{$family}'; font-weight: {$weight};\"></span>" . "\n";
		}
	}
}

if( !function_exists('urb_telephone_format') ) :
	function urb_telephone_format($number, $format = "($1) $2-$3") {
		$number = preg_replace("/[^0-9]/", '', $number);

		if( strlen($number) == 7 )
		{
			return preg_replace('/([0-9]{3})([0-9]{4})/', "$1-$2", $number);
		}
		elseif( strlen($number) == 10 )
		{
			return preg_replace('/([0-9]{3})([0-9]{3})([0-9]{4})/', $format, $number);
		}
		else
		{
			return $number;
		}
	}
endif;

if( !function_exists('urb_get_business_hours') ) :
	function urb_get_business_hours( $day, $format = "g:ia" ) {
		$day = strtolower($day);
		$business_hours = "";

		if( !in_array( $day, array('sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday') ) )
		{
			return false;
		}

		if( strtolower($format) === "schema.org" )
		{
			$formatted = ucwords( substr($day, 0, 2) );
			if( get_option("urbanrest_setting_{$day}_start_time") || get_option("urbanrest_setting_{$day}_end_time") ) {
				$formatted .= ' ' . get_option("urbanrest_setting_{$day}_start_time") . '-' . get_option("urbanrest_setting_{$day}_end_time");
			}
			return $formatted;
		}

		if( get_option("urbanrest_setting_{$day}_start_time") )
		{
			$date = new DateTime();
			$date->modify("next {$day}");
			$date->modify( get_option("urbanrest_setting_{$day}_start_time") );
			$business_hours .= $date->format('g:ia');
		}
		else if( get_option("urbanrest_setting_{$day}_end_time") )
		{
			$business_hours .= 'Until ' . $business_hours;
		}

		if( get_option("urbanrest_setting_{$day}_end_time") )
		{
			if( get_option("urbanrest_setting_{$day}_start_time") )
			{
				$business_hours .= " &ndash; ";
			}

			$date = new DateTime();
			$date->modify("next {$day}");
			$date->modify( get_option("urbanrest_setting_{$day}_end_time") );
			$business_hours .= $date->format('g:ia');
		}
		else if( get_option("urbanrest_setting_{$day}_start_time") )
		{
			$business_hours = 'From ' . $business_hours;
		}

		if( strlen($business_hours) > 0 )
		{
			return str_replace(':00', '', $business_hours);
		}
		else
		{
			return 'Closed';
		}
	}
endif;

if( !function_exists('urb_get_message_placeholder') ) :
	function urb_get_message_placeholder() {
		$messages = array(
			"Send us a message...",
			"Drop us a line...",
			"How can we help...",
			"What's on your mind..."
		);

		return $messages[ array_rand($messages) ];
	}
endif;

if( !function_exists('urb_the_datetime') ) :
	function urb_the_datetime($field, $format = DATE_W3C) {
		$value = get_post_meta( get_the_ID(), $field, true );
		echo ( !empty($value) ? DateTime::createFromFormat(DATE_W3C, $value)->format($format) : '' );
		return;
	}
endif;

if( !function_exists('urb_get_community') ) :
	function urb_get_community() {
		include_once('community.php');
	}
endif;

if( !function_exists('urb_get_company') ) :
	function urb_get_company() {
		include_once('company.php');
	}
endif;

if( !function_exists('urb_get_shop') ) :
	function urb_get_shop() {
		include_once('shop.php');
	}
endif;

if( !function_exists('urb_get_specials') ) :
	function urb_get_specials() {
		include_once('specials.php');
	}
endif;

if( !function_exists( 'urbanrest_enqueue_scripts' ) ) :
	function urbanrest_enqueue_scripts() {
		// Add styles
		//wp_enqueue_style( 'fontawesome', '//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css' );
		wp_enqueue_style( 'main', get_stylesheet_uri(), false, '1.1' );

		// Add scripts
		wp_enqueue_script('jquery', '//code.jquery.com/jquery-1.11.3.min.js');
		wp_enqueue_script('gmaps', 'http://maps.google.com/maps/api/js?sensor=false', false, '1.1', true);
		wp_enqueue_script('site', get_stylesheet_directory_uri() . '/script.js', false, '1.1', true);
		/*
		wp_enqueue_script('modal', get_stylesheet_directory_uri() . '/scripts/plugins/jquery.urbanrestModal.js', false, '1.1', true);
		wp_enqueue_script('main', get_stylesheet_directory_uri() . '/scripts/main.js', false, '1.1', true);
		wp_enqueue_script('modal', get_stylesheet_directory_uri() . '/scripts/modal.js', false, '1.1', true);
		wp_enqueue_script('ga', get_stylesheet_directory_uri() . '/scripts/analytics.js', false, '1.1', true);
		wp_enqueue_script('twitter', get_stylesheet_directory_uri() . '/scripts/twitter.js', false, '1.1', true);

		// Template-specific Scripts
		$template = pathinfo( get_page_template(), PATHINFO_FILENAME );
		switch( $template ) {
			case 'home':
				wp_enqueue_script('home', get_stylesheet_directory_uri() . '/scripts/home.js', '1.1', true);
			break;
			case 'kickstarter':
				wp_enqueue_script('kickstarter', get_stylesheet_directory_uri() . '/scripts/kickstarter.js', '1.1', true);
			break;
			case 'single':
				wp_enqueue_script('single', get_stylesheet_directory_uri() . '/scripts/single.js', '1.0', true);
			break;
		}
		*/

		// Create rating variable for JS
		wp_localize_script('site', '_URB', array(
			'url'   => admin_url('admin-ajax.php'),
			'nonce' => wp_create_nonce('admin-ajax')
		));
	}
endif;
add_action('wp_enqueue_scripts', 'urbanrest_enqueue_scripts');

//require_once('includes/admin/user-profile.php');

require_once('includes/redirects.php');
require_once('includes/content-editor.php');
//require_once('includes/login.php');
require_once('includes/footer.php');
//require_once('includes/widgets.php');
require_once('includes/menus.php');

//require_once('includes/admin/user-roles.php');
require_once('includes/admin/help.php');
require_once('includes/admin/scripts.php');
require_once('includes/admin/menu-bar.php');
require_once('includes/admin/footer.php');
require_once('includes/admin/dashboard.php');
require_once('includes/admin/fields.php');
require_once('includes/admin/artwork.php');
require_once('includes/admin/company.php');
//require_once('includes/admin/social-media.php');
require_once('includes/admin/menu.php');
require_once('includes/admin/home-page.php');
//require_once('includes/admin/beer.php');
//require_once('includes/admin/beer-statuses.php');
//require_once('includes/admin/events.php');