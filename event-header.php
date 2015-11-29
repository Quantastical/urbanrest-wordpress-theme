			<header class="event-header" role="banner">
<?php if ( has_post_thumbnail() ) : ?>
<?php 	$post_thumbnail_url = wp_get_attachment_image_src( get_post_thumbnail_id($post->ID), array( 720,405 ), false, '' )[0];?>
				<figure class="event-image animated fadeIn" data-entered-viewport="animated fadeIn" style="background-image:url('<?php echo $post_thumbnail_url; ?>');">
<?php 	the_post_thumbnail(); $post_thumbnail = get_post(get_post_thumbnail_id($post->ID)); ?>
<?php 	if( $post_thumbnail->post_title || $post_thumbnail->post_excerpt || $post_thumbnail->post_content ) : ?>
					<figcaption>
<?php 		if( $post_thumbnail->post_title ) : ?>
						<div class="event-image-title"><?php echo $post_thumbnail->post_title; ?></div>
<?php 		endif; ?>
<?php 		if( $post_thumbnail->post_excerpt ) : ?>
						<div class="event-image-caption"><?php echo $post_thumbnail->post_excerpt; ?></div>
<?php 		endif; ?>
<?php 		if( $post_thumbnail->post_content ) : ?>
						<div class="event-image-description"><?php echo $post_thumbnail->post_content; ?></div>
<?php 		endif; ?>
					</figcaption>
<?php 	endif; ?>
				</figure>
<?php endif; ?>

				<?php the_title( '<h2 class="post-title">', '</h2>' ); ?>

				<div class="event-meta">
					<div class="byline">
						<?php echo get_avatar( get_the_author_meta('ID'), '96', 'http://www.urbanrestbrewing.com/wp-content/themes/urbanrest-wordpress-theme/images/default-avatar.png' ); ?>
						<address class="event-author">
							<?php the_author_posts_link(); ?>
						</address>
						<time class="event-date" datetime="<?php echo esc_attr( get_the_date( 'c' ) ); ?>">
							<?php echo esc_html( get_the_date() ); ?>
						</time>
					</div>
				</div>
			</header>
