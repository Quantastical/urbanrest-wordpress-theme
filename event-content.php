			<div class="event-content">
				<?php
					/* translators: %s: Name of current post */
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
				
<?php $tags = wp_get_post_tags( $post->ID ); ?>
<?php if( count($tags) > 0 ) : ?>
				<h5>Tags related to this post</h5>
				<ul class="event-tags">
<?php 	foreach( $tags as $tag ) : ?>
					<li class="event-tag">
						<a href="<?php echo get_term_link($tag); ?>"><?php echo $tag->name; ?></a>
					</li>
<?php 	endforeach; ?>
				</ul>
<?php endif; ?>

			</div>
