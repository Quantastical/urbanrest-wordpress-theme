<?php
/*
$url = $_SERVER['REQUEST_URI'];
$file = trim(str_replace('/', '-', $url), " \t\r\n-");
$cachefile = '../../cache/tmp/' . $file . '.html';
$cachetime = 18000;

if (file_exists($cachefile) && time() - $cachetime < filemtime($cachefile)) {
  include($cachefile);
  exit;
}
ob_start();

// WORDPRESS
require_once('../../../index.php');

$cached = fopen($cachefile, 'w');
fwrite($cached, ob_get_clean());
fclose($cached);
ob_end_flush();
*/
?>