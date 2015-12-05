<aside class="site-company row" id="company" itemscope itemtype="http://schema.org/Brewery">
	<header class="col-xs-12">
		<h2>About Us</h2>
	</header>

	<section class="site-team col-xs-12">
		<header>
			<h4>Meet the <abbr title="Urbanrest Brewing">URB</abbr>&nbsp;Team</h4>
		</header>
<?php
wp_nav_menu(array(
	'theme_location' => 'team',
	'menu_class' => 'people',
	'walker' => new Urbanrest_Team_Menu_Walker_Nav_Menu
));
?>
	</section>

	<section class="site-location col-xs-12 col-sm-6">
		<header>
			<h3>Come By Our Brewery</h3>
			<h4 itemprop="name">
				<img itemprop="logo" alt="<?php echo bloginfo('name'); ?>" src="<?php echo get_stylesheet_directory_uri(); ?>/images/logo-3-color-inverted.png" />
			</h4>
		</header>

		<div class="business-hours">
			<h5>Business Hours</h5>
			<dl class="row">
<?php foreach( array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday') as $day ) : ?>
<?php 	if( urb_get_business_hours($day) ) : ?>
				<dt class="col-xs-6">
					<span><?php echo $day; ?></span>
				</dt>
				<dd class="col-xs-6">
					<meta itemprop="openingHours" content="<?php echo urb_get_business_hours($day, "schema.org"); ?>" />
					<span><?php echo urb_get_business_hours($day); ?></span>
				</dd>
<?php 	endif; ?>
<?php endforeach; ?>
			</dl>
			<p class="status">Taproom is currently <em class="closed">Closed</em></p>
		</div>

<?php if( get_option('urbanrest_setting_phone_number') ) : ?>
		<p class="company-telephone">
			<a class="btn btn-primary" href="tel:+1-<?php echo urb_telephone_format( get_option('urbanrest_setting_phone_number'), "$1-$2-$3" ); ?>">
				<span class="btn-label">Give Us A Call</span>
				<span class="btn-content" itemprop="telephone"><?php echo urb_telephone_format( get_option('urbanrest_setting_phone_number') ); ?></span>
			</a>
		</p>
<?php endif; ?>

		<p class="company-url">
			<a class="btn" href="http://UrbanrestBrewing.com">
				<span class="btn-label">Online, Anywhere, Anytime</span>
				<span class="btn-text" itemprop="url">UrbanrestBrewing.com</span>
			</a>
		</p>
	</section>

	<section class="site-contact col-xs-12 col-sm-6">
		<header>
			<h4>@UrbanrestBeer on Social Media</h4>
		</header>

<?php
$menu_locations = get_nav_menu_locations();
$menu = wp_get_nav_menu_object( $menu_locations['social'] );
$menu_items = wp_get_nav_menu_items($menu->term_id);
wp_nav_menu(array(
	'theme_location' => 'social',
	'container'      => '',
	'menu_class'     => 'social-menu',
	'link_before'    => '<span class="btn-label">',
	'link_after'     => '</span>',
	'items_wrap'     => '<ul id="%1$s" class="%2$s" style="width:' . ( 3 * ceil(count($menu_items) / 2) ) . 'em">%3$s</ul>',
));
?>
<?php echo do_shortcode('[form post_id="324" class="row contact-form" title="Stay Connected"]'); ?>
		<section class="legal">
			<a href="<?php echo get_permalink( get_page_by_path( 'privacy' ) ); ?>">Learn about how we protect your privacy</a>
		</section>
<?php $test2 = '
		<form action="/wp-content/themes/urbanrest-wordpress-theme/api/contact.php" class="row contact-form" method="post" target="_blank">
			<h5 class="col-xs-12">Stay Connected</h5>

			<div class="field col-xs-6">
				<label for="contact_first_name">First Name</label>
				<input id="contact_first_name" name="first_name" placeholder="First Name" type="text" value="<?php echo $GLOBALS[current_user]->user_firstname; ?>" />
			</div>
			<div class="field col-xs-6">
				<label for="contact_last_name">Last Name</label>
				<input id="contact_last_name" name="last_name" placeholder="Last Name" type="text" value="<?php echo $GLOBALS[current_user]->user_lastname; ?>" />
			</div>
			<div class="field col-xs-12">
				<label for="contact_email_address">Email Address</label>
				<input id="contact_email_address" name="email_address" placeholder="Email Address" required="required" type="email" value="<?php echo $GLOBALS[current_user]->user_email; ?>" />
			</div>
			<div class="field col-xs-12">
				<label for="contact_message">Message</label>
				<textarea id="contact_message" name="message" placeholder="<?php echo urb_get_message_placeholder(); ?>" maxlength="150"></textarea>
			</div>
			<div class="option col-xs-12">
				<input id="contact_newsletter" name="newsletter" type="checkbox"<?php echo (get_the_author_meta( urb_newsletter, $GLOBALS[current_user]->ID )) ?  checked="checked" : ?> />
				<label for="contact_newsletter">Notify me of beer releases and news</label>
			</div>
			<div style="position: absolute; left: -5000px;">
				<input name="b_2743a01f70e7d0f105d6558cf_2c945e0b1a" tabindex="-1" type="text" value="" />
			</div>
			<div class="submit col-xs-12">
				<button class="btn btn-primary" id="contact_submit" name="submit" type="submit" value="Submit">
					<span class="btn-label">Send Message</span>
					<span class="btn-content" itemprop="email"><?php echo get_option(admin_email); ?></span>
				</button>
			</div>
		</form>
'; ?>

<?php $test = '
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
'; ?>
	</section>

<?php if( get_option('urbanrest_setting_latitude') && get_option('urbanrest_setting_longitude') ) : ?>
	<section class="site-map col-xs-12" itemscope itemprop="hasMap" itemtype="http://schema.org/Map" data-latitude="<?php echo get_option('urbanrest_setting_latitude'); ?>" data-longitude="<?php echo get_option('urbanrest_setting_longitude'); ?>">
		<div itemprop="geo" itemscope itemtype="http://schema.org/GeoCoordinates">
			<meta itemprop="latitude" content="<?php echo get_option('urbanrest_setting_latitude'); ?>" />
			<meta itemprop="longitude" content="<?php echo get_option('urbanrest_setting_longitude'); ?>" />
		</div>
		<h3><a class="map-link" href="http://www.google.com/maps">Locate On Map</a></h3>
		<div class="map-container" itemprop="mapType" href="http://schema.org/VenueMap">
			<link href="" itemprop="url" />
<?php
$menu_locations = get_nav_menu_locations();
$menu = wp_get_nav_menu_object( $menu_locations['map'] );
$menu_items = wp_get_nav_menu_items($menu->term_id);
wp_nav_menu(array(
	'theme_location' => 'map',
	'container'      => '',
	'menu_class'     => 'map-menu',
	'link_before'    => '<span class="btn-label">',
	'link_after'     => '</span>',
	'items_wrap'     => '<ul id="%1$s" class="%2$s" style="width:' . ( 3 * ceil(count($menu_items) / 2) ) . 'em">%3$s</ul>',
));
?>
<!--
			<ul class="map-actions">
				<li><a class="apple-maps" href="http://maps.apple.com/?daddr=">Apple Maps</a></li>
				<li><a class="google-maps" href="#">Google Maps</a></li>
				<li><a class="foursquare" href="#">FourSquare</a></li>
				<li><a class="mapquest" href="#">MapQuest</a></li>
				<li><a class="yellow-pages" href="#">Yellow Pages</a></li>
			</ul>
-->
		</div>
	</section>
<?php endif; ?>
</aside>