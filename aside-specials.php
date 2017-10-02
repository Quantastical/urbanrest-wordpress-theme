	<aside class="site-specials row" id="beer">
		<header class="col-xs-12">
			<h2>Urbanrest Beer List</h2>
		</header>

		<section class="col-xs-12 beer-list">
			<h3>Currently On Tap</h3>

			<ol>
<?php
if (get_option('untappd_for_business_api_username')
 && get_option('untappd_for_business_api_readonly_key')
 && get_option('untappd_for_business_api_readwrite_key')
 && get_option('untappd_for_business_api_taplist_section_id')) :
	$email = get_option('untappd_for_business_api_username');
	$readonly_key = get_option('untappd_for_business_api_readonly_key');
	$readwrite_key = get_option('untappd_for_business_api_readwrite_key');
	$section_id = get_option('untappd_for_business_api_taplist_section_id');

	$auth_token = base64_encode($email . ':' . $readwrite_key);
	$endpoint = "https://business.untappd.com/api/v1/sections/{$section_id}/items";
	$context = stream_context_create(array(
	    'http' => array(
	        'header' => "Authorization: Basic " . $auth_token,
	    )
	));
	$section_response = file_get_contents($endpoint, false, $context);

	if ($section_response) :
		$section_items = json_decode($section_response);

		foreach( $section_items->items as $key => $beer ) :
?>
				<li class="beer">
					<span class="title"><?php echo $beer->name ? $beer->name : $beer->original_name; ?></a>
					<span class="abv"><?php echo $beer->abv ? $beer->abv . '%' : $beer->original_abv . '%'; ?></span>
					<p class="containers">
<?php 
			$endpoint = "https://business.untappd.com/api/v1/items/{$beer->id}/containers";
			$context = stream_context_create(array(
			    'http' => array(
			        'header' => "Authorization: Basic " . $auth_token,
			    )
			));
			$container_response = file_get_contents($endpoint, false, $context);
			if ($container_response) :
				$item_containers = json_decode($container_response);

				$containers = array_map(function ($container) {
					return $container->container_size->name;
				}, $item_containers->containers);
				echo join(" / ", $containers);
			endif;
?>
					</p>
					<p><?php echo $beer->description ? $beer->description : $beer->original_description; ?></p>
				</li>
<?php
		endforeach;
	endif;
endif;
?>
			</ol>
			<p style="text-align:center;font-size:0.5em;">
				* all organic ingredients
			</p>
		</section>
	</aside>