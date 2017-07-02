<?php
/* Template Name: Kickstarter */
die('kickstarter.php');
?>
<?php get_header(); ?>
		<nav class="site-navigation" id="navigation">
			<?php if( has_nav_menu( 'kickstarter' ) ) : ?>
			<section class="main-navigation" id="main-navigation">
				<h3>Main Navigation</h3>
				<?php
					// Primary navigation menu.
					wp_nav_menu( array(
						'theme_location' => 'kickstarter'
					) );
				?>
			</section>
			<?php endif; ?>
		</nav>
<?php
// Original code for scraping the completition percentage off of Kickstarter.com
// $url = 'https://www.kickstarter.com/projects/197980077/urbanrest-brewing-company';
// $html = file_get_contents($url);
// $xmlDom = new DOMDocument('1.0', 'utf-8');
// @$xmlDom->loadHTML($html);
// $scraped = $xmlDom->getElementById('pledged')->textContent;
// $pledged = (int)ereg_replace("[^0-9]", "", $scraped);
$pledged = 29379;
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
<?php get_footer(); ?>
