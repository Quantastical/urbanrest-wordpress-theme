<?php

function w3_totalcache_flush_cache( ) {
	$w3_plugin_totalcache->flush_all();
}

function urbanrest_cache_flush() {
	if ( ! wp_next_scheduled( 'w3_totalcache_flush_cache' ) ) {
		wp_schedule_event( strtotime('12:05:00'), 'hourly', 'w3_totalcache_flush_cache' );
	}
}

add_action( 'wp', 'urbanrest_cache_flush' );
?>