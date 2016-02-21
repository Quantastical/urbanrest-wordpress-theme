<?php get_header(); ?>
<?php get_sidebar(); ?>
<?php
/*
	<main class="posts row around-xs">
<?php if ( have_posts() ) : ?>
<?php 	while ( have_posts() ) : ?>
<?php 		the_post(); ?>
		<article id="post-<?php the_ID(); ?>" <?php post_class('col-xs-11 col-sm-9 col-md-7'); ?>>
			<a href="<?php the_permalink(); ?>">
<?php 	if ( has_post_thumbnail() ) : ?>
				<span class="blog-post-image" style="background-image:url('<?php echo wp_get_attachment_image_src( get_post_thumbnail_id($post->ID), array( 720,405 ), false, '' )[0]; ?>');">
					<?php the_post_thumbnail(); ?>
				</span>
<?php 	endif; ?>
				<h2><?php the_title(); ?></h2>
			</a>
			<div class="blog-post-intro">
				<?php the_excerpt(); ?>
			</div>
		</article>
<?php 	endwhile; ?>
<?php endif; ?>
		<footer class="col-xs-11 col-sm-9 col-md-7">
			<div class="pull-left"><?php previous_posts_link( 'Newer posts' ); ?></div>
			<div class="pull-right"><?php next_posts_link( 'Older posts' ); ?></div>
		</footer>
	</main>
*/
?>
<?php urb_get_specials(); ?>
<?php urb_get_community(); ?>
<?php urb_get_shop(); ?>
<?php urb_get_company(); ?>
<?php get_footer(); ?>