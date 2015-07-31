<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * e.g., it puts together the home page when no home.php file exists.
 */
$url = 'https://www.kickstarter.com/projects/197980077/urbanrest-brewing-company';
$html = file_get_contents($url);
$xmlDom = new DOMDocument('1.0', 'utf-8');
@$xmlDom->loadHTML($html);
$scraped = $xmlDom->getElementById('pledged')->textContent;
$pledged = (int)ereg_replace("[^0-9]", "", $scraped);
$completion = number_format($pledged / 25000 * 100, 2);
wp_enqueue_script( 'kickstarter', get_stylesheet_directory_uri() . '/scripts/kickstarter.js', '1.0', true);
?>
<?php get_header(); ?>
	<main id="kickstarter" class="site-kickstarter" role="main">
		<?php if ( have_posts() ) : ?>
			<?php if ( is_home() && !is_front_page() ) : ?>
				<header>
					<h1 class="page-title screen-reader-text"><?php single_post_title(); ?></h1>
				</header>
			<?php endif; ?>

			<?php
			// Start the loop.
			while ( have_posts() ) : the_post();

				/*
				 * Include the Post-Format-specific template for the content.
				 * If you want to override this in a child theme, then include a file
				 * called content-___.php (where ___ is the Post Format name) and that will be used instead.
				 */
				get_template_part( 'content', get_post_format() );

			// End the loop.
			endwhile;

			// Previous/next page navigation.
			the_posts_pagination( array(
				'prev_text'          => 'Previous page',
				'next_text'          => 'Next page',
				'before_page_number' => '<span class="meta-nav screen-reader-text">Page </span>',
			) );

		// If no content, include the "No posts found" template.
		else :
			get_template_part( 'content', 'none' );

		endif;
		?>

		<nav class="share">
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
			<a class="twitter" href="https://twitter.com/intent/tweet?text=Help+Launch+@UrbanrestBeer+via+@Kickstarter+and+get+rewarded!+http://TinyURL.com/URBKickstarter+#Ferndale+#Michigan+#Beer" onclick="javascript:share(this);" title="Share this on Twitter" data-event-action="Share" data-event-label="Twitter"><span>Twitter</span></a>
			<a class="google" href="https://plus.google.com/share?url=http://TinyURL.com/URBKickstarter" onclick="javascript:share(this);" title="Share this on Google+" data-event-action="Share" data-event-label="Google+"><span>Google+</span></a>
			<a class="email" href="mailto:?subject=Help%20Kickstart%20Urbanrest%20Brewing%20Company&body=Zach%20is%20opening%20up%20his%20brewery,%20Urbanrest%20Brewing%20Company,%20in%20Ferndale,%20Michigan.%0D%0A%0D%0ACheck%20out%20this%20video%20to%20see%20what%20they're%20all%20about%20and%20look%20at%20the%20rewards.%0D%0A%0D%0Ahttp://TinyURL.com/URBKickstarter" title="Share this via Email" data-event-action="Share" data-event-label="Email"><span>Email</span></a>
		</nav>

		
		<div class="progress">
			<h4>Project Progress</h4>
			<div id="progress">
				<span id="pledged" class="hidden" style="width:<?=$completion?$completion:0;?>%"></span>
			</div>
		</div>

		<nav class="kickstart">
			<a class="rewards" href="https://www.kickstarter.com/projects/197980077/urbanrest-brewing-company">Shirts, Glasses &amp; Rewards</a>
			<a class="donate" href="https://www.kickstarter.com/projects/197980077/urbanrest-brewing-company/pledge/new?clicked_reward=false">Back This Project</a>
		</nav>

		<div class="subscribe" id="mc_embed_signup">
			<h4>Stay Informed</h4>
			<!-- MailChimp Embed Code -->
			<form action="//urbanrestbrewing.us11.list-manage.com/subscribe/post?u=2743a01f70e7d0f105d6558cf&amp;id=2c945e0b1a" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate="novalidate">
				<div id="mc_embed_signup_scroll">
					<div class="mc-field-group">
						<label for="mce-FNAME">First Name</label>
						<input id="mce-FNAME" name="FNAME" placeholder="First Name" type="text" value="" />
					</div>
					<div class="mc-field-group">
						<label for="mce-LNAME">Last Name</label>
						<input id="mce-LNAME" name="LNAME" placeholder="Last Name" type="text" value="" />
					</div>
					<div class="mc-field-group">
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
					<div class="clear">
						<button id="mc-embedded-subscribe" name="subscribe" type="submit" value="Subscribe">Sign Up Free</button>
					</div>
				</div>
			</form>
		</div>
		</div>
	</main>
<?php get_footer(); ?>
