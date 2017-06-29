			<footer class="user-footer" role="contentinfo">
<?php if( have_posts() ) : ?>
				<section class="user-posts">
					<ul>
<?php 	while ( have_posts() ) : the_post(); ?>
						<li>
							<a href="<?php the_permalink() ?>" rel="bookmark" title="Permanent Link: <?php the_title(); ?>"><?php the_title(); ?></a>,
							<?php the_time('d M Y'); ?> in <?php the_category('&');?>
						</li>
<?php 	endwhile; ?>
				</section>
<?php endif; ?>
				<section class="user-actions">
					<button class="user-share hyperlink" data-action="modal" data-target=".user-sharing.modal" type="button">Share this page</button>
					<ul class="user-sharing modal animated fadeIn">
						<li>
							<a class="facebook" href="https://www.facebook.com/sharer/sharer.php?u=<?php echo get_permalink(); ?>" data-event-action="Share" data-event-label="Facebook"><span>Share this on Facebook</span></a>
						</li>
						<li>
							<a class="twitter" href="https://twitter.com/intent/tweet?text=<?php echo get_permalink(); ?>" data-event-action="Share" data-event-label="Twitter"><span>Share this on Twitter</span></a>
						</li>
						<li>
							<a class="google" href="https://plus.google.com/share?url=<?php echo get_permalink(); ?>" data-event-action="Share" data-event-label="Google+"><span>Share this on Google+</span></a>
						</li>
						<li>
							<a class="email" href="mailto:?body=<?php echo get_permalink(); ?>" data-event-action="Share" data-event-label="Email"><span>Share this via Email</span></a>
						</li>
					</ul>
				</section>
			</footer>