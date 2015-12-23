			<header class="post-header" role="banner">
<?php if ( has_post_thumbnail() ) : ?>
<?php 	$post_thumbnail_url = wp_get_attachment_image_src( get_post_thumbnail_id($post->ID), array( 720,405 ), false, '' )[0];?>
				<figure class="post-image animated fadeIn" data-entered-viewport="animated fadeIn" style="background-image:url('<?php echo $post_thumbnail_url; ?>');">
<?php 	the_post_thumbnail(); $post_thumbnail = get_post(get_post_thumbnail_id($post->ID)); ?>
<?php 	if( $post_thumbnail->post_title || $post_thumbnail->post_excerpt || $post_thumbnail->post_content ) : ?>
					<figcaption>
<?php 		if( $post_thumbnail->post_title ) : ?>
						<div class="post-image-title"><?php echo $post_thumbnail->post_title; ?></div>
<?php 		endif; ?>
<?php 		if( $post_thumbnail->post_excerpt ) : ?>
						<div class="post-image-caption"><?php echo $post_thumbnail->post_excerpt; ?></div>
<?php 		endif; ?>
<?php 		if( $post_thumbnail->post_content ) : ?>
						<div class="post-image-description"><?php echo $post_thumbnail->post_content; ?></div>
<?php 		endif; ?>
					</figcaption>
<?php 	endif; ?>
				</figure>
<?php endif; ?>

				<?php the_title( '<h2 class="post-title" itemprop="name">', '</h2>' ); ?>

				<div class="post-meta">
<?php $categories = get_the_terms( $post->ID, 'product_category' ); ?>
<?php if( $categories ): ?>
					<div class="category">
						<p>Categorized as:</p>
						<p itemprop="category">
<?php 	foreach( $categories as $index => $category ) : ?>
							<a href="<?php echo get_term_link( $category ); ?>"><?php echo $category->name; ?></a>
<?php 		if($index < count($categories)-1) : ?>
							<span class="fa fa-angle-right"></span>
<?php 		endif; ?>
<?php 	endforeach; ?>
						</p>
					</div>
<?php endif; ?>
<?php $base_price = get_post_meta($post->ID, 'base_price'); ?>
<?php if( $base_price ) : ?>
					<div class="purchase">
						<strong>$<?php echo $base_price[0]; ?></strong>
					</div>
<?php endif; ?>
				</div>
			</header>
