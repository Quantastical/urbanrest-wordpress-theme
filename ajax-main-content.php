<main class="<?php echo $post->post_type; ?> row around-xs" id="<?php echo basename( get_permalink( $post->ID ) ); ?>">
	<article id="<?php echo $post->post_type; ?>-<?php the_ID(); ?>" <?php post_class('col-xs-11 col-sm-9 col-md-7'); ?>>
<?php get_template_part( $post->post_type, 'header' ); ?>
<?php get_template_part( $post->post_type, 'content' ); ?>
<?php get_template_part( $post->post_type, 'footer' ); ?>
	</article>
</main>