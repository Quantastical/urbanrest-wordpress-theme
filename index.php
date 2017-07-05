<?php
header("Location: /");
die();
/*
require_once('./includes/cache.php');

$cache = Cache::get($_SERVER['REQUEST_URI']);
if ($cache !== false) {
  require_once($cache);
}

if (Cache::cacheable($_SERVER['REQUEST_URI'])) {
  Cache::start($_SERVER['REQUEST_URI']);  
}

require_once('../../../index.php');

if (Cache::$started) {
  Cache::save();
}
*/

/*
$file = trim(str_replace('/', '-', $url), " \t\r\n-");
$cachefile = '../../cache/tmp/' . $file . '.html';
$cachetime = 18000;

if (file_exists($cachefile) && time() - $cachetime < filemtime($cachefile)) {
  include($cachefile);
  exit;
}
ob_start();

// WORDPRESS

$cached = fopen($cachefile, 'w');
fwrite($cached, ob_get_clean());
fclose($cached);
ob_end_flush();
*/
?>