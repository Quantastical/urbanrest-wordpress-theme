<?php
/*
Template Name: Blog
*/
?>
<?php get_header(); ?>
<?php get_sidebar(); ?>
	<main class="page row around-xs blog-list" id="blog">
<?php
$args = array(
	'post_type'   => 'post',
	'post_status' => 'publish'
);
$query = new WP_Query( $args );
?>
<?php if ( $query->have_posts() ) : ?>
<?php 	while ( $query->have_posts() ) : $query->the_post(); ?>
		<article id="page-<?php the_ID(); ?>" <?php post_class('col-xs-11 col-sm-9 col-md-7'); ?>>
<?php 	get_template_part( 'blog', 'header' ); ?>
<?php 	get_template_part( 'blog', 'content' ); ?>
<?php 	get_template_part( 'blog', 'footer' ); ?>
		</article>
<?php
			the_posts_pagination( array(
				'prev_text'          => __( 'Previous page', 'twentysixteen' ),
				'next_text'          => __( 'Next page', 'twentysixteen' ),
				'before_page_number' => '<span class="meta-nav screen-reader-text">' . __( 'Page', 'twentysixteen' ) . ' </span>',
			) );
?>
<?php 	endwhile; ?>
<?php endif; ?>
	</main>
<?php urb_get_specials(); ?>
<?php urb_get_community(); ?>
<?php urb_get_shop(); ?>
<?php urb_get_company(); ?>
<?php get_footer(); ?>