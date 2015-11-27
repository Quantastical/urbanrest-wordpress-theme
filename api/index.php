<?php
include_once($_SERVER['DOCUMENT_ROOT'].'/wp-load.php' );

header("Access-Control-Allow-Origin: http://local.urbanrest.com");

$path_parts = explode( '/', trim($_SERVER['REQUEST_URI'], '/') );

$api = array_shift( $path_parts );

if( count( $path_parts ) < 2 || !file_exists("{$api}.php") ) {
	header("HTTP/1.0 404 Not Found - Archive Empty");
    require TEMPLATEPATH.'/404.php';
    exit;
} else {
	include("{$api}.php");
}

$controller = "{$api}_{$path_parts[0]}";
$method = $path_parts[1];

$api_controller = new $controller;

if( !method_exists( $api_controller, $method ) ) {
	header("HTTP/1.0 404 Not Found - Archive Empty");
    require TEMPLATEPATH.'/404.php';
    exit;
}

$api_controller->{$method}( isset($path_parts[2]) ? $path_parts[2] : 0 );

?>