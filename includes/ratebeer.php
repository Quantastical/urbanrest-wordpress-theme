<?php
class ratebeer_beer {
	private $url_base = 'http://www.ratebeer.com';

	public function __construct() {
	}

	public function info( $ratebeer_beer_id = false ) {
		if( !is_numeric($ratebeer_beer_id) ) {
			if( $ratebeer_beer_url = get_post_meta($_GET['postId'], 'ratebeer_beer_url') ) {
				$ratebeer_beer_url = $ratebeer_beer_url[0];
			}
		}

		if( !$ratebeer_beer_url ) {
			return;
		}

		// $ratebeer_beer_id = 'founders-kbs-kentucky-breakfast-stout/40544/';
		$endpoint = '/beer/';

		$remote_html = file_get_contents($ratebeer_beer_url);

		if( $remote_html ) {
			$response = array(
				'review_count' => 0,
				'rating_value' => 0,
				'best_rating'  => 0
			);

			try
			{
				$dom = new DOMDocument();
				@$dom->loadHTML($remote_html);
				$x = new DOMXPath($dom);

				foreach($x->query("//*[@itemprop='reviewCount']") as $node) 
				{
					$response['review_count'] = str_replace(',', '', $node->nodeValue);
					break;
				}

				foreach($x->query("//*[@itemprop='ratingValue']") as $node)
				{
					$response['rating_value'] = $node->nodeValue;
					break;
				}

				foreach($x->query("//*[@itemprop='bestRating']") as $node)
				{
					$response['best_rating'] = $node->nodeValue;
					break;
				}
			}
			catch( Exception $e )
			{
				return;
			}

			header('Content-Type: application/json; charset=UTF-8');
			wp_send_json_success($response);
		}
	}
}
?>