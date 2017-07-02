<?php

if( !function_exists( 'urb_ssl_post_thumbnail_urls' ) ) :
  function urb_ssl_post_thumbnail_urls($url, $post_id) {
    //Skip file attachments
    if( !wp_attachment_is_image($post_id) ) {
      return $url;
    }

    // Correct protocol for https connections
    list($protocol, $uri) = explode('://', $url, 2);

    if( is_ssl() ) {
      if( 'http' == $protocol ) {
        $protocol = 'https';
      }
    } else {
      if( 'https' == $protocol ) {
        $protocol = 'http';
      }
    }

    return $protocol . '://' . $uri;
  }
endif;

add_filter('wp_get_attachment_url', 'urb_ssl_post_thumbnail_urls', 10, 2);

?>