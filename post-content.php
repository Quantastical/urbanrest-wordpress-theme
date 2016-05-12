			<div class="page-content post-content">
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
			</div>
<?php
/*
<?php $tags = wp_get_post_tags( $post->ID ); ?>
<?php if( count($tags) > 0 ) : ?>
			<div class="post-tags">
				<h5>Tags related to this post</h5>
				<ul>
<?php 	foreach( $tags as $tag ) : ?>
					<li class="post-tag">
						<a href="<?php echo get_term_link( $tag ); ?>"><?php echo $tag->name; ?></a>
					</li>
<?php 	endforeach; ?>
				</ul>
			</div>
<?php endif; ?>
*/
?>