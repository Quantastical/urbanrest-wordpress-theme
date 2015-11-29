<?php

//echo file_get_contents('http://www.ratebeer.com/beer/founders-kbs-kentucky-breakfast-stout/40544/');

?>

<?php
include_once($_SERVER['DOCUMENT_ROOT'].'/wp-load.php' );

class ratebeer_beer {
	private $url_base = 'http://www.ratebeer.com';

	public function __construct() {
	}

	public function info( $ratebeer_beer_id = false ) {
		//$ratebeer_beer_id = 'founders-kbs-kentucky-breakfast-stout/40544/';
		$endpoint = '/beer/';

		$response = file_get_contents($this->url_base . $endpoint . $ratebeer_beer_id );

		//header('Content-Type: application/json; charset=UTF-8');
		echo $response;
	}
}

/*
include_once($_SERVER['DOCUMENT_ROOT'].'/wp-load.php' );

$api_url_base  = 'https://api.untappd.com';
$client_id     = get_option( 'untappd_api_client_id' );
$client_secret = get_option( 'untappd_api_client_secret' );

echo 'test';
*/
/*

function urb_get_untappd_beer_info( $beer_id ) {

	if( !$client_id || !$client_secret ) {
		return;
	}

	$beer_info_endpoint = '/v4/beer/info/';
	$params = array(
		'client_id'     => $client_id,
		'client_secret' => $client_secret
	);

	$beer_info_response = file_get_contents('https://api.untappd.com' . $beer_info_endpoint . $beer_id . '?' . http_build_query($params) );
	return json_decode($beer_info_response, true);
}

function urb_get_untappd_beer_permalink( $beer_info ) {
	return 'https://untappd.com/b/' . $beer_info['beer']['beer_slug'] . '/' . $beer_info['beer']['bid'];
}

// Untappd
$untappd_beer_id = get_post_meta( $post_id, 'untappd_beer_id' );
if( $untappd_beer_id ) {
	$untappd_beer_info = urb_get_untappd_beer_info( $untappd_beer_id[0] );

	$total_ratings += $untappd_beer_info['beer']['rating_count'] * $untappd_beer_info['beer']['rating_score'];
	$ratings_count += $untappd_beer_info['beer']['rating_count'];
}
*/
?>