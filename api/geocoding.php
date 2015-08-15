<?php
include_once($_SERVER['DOCUMENT_ROOT'].'/wp-load.php' );

$api_key = get_option('urbanrest_setting_google_developers_api_key');

header('Content-Type: application/json');

if( $api_key ) {
	$street_address = $_POST['urbanrest_setting_street_address'];
	$locality = $_POST['urbanrest_setting_locality'];
	$region = $_POST['urbanrest_setting_region'];
	$postal_code = $_POST['urbanrest_setting_postal_code'];
	$country = $_POST['urbanrest_setting_country'];

	$address = urlencode($street_address . ', ' . $locality . ', ' . $region . ', ' . $country . ', ' . $postal_code);

	echo file_get_contents("https://maps.googleapis.com/maps/api/geocode/json?address={$address}&key={$api_key}");
} else {
	$message = array(
		'error_message' => "No API Key has been provided.",
		'results' => array(),
		'status' => "REQUEST_DENIED"
	);
	echo json_encode($message);
}
?>