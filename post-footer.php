			<footer class="page-footer post-footer" role="contentinfo">
				<section class="post-actions">
					<button class="page-share post-share hyperlink" data-action="modal" data-target=".modal.share-modal" type="button">Share this page</button>
					<div class="modal share-modal animated fadeIn">
						<a class="shortlink" href="<?php echo wp_get_shortlink(); ?>"><?php echo str_replace('/', '/&#8203;', str_replace(stripos($_SERVER['SERVER_PROTOCOL'],'https') === true ? 'https://' : 'http://', '', wp_get_shortlink())); ?></a>
						<h5 class="menu-title">Share this page on your favorite social&nbsp;network.</h5>
						<ul class="menu">
							<li class="menu-item">
								<a class="icon facebook" href="http://www.facebook.com/sharer/sharer.php?u=<?php echo get_permalink(); ?>" data-event-action="Share" data-event-label="Facebook"><span class="icon-label">Share this on Facebook</span></a>
							</li>
							<li class="menu-item">
								<a class="icon twitter" href="https://twitter.com/intent/tweet?text=<?php echo get_permalink(); ?>" data-event-action="Share" data-event-label="Twitter"><span class="icon-label">Share this on Twitter</span></a>
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