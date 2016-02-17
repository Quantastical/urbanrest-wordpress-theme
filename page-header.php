			<header class="page-header" role="banner">
<?php
/*
<?php if ( has_post_thumbnail() ) : ?>
<?php 	$post_thumbnail_url = wp_get_attachment_image_src( get_post_thumbnail_id($post->ID), array( 420, 420 ), false, '' )[0];?>
				<figure class="page-image animated fadeIn" data-entered-viewport="animated fadeIn">
<?php 	the_post_thumbnail(); $post_thumbnail = get_post(get_post_thumbnail_id($post->ID)); ?>
<?php 	if( $post_thumbnail->post_title || $post_thumbnail->post_excerpt || $post_thumbnail->post_content ) : ?>
					<figcaption class="hidden">
<?php 		if( $post_thumbnail->post_title ) : ?>
						<div class="page-image-title"><?php echo $post_thumbnail->post_title; ?></div>
<?php 		endif; ?>
<?php 		if( $post_thumbnail->post_excerpt ) : ?>
						<div class="page-image-caption"><?php echo $post_thumbnail->post_excerpt; ?></div>
<?php 		endif; ?>
<?php 		if( $post_thumbnail->post_content ) : ?>
						<div class="page-image-description"><?php echo $post_thumbnail->post_content; ?></div>
<?php 		endif; ?>
					</figcaption>
<?php 	endif; ?>
				</figure>
<?php endif; ?>
*/
?>

				<?php the_title( '<h2 class="page-title">', '</h2>' ); ?>
			</header>
