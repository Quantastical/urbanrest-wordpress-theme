<?php
$url = 'https://www.kickstarter.com/projects/197980077/urbanrest-brewing-company';
$html = file_get_contents($url);
$xmlDom = new DOMDocument('1.0', 'utf-8');
@$xmlDom->loadHTML($html);
$scraped = $xmlDom->getElementById('pledged')->textContent;
$pledged = (int)ereg_replace("[^0-9]", "", $scraped);
$completion = min(100, number_format($pledged / 25000 * 100, 2));
?>
		<div id="kickstarter" class="site-kickstarter">
			<article class="page">
				<header>
					<h2>Urbanrest's Kickstarter</h2>
				</header>

				<section>
						<iframe data-entered-viewport="animated fadeInUp" height="375" src="https://www.kickstarter.com/projects/197980077/urbanrest-brewing-company/widget/video.html" width="500" style="height: 375px;"></iframe>

						<header>
							<h2 data-entered-viewport="animated bounceIn">
								<a href="http://TinyURL.com/URBKickstarter">
									<span style="color: #ffffff;">Support</span>
									<span style="color: #91c859;">Us&nbsp;on</span>
									<br />
									<span style="color: #ffffff;">Kick</span>
									<span style="color: #91c859;">starter</span>
								</a>
							</h2>

							<nav class="kickstart">
								<a class="rewards" data-entered-viewport="animated fadeInLeft" href="https://www.kickstarter.com/projects/197980077/urbanrest-brewing-company">Shirts, Glasses &amp; Rewards</a>
								<a class="donate" data-entered-viewport="animated fadeInRight" href="https://www.kickstarter.com/projects/197980077/urbanrest-brewing-company/pledge/new?clicked_reward=false">Back This Project</a>
							</nav>
						</header>
				</section>

				<section>
					<header>
						<h3>Back Our Project, Get Rewarded</h3>
					</header>

					<nav class="share" data-entered-viewport="animated fadeInLeft">
						<script type="text/javascript">
						var share = function(a){
							event.preventDefault();
							var $link = jQuery(a);
							ga( 'send',
							{
								'hitType'       : 'event',
								'eventCategory' : window.location.pathname,
								'eventAction'   : $link.data('event-action'),
								'eventLabel'    : $link.data('event-label')
							} );
							window.open(a.href,'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
							return false;
						};
						</script>
						<h4>Share this Video</h4>
						<a class="facebook" href="http://www.facebook.com/sharer/sharer.php?u=http://TinyURL.com/URBKickstarter" onclick="javacript:share(this);" title="Share this on Facebook" data-event-action="Share" data-event-label="Facebook"><span>Facebook</span></a>
						<a class="twitter" href="https://twitter.com/intent/tweet?text=Help+Launch+%40UrbanrestBeer+via+@Kickstarter+and+get+rewarded!+http://TinyURL.com/URBKickstarter+%23Ferndale+%23Michigan+%23Beer" onclick="javascript:share(this);" title="Share this on Twitter" data-event-action="Share" data-event-label="Twitter"><span>Twitter</span></a>
						<a class="google" href="https://plus.google.com/share?url=http://TinyURL.com/URBKickstarter" onclick="javascript:share(this);" title="Share this on Google+" data-event-action="Share" data-event-label="Google+"><span>Google+</span></a>
						<a class="email" href="mailto:?subject=Help%20Kickstart%20Urbanrest%20Brewing%20Company&amp;body=Zach%20is%20opening%20up%20his%20brewery,%20Urbanrest%20Brewing%20Company,%20in%20Ferndale,%20Michigan.%0D%0A%0D%0ACheck%20out%20this%20video%20to%20see%20what%20they're%20all%20about%20and%20look%20at%20the%20rewards.%0D%0A%0D%0Ahttp://TinyURL.com/URBKickstarter" title="Share this via Email" data-event-action="Share" data-event-label="Email"><span>Email</span></a>
					</nav>

					<div class="progress" data-entered-viewport="animated fadeInRight">
						<h4>Project Progress</h4>
						<a href="http://tinyurl.com/urbkickstarter" id="progress">
							<span id="pledged"></span>
							<script type="text/javascript">
							jQuery(function($){
								$('#pledged').removeClass('hidden').css('width', '<?=$completion?$completion:0;?>%');
							});
							</script>
						</a>
					</div>
<?php if( $completion === 100 ) : ?>
					<div class="success" data-entered-viewport="animated bounceIn">
						<strong>GOAL REACHED!!</strong>
					</div>
<?php endif; ?>
				</section>
			</article>
		</div>

		<div id="community">
			<h2 data-entered-viewport="animated fadeIn">Community</h2>

			<div id="blog">
				<h3>Latest Posts</h3>
				<ul class="latest-posts row around-xs around-sm around-md around-lg center-md">
<?php
$args = array( 'posts_per_page' => 5, 'orderby' => 'date', 'order', 'DESC' );

$myposts = get_posts( $args );
foreach ( $myposts as $post ) : setup_postdata( $post ); ?>
					<li class="blog-post col-xs-6 col-sm-5 col-md-5 col-lg-4" data-entered-viewport="animated flipInX">
						<a href="<?php the_permalink(); ?>">
<?php if ( has_post_thumbnail() ) : ?>
<?php $post_thumbnail_url = wp_get_attachment_image_src( get_post_thumbnail_id($post->ID), array( 720,405 ), false, '' )[0];?>
							<span class="blog-post-image" style="background-image:url('<?php echo $post_thumbnail_url; ?>');">
								<?php the_post_thumbnail(); ?>
							</span>
<?php endif; ?>
							<h4><?php the_title(); ?></h4>
						</a>
						<div class="blog-post-intro">
							<?php the_content(); ?>
						</div>
					</li>
<?php endforeach; 
wp_reset_postdata();
?>
				</ul>
			</div>

			<div class="subscribe row" id="mc_embed_signup">
				<header class="col-xs-12 col-sm-6" data-entered-viewport="animated slideInLeft">
					<h4>Stay Connected!</h4>
					<p>
						It's nice to see you stopped by.
						Sign up to be notified of future events, or follow us on your favorite social network:
					</p>
					<ul class="social-menu">
<?php 	if( get_option('urbanrest_setting_facebook_username') ) : ?>
						<li class="facebook">
							<a class="color-facebook" href="https://facebook.com/<?php echo get_option('urbanrest_setting_facebook_username'); ?>" rel="external">
								<span class="fa fa-facebook-square"></span>
								<span class="label">Facebook</span>
							</a>
						</li>
<?php 	endif; ?>
<?php 	if( get_option('urbanrest_setting_google_plus_id') ) : ?>
						<li class="google google-plus">
							<a class="color-google" href="https://plus.google.com/<?php echo get_option('urbanrest_setting_google_plus_id'); ?>" rel="external publisher">
								<span class="fa fa-google-plus-square"></span>
								<span class="label">Google+</span>
							</a>
						</li>
<?php 	endif; ?>
<?php 	if( get_option('urbanrest_setting_instagram_username') ) : ?>
						<li class="instagram">
							<a class="color-instagram" href="https://instagram.com/<?php echo get_option('urbanrest_setting_instagram_username'); ?>" rel="external">
								<span class="fa fa-instagram"></span>
								<span class="label">Instagram</span>
							</a>
						</li>
<?php 	endif; ?>
<?php 	if( get_option('urbanrest_setting_twitter_username') ) : ?>
						<li class="twitter">
							<a class="color-twitter" href="https://twitter.com/<?php echo get_option('urbanrest_setting_twitter_username'); ?>" rel="external">
								<span class="fa fa-twitter-square"></span>
								<span class="label">Twitter</span>
							</a>
						</li>
<?php 	endif; ?>
					</ul>
				</header>

				<!-- MailChimp Embed Code -->
				<form action="//urbanrestbrewing.us11.list-manage.com/subscribe/post?u=2743a01f70e7d0f105d6558cf&amp;id=2c945e0b1a" data-entered-viewport="animated slideInRight" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="col-xs-12 col-sm-6 validate" target="_blank" novalidate="novalidate">
					<div id="mc_embed_signup_scroll">
						<div class="mc-field-group">
							<label for="mce-FNAME">First Name</label>
							<input id="mce-FNAME" name="FNAME" placeholder="First Name" type="text" value="" />
						</div>
						<div class="mc-field-group">
							<label for="mce-LNAME">Last Name</label>
							<input id="mce-LNAME" name="LNAME" placeholder="Last Name" type="text" value="" />
						</div>
						<div class="mc-field-group mc-email-group">
							<label for="mce-EMAIL">Email Address</label>
							<input class="required email" id="mce-EMAIL" name="EMAIL" placeholder="Email" required="required" type="email" value="" />
							<div class="help hidden">Valid email required</div>
						</div>
						<div id="mce-responses" class="clear">
							<div class="response" id="mce-error-response" style="display:none"></div>
							<div class="response" id="mce-success-response" style="display:none"></div>
						</div>
						<!-- Bot Prevention -->
						<div style="position: absolute; left: -5000px;">
							<input name="b_2743a01f70e7d0f105d6558cf_2c945e0b1a" tabindex="-1" type="text" value="">
						</div>
						<div class="mc-submit">
							<button class="btn btn-primary" id="mc-embedded-subscribe" name="subscribe" type="submit" value="Subscribe">Sign Up Free</button>
						</div>
					</div>
				</form>
			</div>
		</div>

		<footer id="colophon" class="site-footer">
			<h2><?php bloginfo('name'); ?></h2>
			<?php if( has_nav_menu( 'footer' ) ) : ?>
			<nav id="footer-navigation" class="footer-navigation" role="navigation">
				<h3>Footer Navigation</h3>
				<?php
					// Primary navigation menu.
					wp_nav_menu( array(
						'menu_class'     => 'nav-menu',
						'theme_location' => 'footer',
					) );
				?>
			</nav>
			<?php endif; ?>

			<p>Copyright &copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?></p>
		</footer>

		<div class="font-preload" style="opacity: 0;">
			<span style="font-family: 'Roboto'; font-weight: 100;"></span>
			<span style="font-family: 'Roboto'; font-weight: 300;"></span>
			<span style="font-family: 'Roboto'; font-weight: 400;"></span>
			<span style="font-family: 'Rock Salt';"></span>
		</div>

		<?php wp_footer(); ?>
	</body>
</html>
