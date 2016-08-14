<?php

function urb_mailchimp_request($request) {
	if(!isset($request['apikey'])) {
		return;
	}

	$mailchimp_datacenter_id = substr( strrchr($request['apikey'], '-'), 1 );

	$ch = curl_init( "http://{$mailchimp_datacenter_id}.api.mailchimp.com/3.0/" . $request['path'] );
 
	curl_setopt( $ch, CURLOPT_HTTPHEADER, array
	(
		"Content-Type: application/json",
		"Authorization: mailchimp_api_key {$request['apikey']}",
		// 'X-HTTP-Method-Override: ' . $type,
	) );
 
	curl_setopt( $ch, CURLOPT_CUSTOMREQUEST, $request['method'] );
	curl_setopt( $ch, CURLOPT_TIMEOUT, 5 );
	curl_setopt( $ch, CURLOPT_RETURNTRANSFER, true );
	curl_setopt( $ch, CURLOPT_USERAGENT, $_SERVER['HTTP_USER_AGENT'] );
 
	if( $request['data'] )
		curl_setopt( $ch, CURLOPT_POSTFIELDS, json_encode( $request['data'] ) );
 
	$response = curl_exec( $ch );
	curl_close( $ch );
 
	return json_decode($response);
}

?>