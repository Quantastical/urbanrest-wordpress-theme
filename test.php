<?php

error_reporting(1);

$readonly_key = '5X_Ren1kExhq_yjhSod9';
$readwrite_key = 'HCWN83b2B31TxNgmzdTH';

$email = 'jeff@quantastical.com';
$api_key = $readwrite_key;

$auth_token = base64_encode($email . ':' . $api_key);
// $header = 'Authorization: Basic ' . $auth_token;


// API request
/*
$ch = curl_init();

$headers = array();
//$headers[] = 'Content-length: 0';
//$headers[] = 'Content-type: application/json';
$headers[] = 'Authorization: Basic ' . $token;

curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
curl_setopt($ch, CURLOPT_URL, $endpoint);
curl_setopt($ch, CURLOPT_HTTPGET, 1);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($ch);

curl_close($ch);

var_dump($response);
*/

$endpoint = "https://business.untappd.com/api/v1/locations";

$context = stream_context_create(array(
    'http' => array(
        'header' => "Authorization: Basic " . $auth_token,
    )
));

$result = file_get_contents($endpoint, false, $context);

var_dump($result);


echo "<br><br><br>";


$endpoint = "https://business.untappd.com/api/v1/locations/10164/menus";

$context = stream_context_create(array(
    'http' => array(
        'header' => "Authorization: Basic " . $auth_token,
    )
));

$result = file_get_contents($endpoint, false, $context);

var_dump($result);


?>