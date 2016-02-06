			<div class="beer-content">
				<?php
					/* translators: %s: Name of current page */
					the_content( sprintf(
						'Continue reading...',
						the_title( '<span class="screen-reader-text">', '</span>', false )
					) );

					wp_link_pages( array(
						'before'      => '<div class="page-links"><span class="page-links-title">Pages:</span>',
						'after'       => '</div>',
						'link_before' => '<span>',
						'link_after'  => '</span>',
						'pagelink'    => '<span class="screen-reader-text">Page </span>%',
						'separator'   => '<span class="screen-reader-text">, </span>',
					) );
				?>
<?php
/*
<?php $food_pairings = get_post_meta($post->ID, 'food_pairings'); ?>
<?php if( $food_pairings ) : ?>
				<section class="beer-food-pairings">
					<h5>Pairs well with these foods</h5>
<?php 	echo $food_pairings[0]; ?>
				</section>
<?php endif; ?>
<?php $glassware = get_post_meta($post->ID, 'glassware'); ?>
				<section class="beer-glassware">
<?php if( $glassware ) : ?>
					<h5>Ideal glassware</h5>
<?php 	echo $glassware[0]; ?>
				</section>
<?php endif; ?>
<?php $tags = get_the_terms( $post->ID, 'beer_keyword' ); ?>
<?php if( $tags ): ?>
				<section class="beer-tags">
					<h5>Tags related to this beer</h5>
					<ul>
<?php 	foreach( $tags as $tag ) : ?>
						<li class="beer-tag">
							<a href="<?php echo get_term_link( $tag ); ?>"><?php echo $tag->name; ?></a>
						</li>
<?php 	endforeach; ?>
					</ul>
				</section>
<?php endif; ?>
*/
?>
			</div>