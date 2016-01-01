<!doctype html>
<html class="no-javascript" <?php language_attributes(); ?>>
	<head>
		<meta charset="<?php bloginfo( 'charset' ); ?>" />
		<meta http-equiv="x-ua-compatible" content="ie=edge" />

<?php if( get_bloginfo('description') ) : ?>
		<meta name="description" content="<?php echo get_bloginfo('description'); ?>" />
<?php endif; ?>
		<meta name="robots" content="NOODP,NOYDIR" />
		<meta name="format-detection" content="telephone=no" />
		<meta name="theme-color" content="#ff69b4" />
		<meta name="viewport" content="width=device-width, maximum-scale=1.0" />

<?php if( get_option('urbanrest_setting_favicon') ) : ?>
		<link rel="icon" type="image/png" href="<?php echo get_option('urbanrest_setting_favicon'); ?>" />
<?php endif; ?>
<?php if( get_option('urbanrest_setting_apple_touch_icon') ) : ?>
		<link rel="apple-touch-icon" href="<?php echo get_option('urbanrest_setting_apple_touch_icon'); ?>" />
<?php endif; ?>
<?php if( get_option('urbanrest_setting_apple_touch_startup_image') ) : ?>
		<link rel="apple-touch-startup-image" href="<?php echo get_option('urbanrest_setting_apple_touch_startup_image'); ?>" />
<?php endif; ?>
<?php if( get_option('apple_app_id') && get_option('apple_itunes_affiliate_id') ) : ?>
		<meta name="apple-itunes-app" content="app-id=<?php echo get_option('apple_app_id'); ?>,affiliate-data=<?php echo get_option('apple_itunes_affiliate_id'); ?>,app-argument=urbanrest://" />
<?php endif; ?>
		<meta name="apple-mobile-web-app-capable" content="yes" />
		<meta name="apple-mobile-web-app-status-bar-style" content="black" />
<?php if( get_option('apple_app_name') ) : ?>
		<meta name="apple-mobile-web-app-title" content="<?php echo get_option('apple_app_name'); ?>" />
<?php endif; ?>

<?php if( get_option('facebook_app_id') ) : ?>
		<meta property="fb:app_id" content="<?php echo get_option('facebook_app_id'); ?>" /> 
<?php endif; ?>
<?php if( get_option('urbanrest_setting_street_address') ) : ?>
		<meta property="og:type" content="business.business" />
		<meta property="business:contact_data:street_address" content="<?php echo get_option('urbanrest_setting_street_address'); ?>" /> 
<?php endif; ?>
<?php if( get_option('urbanrest_setting_locality') ) : ?>
		<meta property="business:contact_data:locality" content="<?php echo get_option('urbanrest_setting_locality'); ?>" /> 
<?php endif; ?>
<?php if( get_option('urbanrest_setting_region') ) : ?>
		<meta property="business:contact_data:region" content="<?php echo get_option('urbanrest_setting_region'); ?>" /> 
<?php endif; ?>
<?php if( get_option('urbanrest_setting_postal_code') ) : ?>
		<meta property="business:contact_data:postal_code" content="<?php echo get_option('urbanrest_setting_postal_code'); ?>" /> 
<?php endif; ?>
<?php if( get_option('urbanrest_setting_country') ) : ?>
		<meta property="business:contact_data:country_name" content="<?php echo get_option('urbanrest_setting_country'); ?>" /> 
<?php endif; ?>
<?php if( get_bloginfo('admin_email') ) : ?>
		<meta property="business:contact_data:email" content="<?php echo get_bloginfo('admin_email'); ?>" /> 
<?php endif; ?>
<?php if( get_option('urbanrest_setting_phone_number') ) : ?>
		<meta property="business:contact_data:phone_number" content="<?php echo get_option('urbanrest_setting_phone_number'); ?>" /> 
<?php endif; ?>
<?php if( get_option('urbanrest_setting_fax_number') ) : ?>
		<meta property="business:contact_data:fax_number" content="<?php echo get_option('urbanrest_setting_fax_number'); ?>" /> 
<?php endif; ?>
		<meta property="business:contact_data:website" content="<?php echo get_bloginfo('wpurl'); ?>" /> 
<?php if( get_option('urbanrest_setting_latitude') && get_option('urbanrest_setting_longitude') ) : ?>
		<meta property="place:location:latitude" content="<?php echo get_option('urbanrest_setting_latitude'); ?>" /> 
		<meta property="place:location:longitude" content="<?php echo get_option('urbanrest_setting_longitude'); ?>" />
<?php endif; ?>
<?php if( get_option('urbanrest_setting_monday_start_time') && get_option('urbanrest_setting_monday_end_time') ) : ?>
		<meta property="business:hours:day" content="monday" />
		<meta property="business:hours:start" content="<?php echo get_option('urbanrest_setting_monday_start_time'); ?>" />
		<meta property="business:hours:end" content="<?php echo get_option('urbanrest_setting_monday_end_time'); ?>" />
<?php endif; ?>
<?php if( get_option('urbanrest_setting_tuesday_start_time') && get_option('urbanrest_setting_tuesdat_end_time') ) : ?>
		<meta property="business:hours:day" content="tuesday" />
		<meta property="business:hours:start" content="<?php echo get_option('urbanrest_setting_tuesday_start_time'); ?>" />
		<meta property="business:hours:end" content="<?php echo get_option('urbanrest_setting_tuesday_end_time'); ?>" />
<?php endif; ?>
<?php if( get_option('urbanrest_setting_wednesday_start_time') && get_option('urbanrest_setting_wednesday_end_time') ) : ?>
		<meta property="business:hours:day" content="wednesday" />
		<meta property="business:hours:start" content="<?php echo get_option('urbanrest_setting_wednesday_start_time'); ?>" />
		<meta property="business:hours:end" content="<?php echo get_option('urbanrest_setting_wednesday_end_time'); ?>" />
<?php endif; ?>
<?php if( get_option('urbanrest_setting_thursday_start_time') && get_option('urbanrest_setting_thursday_end_time') ) : ?>
		<meta property="business:hours:day" content="thursday" />
		<meta property="business:hours:start" content="<?php echo get_option('urbanrest_setting_thursday_start_time'); ?>" />
		<meta property="business:hours:end" content="<?php echo get_option('urbanrest_setting_thursday_end_time'); ?>" />
<?php endif; ?>
<?php if( get_option('urbanrest_setting_friday_start_time') && get_option('urbanrest_setting_friday_end_time') ) : ?>
		<meta property="business:hours:day" content="friday" />
		<meta property="business:hours:start" content="<?php echo get_option('urbanrest_setting_friday_start_time'); ?>" />
		<meta property="business:hours:end" content="<?php echo get_option('urbanrest_setting_friday_end_time'); ?>" />
<?php endif; ?>
<?php if( get_option('urbanrest_setting_saturday_start_time') && get_option('urbanrest_setting_saturday_end_time') ) : ?>
		<meta property="business:hours:day" content="saturday" />
		<meta property="business:hours:start" content="<?php echo get_option('urbanrest_setting_saturday_start_time'); ?>" />
		<meta property="business:hours:end" content="<?php echo get_option('urbanrest_setting_saturday_end_time'); ?>" />
<?php endif; ?>
<?php if( get_option('urbanrest_setting_sunday_start_time') && get_option('urbanrest_setting_sunday_end_time') ) : ?>
		<meta property="business:hours:day" content="sunday" />
		<meta property="business:hours:start" content="<?php echo get_option('urbanrest_setting_sunday_start_time'); ?>" />
		<meta property="business:hours:end" content="<?php echo get_option('urbanrest_setting_sunday_end_time'); ?>" />
<?php endif; ?>
		<meta property="og:title" content="<?php echo urb_pre_get_document_title(); ?>" />
<?php if( get_bloginfo('description') ) : ?>
		<meta property="og:description" content="<?php echo get_bloginfo('description'); ?>" />
<?php endif; ?>
<?php if( get_option('urbanrest_setting_facebook_opengraph_image') ) : ?>
		<meta property="og:image" content="<?php echo get_option('urbanrest_setting_facebook_opengraph_image'); ?>" />
		<meta property="og:image:type" content="<?php echo get_option('urbanrest_setting_facebook_opengraph_image_mime'); ?>" />
		<meta property="og:image:width" content="<?php echo get_option('urbanrest_setting_facebook_opengraph_image_width'); ?>" />
		<meta property="og:image:height" content="<?php echo get_option('urbanrest_setting_facebook_opengraph_image_height'); ?>" />
<?php endif; ?>
		<meta property="og:updated_time" content="<?php echo get_the_modified_date('c'); ?>" />

<?php if( get_option('google_plus_id') ) : ?>
		<link href="https://plus.google.com/<?php echo get_option('google_plus_id'); ?>" rel="publisher" />
<?php endif; ?>

		<meta name="twitter:card" content="summary" />
<?php if( get_option('twitter_username') ) : ?>
		<meta name="twitter:site" content="@<?php echo get_option('twitter_username'); ?>" />
		<meta name="twitter:creator" content="@<?php echo get_option('twitter_username'); ?>" />
<?php endif; ?>
		<meta name="twitter:url" content="<?php echo the_permalink(); ?>" />
		<meta name="twitter:title" content="<?php echo urb_pre_get_document_title(); ?>" />
<?php if( get_bloginfo('description') ) : ?>
		<meta name="twitter:description" content="<?php echo get_bloginfo('description'); ?>" />
<?php endif; ?>
<?php if( get_option('urbanrest_setting_twitter_card_image') ) : ?>
		<meta name="twitter:image" content="<?php echo get_option('urbanrest_setting_twitter_card_image'); ?>" />
<?php endif; ?>

		<link type="text/plain" rel="author" href="<?php echo get_site_url(); ?>/humans.txt" />
		<?php wp_head(); ?>
	</head>

	<body <?php body_class('site'); ?>>
		<!--[if lt IE 8]>
		<p class="browser-upgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
		<![endif]-->

		<header class="site-header row" id="preliminaries">
			<h1 class="site-title">
				<img alt="<?php bloginfo('name'); ?>" class="site-logo" src="<?php echo get_stylesheet_directory_uri(); ?>/images/logo-3-color.png" />
			</h1>

<?php if( get_bloginfo( 'description', 'display' ) || is_customize_preview() ) : ?>
			<p class="site-description"><?php echo get_bloginfo( 'description', 'display' ); ?></p>
<?php endif; ?>
			<p><a class="skip-link screen-reader-text hidden" href="#main"><span>Skip to content</span></a>

			<form action="/search" autocomplete="off" class="site-search" id="search" method="get">
				<label class="search-label" for="q">Search Urbanrest.com for&hellip;</label>
				<input class="search-input" id="q" name="q" required="required" type="search" />
				<button class="search-submit" type="submit"><span class="btn-label">Find Results</span></button>
			</form>
		
			<nav class="site-navigation">
<?php if( has_nav_menu('main') ) : ?>
				<section class="main-navigation">
					<h3>Site Links</h3>
<?php
wp_nav_menu( array(
	'theme_location' => 'main',
	'container'      => '',
	'menu_class'     => 'main-menu',
) );
?>
				</section>
<?php endif; ?>

<?php if( has_nav_menu('social') ) : ?>
				<section class="social-navigation">
					<h3>Social Links</h3>
<?php
wp_nav_menu(array(
	'theme_location'  => 'social',
	'menu'            => '',
	'container'       => '',
	'container_class' => '',
	'container_id'    => '',
	'menu_class'      => 'social-menu',
	'menu_id'         => '',
	'echo'            => true,
	'fallback_cb'     => 'wp_page_menu',
	'before'          => '',
	'after'           => '',
	'link_before'     => '<span class="btn-label">',
	'link_after'      => '</span>',
	'items_wrap'      => '<ul id="%1$s" class="%2$s">'
	                   . '%3$s'
	                   . '<li class="search menu-item menu-item-type-custom menu-item-object-custom"><a title="Search Urbanrest.com" href="#search"><span class="btn-label">Search</span></a></li>'
	                   . '</ul>',
	'depth'           => 0,
	'walker'          => ''
));
?>
				</section>
<?php endif; ?>
			</nav>
		</header>