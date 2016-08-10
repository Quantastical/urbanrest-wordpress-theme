			<footer class="page-footer post-footer" role="contentinfo">
				<section class="post-actions">
					<!--
					<h3 class="post-like hyperlink" data-action="modal" data-target=".post-liking.modal">Like this page</h3>
					<ul class="post-liking modal">
						<li>
							<a class="facebook" href="http://www.facebook.com/sharer/sharer.php?u=<?php echo get_permalink(); ?>" onclick="javacript:share(this);" title="Share this on Facebook" data-event-action="Share" data-event-label="Facebook"><span>Like this on Facebook</span></a>
						</li>
						<li>
							<a class="twitter" href="https://twitter.com/intent/tweet?text=<?php echo get_permalink(); ?>" onclick="javascript:share(this);" title="Share this on Twitter" data-event-action="Share" data-event-label="Twitter"><span>Favorite this on Twitter</span></a>
						</li>
					</ul>
					-->

					<button class="page-share post-share hyperlink" data-action="modal" data-target=".modal.share-modal" type="button">Share this page</button>
					<div class="modal share-modal animated fadeIn">
						<a class="shortlink" href="<?php echo wp_get_shortlink(); ?>"><?php echo str_replace(stripos($_SERVER['SERVER_PROTOCOL'],'https') === true ? 'https://' : 'http://', '', wp_get_shortlink()); ?></a>
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
					<h3 class="post-comments hyperlink" data-action="modal" data-target=".post-commenting.modal">View Comments</h3>
					<div class="post-commenting modal"></div>
					-->
				</section>
			</footer>