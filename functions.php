<?php
require_once('includes/ajax.php');
require_once('includes/redirects.php');
require_once('includes/3rd-parties.php');
require_once('includes/admin-menu.php');
require_once('includes/beer.php');
require_once('includes/disable-emojis.php');
//require_once('includes/event.php');
require_once('includes/form.php');
require_once('includes/image-ssl-fix.php');
require_once('includes/image-rotation-repair.php');
require_once('includes/mailchimp.php');
require_once('includes/shortlink.php');
require_once('includes/login.php');
//require_once('includes/product.php');
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

		add_post_type_support( 'page', 'excerpt' );

		// Let WordPress manage the document title.
		//add_theme_support( 'title-tag' );

		// This theme uses wp_nav_menu() in two locations.
		register_nav_menus( array(
			'featured'     => 'Featured Posts',
			'navbar'       => 'Navigation Bar',
			'main-menu'    => 'Main Menu',
			'social'       => 'Social Media Icons',
			'beer-list'    => 'On-Tap Beer List',
			'growler-list' => 'Available in Growler List',
		) );

		// Use default core markup for search form, comment form, and comments
		add_theme_support( 'html5', array(
			'search-form', 'comment-form', 'comment-list', 'gallery', 'caption'
		) );

		// Add custom editor stylesheet appearance
		add_editor_style( 'styles/editor/style.css' );
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
		'Chalk It Up' => array(400),
		'Flux'        => array(400),
		'Legend M54'  => array(400),
		'RNS Baruta'  => array(400),
		'Roboto'      => array(100,300,400,600,800),
		'Roboto Slab' => array(100,300,400,700),
		'Satisfy'     => array(400)
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
		global $ajax;
		if(!isset($ajax)){
			//include_once('aside-community.php');	
		}
	}
endif;

if( !function_exists('urb_get_company') ) :
	function urb_get_company() {
		global $ajax;
		if(!isset($ajax)) {
			include_once('aside-company.php');
		}
	}
endif;

if( !function_exists('urb_get_shop') ) :
	function urb_get_shop() {
		global $ajax;
		if(!isset($ajax)) {
			//include_once('aside-shop.php');
		}
	}
endif;

if( !function_exists('urb_get_specials') ) :
	function urb_get_specials() {
		global $ajax;
		if(!isset($ajax)) {
			include_once('aside-specials.php');
		}
	}
endif;

if( !function_exists('urb_get_version') ) :
	function urb_get_version() {
		// TODO: Figure out why this is not able to read version from package.json
		// $package = json_decode( file_get_contents(get_stylesheet_directory_uri() . 'package.json') );
		// return $package['version'];
		return "1.3.3";
	}
endif;

if( !function_exists( 'urbanrest_enqueue_scripts' ) ) :
	function urbanrest_enqueue_scripts() {
		// Remove WordPress's jQuery reference from the public site
		// for speed considerations. It's embedded in the minified script.js.
		if( !is_admin() ) {
			wp_deregister_script( 'jquery' );
			wp_register_script( 'jquery', "//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js", false, null );
		}

		// Add critical styles
		// $critical_styles = "html { background: black; } body { opacity: 0; }";
		// wp_add_inline_style( 'custom-style', $critical_styles );
		// wp_enqueue_style( 'main', get_stylesheet_directory_uri() . '/style.min.css', false, false );

		// Add scripts
    wp_enqueue_script('site', get_stylesheet_directory_uri() . '/script.min.js', false, urb_get_version() );

		wp_enqueue_script( 'html5shiv', get_stylesheet_directory_uri() . '/node_modules/html5shiv/dist/html5shiv.min.js' );
		wp_script_add_data( 'html5shiv', 'conditional', 'lt IE 9' );

		wp_localize_script('site', '_URB', array(
			'url'                       => admin_url('admin-ajax.php'),
			'nonce'                     => wp_create_nonce('admin-ajax'),
			'googleAnalyticsTrackingID' => get_option('google_analytics_tracking_id'),
			'googleBrowserMapApiKey'    => get_option('google_browser_api_key')
		));
	}
endif;
add_action('wp_enqueue_scripts', 'urbanrest_enqueue_scripts');

// remove JQMIGRATE console log. could break old plugins relying on old jQuery
/*
add_action( 'wp_default_scripts', function( $scripts ) {
    if ( ! empty( $scripts->registered['jquery'] ) ) {
        $jquery_dependencies = $scripts->registered['jquery']->deps;
        $scripts->registered['jquery']->deps = array_diff( $jquery_dependencies, array( 'jquery-migrate' ) );
    }
} );
*/

require_once('includes/content-editor.php');
require_once('includes/footer.php');
require_once('includes/menus.php');

require_once('includes/admin/help.php');
require_once('includes/admin/scripts.php');
require_once('includes/admin/menu-bar.php');
require_once('includes/admin/footer.php');
require_once('includes/admin/dashboard.php');
require_once('includes/admin/fields.php');
require_once('includes/admin/artwork.php');
require_once('includes/admin/company.php');
require_once('includes/admin/menu.php');
require_once('includes/admin/home-page.php');