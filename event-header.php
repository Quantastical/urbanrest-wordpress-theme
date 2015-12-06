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

				<?php the_title( '<h2 class="post-title" itemprop="name">', '</h2>' ); ?>

				<div class="event-meta">
<?php $event = get_metadata('post', $post->ID); ?>
<?php if( $event['start_datetime'] ) : ?>
					<time>
						<meta itemprop="startDate" content="<?php echo $event['start_datetime'][0]; ?>" />
						<?php echo date('l, F jS, Y g:i A', strtotime($event['start_datetime'][0]) ); ?>
<?php 	if( $event['end_datetime'] ) : ?>
						<meta itemprop="endDate" content="<?php echo $event['end_datetime'][0]; ?>" />
						&ndash; <?php echo date('g:i A', strtotime($event['end_datetime'][0]) ); ?>
<?php 	endif; ?>
					</time>
<?php endif; ?>
<?php if( $event['location'] ) : ?>
					<div itemprop="location" itemscope itemtype="http://schema.org/Place">
<?php 	if( $event['venue_website'] ) : ?>
						<a itemprop="url" href="<?php echo $event['venue_website'][0]; ?>"><?php echo $event['location'][0]; ?></a>
<?php 	else : ?>
						<?php echo $event['location'][0]; ?>
<?php 	endif; ?>
<?php 	if( $event['address'] ) : ?>
						<div itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
							<!-- TODO: user proper address props
							<span itemprop="addressLocality">Warren</span>,
							<span itemprop="addressRegion">MI</span>
							-->
							<?php echo $event['address'][0]; ?>
						</div>
<?php 	endif; ?>
					</div>
<?php endif; ?>
				</div>
			</header>
