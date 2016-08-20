<?php
global $ajax;
$ajax = true;

global $more;
$more = 1;
?>
<?php
if( !empty( get_page_template_slug( get_queried_object_id() )) ) {
	include( get_page_template_slug( get_queried_object_id() ) );
}
else if( get_post_type() == 'post' ) {
	include( 'single.php' );
}
else {
	include( get_post_type() . '.php' );
}
?>