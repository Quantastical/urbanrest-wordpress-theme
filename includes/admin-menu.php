<?php

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
	$menu[202] = $menu_separator;             // Separator
	$menu[200] = $menu[10]; unset($menu[10]); // Media
	$menu[50]  = $menu[5];  unset($menu[5]);  // Posts
	$menu[49]  = $menu_separator;             // Separator
	$menu[40]  = $menu[4];  unset($menu[4]);  // Separator
	$menu[20]  = $menu[2];  unset($menu[2]);  // Dashboard
}
add_action('admin_menu', 'urb_admin_menu');

?>