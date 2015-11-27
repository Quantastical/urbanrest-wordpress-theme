			<header class="beer-header" role="banner">
<?php if ( has_post_thumbnail() ) : ?>
<?php 	$post_thumbnail_url = wp_get_attachment_image_src( get_post_thumbnail_id($post->ID), array( 420, 420 ), false, '' )[0];?>
				<figure class="beer-image animated fadeIn" data-entered-viewport="animated fadeIn">
<?php 	the_post_thumbnail(); $post_thumbnail = get_post(get_post_thumbnail_id($post->ID)); ?>
<?php 	if( $post_thumbnail->post_title || $post_thumbnail->post_excerpt || $post_thumbnail->post_content ) : ?>
					<figcaption class="hidden">
<?php 		if( $post_thumbnail->post_title ) : ?>
						<div class="beer-image-title"><?php echo $post_thumbnail->post_title; ?></div>
<?php 		endif; ?>
<?php 		if( $post_thumbnail->post_excerpt ) : ?>
						<div class="beer-image-caption"><?php echo $post_thumbnail->post_excerpt; ?></div>
<?php 		endif; ?>
<?php 		if( $post_thumbnail->post_content ) : ?>
						<div class="beer-image-description"><?php echo $post_thumbnail->post_content; ?></div>
<?php 		endif; ?>
					</figcaption>
<?php 	endif; ?>
				</figure>
<?php endif; ?>

				<?php the_title( '<h2 class="beer-title">', '</h2>' ); ?>

				<div class="beer-meta">
					<div class="beer-rating">
						<h5>
							Overall Rating
							<sup class="annotation" id="annotation-rating">
								<a class="annotation-link" href="#citation-rating">*</a>
							</sup>
						</h5>
						<div data-beer-id="<?php echo $post->ID; ?>" data-overall-rating="<?php echo urb_get_average_rating( $post->ID ); ?>" data-user-rating="<?php echo urb_get_user_rating( $post->ID ); ?>" itemprop="aggregateRating" itemscope itemtype="http://schema.org/AggregateRating">
							Rated <span itemprop="ratingValue"><?php echo urb_get_average_rating( $post->ID ); ?></span>/5
							based on <span itemprop="reviewCount"><?php echo count( urb_get_ratings($post->ID) ); ?></span> customer reviews
						</div>
					</div>
<?php $styles = get_the_terms( $post->ID, 'style' ); ?>
<?php if( $styles ): ?>
					<div class="beer-style row">
						<p class="col-xs-4 col-sm-2">Style</p>
						<p class="col-xs-8 col-sm-10">
<?php 	foreach( $styles as $style ) : ?>
							<a href="<?php echo get_term_link( $style ); ?>"><?php echo $style->name; ?></a>
<?php 	endforeach; ?>
						</p>
					</div>
<?php endif; ?>
					<div class="beer-profile">
						<dl class="row">
<?php $alcohol = get_post_meta($post->ID, 'alcohol'); ?>
<?php if( $alcohol ) : ?>
							<dt class="col-xs-4 col-sm-2">Alcohol</dt>
							<dd class="col-xs-8 col-sm-4">
								<a href="<?php echo get_permalink( get_page_by_path( 'characteristics-of-beer' ) ); ?>#alcohol"><?php echo $alcohol[0]; ?>% <abbr title="Alcohol By Volume">ABV</abbr></a>
								<span class="label label-danger">Very Heavy</span>
							</dd>
<?php endif; ?>
<?php $bitterness = get_post_meta($post->ID, 'bitterness'); ?>
<?php if( $bitterness ) : ?>
							<dt class="col-xs-4 col-sm-2">Bitterness</dt>
							<dd class="col-xs-8 col-sm-4">
								<a href="<?php echo get_permalink( get_page_by_path( 'characteristics-of-beer' ) ); ?>#bitterness"><?php echo $bitterness[0]; ?> <abbr title="International Bittering Units">IBUs</abbr></a>
								<span class="label label-warning">Bitter</span>
							</dd>
<?php endif; ?>
<?php $gravity = get_post_meta($post->ID, 'gravity'); ?>
<?php if( $gravity ) : ?>
							<dt class="col-xs-4 col-sm-2">Gravity</dt>
							<dd class="col-xs-8 col-sm-4">
								<a href="<?php echo get_permalink( get_page_by_path( 'characteristics-of-beer' ) ); ?>#gravity"><?php echo $gravity[0]; ?> <abbr title="Original Gravity">OG</abbr>/<abbr title="Starting Gravity">SG</abbr></a>
								<span class="label label-danger">Very Dense</span>
							</dd>
<?php endif; ?>
<?php $color = get_post_meta($post->ID, 'color'); ?>
<?php if( $color ) : ?>
							<dt class="col-xs-4 col-sm-2">Color</dt>
							<dd class="col-xs-8 col-sm-4">
								<a href="<?php echo get_permalink( get_page_by_path( 'characteristics-of-beer' ) ); ?>#color"><?php echo $color[0]; ?> <abbr title="Standard Reference Method">SRM</abbr>/<abbr title="Lovibond">&deg;L</abbr></a>
								<span class="label label-deep-gold">Deep Gold</span>
							</dd>
<?php endif; ?>
						</dl>
					</div>
				</div>
			</header>
