			<footer class="page-footer" role="contentinfo">
<?php $tags = wp_get_post_tags( $post->ID ); ?>
<?php if( count($tags) > 0 ) : ?>
				<ul class="page-tags">
<?php 	foreach( $tags as $tag ) : ?>
					<li class="page-tag">
						<a href="/tags/<?php echo $tag->slug; ?>"><?php echo $tag->name; ?></a>
					</li>
<?php 	endforeach; ?>
				</ul>
<?php endif; ?>

				<section class="page-actions">
					<button class="page-share hyperlink" data-action="modal" data-target=".modal.share-modal" type="button">Share this page</button>
					<div class="modal share-modal animated fadeIn">
						<a class="shortlink" href="<?php echo wp_get_shortlink(); ?>"><?php echo str_replace('/', '/&#8203;', str_replace(stripos($_SERVER['SERVER_PROTOCOL'],'https') === true ? 'https://' : 'http://', '', wp_get_shortlink())); ?></a>
						<h5 class="menu-title">Share this page on your favorite social&nbsp;network.</h5>
						<ul class="menu">
							<li class="menu-item">
								<a class="icon facebook" href="http://www.facebook.com/sharer/sharer.php?u=<?php echo get_permalink(); ?>" data-event-action="Share" data-event-label="Facebook"><span class="icon-label">Share this on Facebook</span></a>
							</li>
							<li class="menu-item">
								<a class="icon twitter" href="https://twitter.com/intent/tweet?text=<?php echo (wp_get_shortlink()) ? wp_get_shortlink() : get_permalink(); ?>" data-event-action="Share" data-event-label="Twitter"><span class="icon-label">Share this on Twitter</span></a>
							</li>
							<li class="menu-item">
								<a class="icon google-plus" href="https://plus.google.com/share?url=<?php echo get_permalink(); ?>" data-event-action="Share" data-event-label="Google+"><span class="icon-label">Share this on Google+</span></a>
							</li>
							<li class="menu-item">
								<a class="icon email" href="mailto:?body=<?php echo get_permalink(); ?>" data-event-action="Share" data-event-label="Email"><span class="icon-label">Share this via Email</span></a>
							</li>
						</ul>
					</div>
				</section>
			</footer>