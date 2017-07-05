<aside class="site-company row" id="contact" itemscope itemtype="http://schema.org/Brewery">
	<header class="col-xs-12">
		<h2>About Urbanrest Brewing Company</h2>
	</header>

	<section class="site-location col-xs-12 col-sm-6">
		<header>
			<h3>Come By Our Brewery</h3>
			<h4 itemprop="name">
				<img itemprop="logo" alt="<?php echo bloginfo('name'); ?> Logo" src="<?php echo get_stylesheet_directory_uri(); ?>/images/logo-1-color-inverted.png" />
				<?php echo bloginfo('name'); ?>
			</h4>
			<div itemprop="geo" itemscope itemtype="http://schema.org/GeoCoordinates">
				<meta itemprop="latitude" content="<?php echo get_option('urbanrest_setting_latitude'); ?>" />
				<meta itemprop="longitude" content="<?php echo get_option('urbanrest_setting_longitude'); ?>" />
			</div>
		</header>

		<div class="business-hours">
			<h5>Taproom</h5>
			<dl class="row">
<?php foreach( array('Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday') as $day ) : ?>
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
			<a class="btn" href="<?php echo get_bloginfo('wpurl'); ?>" itemprop="url">
				<span class="btn-label">Online: Anywhere, Anytime.</span>
				<span class="btn-text" >Urbanrest.com</span>
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
	'link_before'    => '<span class="menu-label">',
	'link_after'     => '</span>',
	'items_wrap'     => '<ul id="%1$s" class="%2$s">%3$s</ul>',
));
?>
<?php echo do_shortcode('[form post_id="11" class="row contact-form" title="Stay Connected"]'); ?>
		<p class="legal">
			<a href="<?php echo get_permalink( get_page_by_path( 'privacy' ) ); ?>">Learn about how we protect your privacy</a>
		</p>
	</section>

<?php if( get_option('urbanrest_setting_latitude') && get_option('urbanrest_setting_longitude') ) : ?>
	<section class="site-map col-xs-12" itemprop="hasMap" itemscope itemtype="http://schema.org/Map" data-latitude="<?php echo get_option('urbanrest_setting_latitude'); ?>" data-longitude="<?php echo get_option('urbanrest_setting_longitude'); ?>">
		<h3><a class="map-link" href="#map" data-event-action="Map" data-event-label="Toggle">Locate On Map</a></h3>
		<div class="map-container" id="map">
		</div>
	</section>
<?php endif; ?>
</aside>