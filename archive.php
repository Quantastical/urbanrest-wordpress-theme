<?php
/*
Template Name: Archive
*/
?>
<?php get_header(); ?>
<?php get_sidebar(); ?>
<?php if(!isset($post)) { the_post(); } ?>
	<main class="page row around-xs" id="<?php echo basename( get_permalink( $post->ID ) ); ?>">
		<article id="page-<?php the_ID(); ?>" <?php post_class('col-xs-11 col-sm-9 col-md-7'); ?>>
<?php get_template_part( 'archive', 'header' ); ?>
<?php get_template_part( 'archive', 'content' ); ?>
<?php get_template_part( 'archive', 'footer' ); ?>
		</article>
	</main>
<?php urb_get_specials(); ?>
<?php urb_get_community(); ?>
<?php urb_get_shop(); ?>
<?php urb_get_company(); ?>
<?php get_footer(); ?>