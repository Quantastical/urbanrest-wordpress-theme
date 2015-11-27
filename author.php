<?php get_header(); ?>
<?php get_sidebar(); ?>
<?php $profile = get_userdata(intval($author)); ?>
	<main class="user-container row around-xs">
		<article id="user-<?php the_ID(); ?>" <?php post_class('col-xs-11 col-sm-9 col-md-7'); ?>>
<?php include('user-header.php'); ?>
<?php include('user-content.php'); ?>
<?php include('user-footer.php'); ?>
		</article>
	</main>
<?php urb_get_specials(); ?>
<?php urb_get_community(); ?>
<?php urb_get_shop(); ?>
<?php urb_get_company(); ?>
<?php get_footer(); ?>