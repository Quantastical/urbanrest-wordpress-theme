<?php
include_once($_SERVER['DOCUMENT_ROOT'].'/wp-load.php' );

class untappd_beer {
	private $url_base      = 'https://api.untappd.com';
	private $client_id     = null;
	private $client_secret = null;

	public function __construct() {
		$this->client_id     = get_option( 'untappd_api_client_id' );
		$this->client_secret = get_option( 'untappd_api_client_secret' );
	}

	public function info( $untappd_beer_id = false ) {
		if( !$this->client_id || !$this->client_secret ) {
			return;
		}

		if( !is_numeric($untappd_beer_id) ) {
			$untappd_beer_url = get_post_meta($_GET['postId'], 'untappd_beer_url')[0];
			$untappd_beer_id = substr( $untappd_beer_url, strrpos($untappd_beer_url, '/') );
		}

		if( !$untappd_beer_id ) {
			return;
		}

		$endpoint = '/v4/beer/info/';
		$params = array(
			'client_id'     => $this->client_id,
			'client_secret' => $this->client_secret
		);

		$response = file_get_contents($this->url_base . $endpoint . $untappd_beer_id . '?' . http_build_query($params) );

		header('Content-Type: application/json; charset=UTF-8');
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