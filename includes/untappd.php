<?php
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
			$untappd_beer_url = get_post_meta($_POST['postId'], 'untappd_beer_url')[0];
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
		wp_send_json_success($response);
	}
}
?>