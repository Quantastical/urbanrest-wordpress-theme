<?php get_header(); ?>
<?php get_sidebar(); ?>
<?php if(!isset($post)) { the_post(); } ?>
	<main class="event row around-xs">
		<article id="event-<?php the_ID(); ?>" <?php post_class('col-xs-11 col-sm-9 col-md-7'); ?> itemscope itemtype="http://schema.org/Event">
<?php get_template_part( 'event', 'header' ); ?>
<?php get_template_part( 'event', 'content' ); ?>
<?php get_template_part( 'event', 'footer' ); ?>
		</article>
	</main>
<?php urb_get_specials(); ?>
<?php urb_get_community(); ?>
<?php urb_get_shop(); ?>
<?php urb_get_company(); ?>
<?php get_footer(); ?>