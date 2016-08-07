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
					<!--
					<h3 class="page-like hyperlink" data-action="modal" data-target=".page-liking.modal">Like this page</h3>
					<ul class="page-liking modal">
						<li>
							<a class="facebook" href="http://www.facebook.com/sharer/sharer.php?u=<?php echo get_permalink(); ?>" onclick="javacript:share(this);" title="Share this on Facebook" data-event-action="Share" data-event-label="Facebook"><span>Like this on Facebook</span></a>
						</li>
						<li>
							<a class="twitter" href="https://twitter.com/intent/tweet?text=<?php echo get_permalink(); ?>" onclick="javascript:share(this);" title="Share this on Twitter" data-event-action="Share" data-event-label="Twitter"><span>Favorite this on Twitter</span></a>
						</li>
					</ul>
					-->

					<button class="page-share hyperlink" data-action="modal" data-target=".modal.share-modal" type="button">Share this page</button>
					<div class="modal share-modal animated fadeIn">
						<output class="shortlink" onfocus="this.select();"><?php echo wp_get_shortlink(); ?></output>
						<h5 class="menu-title">Share this page on your favorite social network.</h5>
						<ul class="menu">
							<li class="menu-item">
								<a class="icon facebook" href="http://www.facebook.com/sharer/sharer.php?u=<?php echo get_permalink(); ?>" onclick="javacript:share(this);" data-event-action="Share" data-event-label="Facebook"><span class="icon-label">Share this on Facebook</span></a>
							</li>
							<li class="menu-item">
								<a class="icon twitter" href="https://twitter.com/intent/tweet?text=<?php echo get_permalink(); ?>" onclick="javascript:share(this);" data-event-action="Share" data-event-label="Twitter"><span class="icon-label">Share this on Twitter</span></a>
							</li>
							<li class="menu-item">
								<a class="icon google-plus" href="https://plus.google.com/share?url=<?php echo get_permalink(); ?>" onclick="javascript:share(this);" data-event-action="Share" data-event-label="Google+"><span class="icon-label">Share this on Google+</span></a>
							</li>
							<li class="menu-item">
								<a class="icon email" href="mailto:?body=<?php echo get_permalink(); ?>" data-event-action="Share" data-event-label="Email"><span class="icon-label">Share this via Email</span></a>
							</li>
						</ul>
					</div>

					<!--
					<h3 class="page-comments hyperlink" data-action="modal" data-target=".page-commenting.modal">View Comments</h3>
					<div class="page-commenting modal"></div>
					-->
				</section>
			</footer>