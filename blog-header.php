			<header class="page-header" role="banner">
				<a href="<?php the_permalink(); ?>">
<?php if ( has_post_thumbnail() ) : ?>
					<span class="blog-post-image" style="background-image:url('<?php echo wp_get_attachment_image_src( get_post_thumbnail_id($post->ID), array( 720,405 ), false, '' )[0]; ?>');">
						<?php the_post_thumbnail(); ?>
					</span>
<?php endif; ?>
					<h2><?php the_title(); ?></h2>
				</a>
			</header>
