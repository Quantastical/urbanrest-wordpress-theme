<?php

class Cache {
  private static $expiration = 18000;
  private static $directory = '';
  public $started = false;

  public static function get($key) {
    if (file_exists($directory . $key) && time() - $expiration < filemtime($directory . $key)) {
      return $directory . $key;
    }
  }

  public static function cacheable($key) {
    return true;
  }

  public static function start($key) {
    ob_start();
    $this->started = true;
  }

  public static function save($key) {
    $this->started = false;
    $cache = fopen($key, 'w');
    fwrite($cached, ob_get_clean());
    fclose($cached);
    ob_end_flush();
  }
}

?>