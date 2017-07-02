<?php

function urb_admin_bar() { ?>
<style type="text/css">
	html { height: calc(100% - 32px) !important; margin-top: 32px !important; }
	* html body { height: calc(100% - 32px) !important; margin-top: 32px !important; }
	@media screen and ( max-width: 782px ) {
		html { height: calc(100% - 46px) !important; margin-top: 46px !important; }
		* html body { height: calc(100% - 46px) !important; margin-top: 46px !important; }
	}
</style>
<?php
}
//add_action( 'admin_head', 'urb_admin_bar' );
//add_action( 'show_admin_bar', 'urb_admin_bar' );
function urb_after_setup_theme_admin_bar() {
	$feature = 'admin-bar';
	$arguments = array(
		'callback' => 'urb_admin_bar'
	);
	add_theme_support( $feature, $arguments );
}
add_action( 'after_setup_theme', 'urb_after_setup_theme_admin_bar' );


function urb_admin_menu() {
	global $menu;
	$menu_separator = array('', 'read', 'separator200', '', 'wp-menu-separator');

	// Modifies menu organization to provide spacing between Dashboard separator and Posts
	// This multiplies the default menu positions by 10
	// Also swaps Media and Pages menu items
	$menu[999] = $menu[99]; unset($menu[99]); // Separator
	$menu[800] = $menu[80]; unset($menu[80]); // Settings
	$menu[750] = $menu[75]; unset($menu[75]); // Tools
	$menu[700] = $menu[70]; unset($menu[70]); // Users
	$menu[650] = $menu[65]; unset($menu[65]); // Plugins
	$menu[600] = $menu[60]; unset($menu[60]); // Appearance
	$menu[590] = $menu[59]; unset($menu[59]); // Separator
	$menu[250] = $menu[25]; unset($menu[25]); // Comments
	$menu[100] = $menu[20]; unset($menu[20]); // Pages
	$menu[150] = $menu[15]; unset($menu[15]); // Links
	//$menu[202] = $menu_separator;             // Separator
	$menu[201]  = $menu_separator;             // Separator
	$menu[200] = $menu[10]; unset($menu[10]); // Media
	$menu[50]  = $menu[5];  unset($menu[5]);  // Posts
	//$menu[49]  = $menu_separator;             // Separator
	$menu[40]  = $menu[4];  unset($menu[4]);  // Separator
	$menu[20]  = $menu[2];  unset($menu[2]);  // Dashboard

	$page_title = 'Menus';
	$menu_title = 'Menus';
	$capability = 'manage_options';
	$menu_slug = 'menus';
	$function = 'urb_custom_menu_page';
	$icon_url = 'dashicons-list-view';
	$position = 202;
	add_menu_page($page_title, $menu_title, $capability, $menu_slug, $function, $icon_url, $position);
}

function urb_custom_menu_page(){
  echo 'Redirecting...<script>window.location="/wp-admin/nav-menus.php";</script>';
  // TOOD: figure out how to embed the page without requiring a redirect
  //       for some reason this wasn't working
  // include(ABSPATH . 'wp-admin/nav-menus.php');
  // $location = '/wp-admin/nav-menus.php';
  // $status = null;
  // wp_redirect( $location, $status );
	// exit;
}

add_action('admin_menu', 'urb_admin_menu');

?>