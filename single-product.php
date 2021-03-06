<?php get_header(); ?>
<?php get_sidebar(); ?>
<?php if(!isset($post)) { the_post(); } ?>
	<main class="post row around-xs" itemscope itemtype="http://schema.org/Product">
		<article id="post-<?php the_ID(); ?>" <?php post_class('col-xs-11 col-sm-9 col-md-7'); ?>>
<?php get_template_part( 'product', 'header' ); ?>
<?php get_template_part( 'product', 'content' ); ?>
<?php get_template_part( 'product', 'footer' ); ?>
		</article>
	</main>
<?php urb_get_specials(); ?>
<?php urb_get_community(); ?>
<?php urb_get_shop(); ?>
<?php urb_get_company(); ?>
<?php get_footer(); ?>