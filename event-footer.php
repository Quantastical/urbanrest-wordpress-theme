			<footer class="event-footer" role="contentinfo">
				<section class="event-actions">
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

					<button class="event-share hyperlink" data-action="modal" data-target=".post-sharing.modal" type="button">Share this page</button>
					<ul class="event-sharing modal animated fadeIn">
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
					<h3 class="event-comments hyperlink" data-action="modal" data-target=".post-commenting.modal">View Comments</h3>
					<div class="event-commenting modal"></div>
					-->
				</section>
			</footer>