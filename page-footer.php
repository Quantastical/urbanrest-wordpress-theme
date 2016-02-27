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

					<button class="page-share hyperlink" data-action="modal" data-target=".page-sharing.modal" type="button">Share this page</button>
					<ul class="page-sharing modal animated fadeIn">
						<li>
							<input class="shortlink" type="text" value="http://URB.beer<?php echo wp_get_shortlink(); ?>" onfocus="this.select();" />
						</li>
						<li>
							<a class="facebook" href="http://www.facebook.com/sharer/sharer.php?u=<?php echo get_permalink(); ?>" onclick="javacript:share(this);" data-event-action="Share" data-event-label="Facebook"><span>Share this on Facebook</span></a>
						</li>
						<li>
							<a class="twitter" href="https://twitter.com/intent/tweet?text=<?php echo get_permalink(); ?>" onclick="javascript:share(this);" data-event-action="Share" data-event-label="Twitter"><span>Share this on Twitter</span></a>
						</li>
						<li>
							<a class="google" href="https://plus.google.com/share?url=<?php echo get_permalink(); ?>" onclick="javascript:share(this);" data-event-action="Share" data-event-label="Google+"><span>Share this on Google+</span></a>
						</li>
						<li>
							<a class="email" href="mailto:?body=<?php echo get_permalink(); ?>" data-event-action="Share" data-event-label="Email"><span>Share this via Email</span></a>
						</li>
					</ul>

					<!--
					<h3 class="page-comments hyperlink" data-action="modal" data-target=".page-commenting.modal">View Comments</h3>
					<div class="page-commenting modal"></div>
					-->
				</section>
			</footer>