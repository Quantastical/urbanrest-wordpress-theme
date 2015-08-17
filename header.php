<?php
$urbanrest = array();

if( is_home() || is_front_page() ) {
	$urbanrest['title'] = get_bloginfo('name');
} else if( is_category() ) {
	$urbanrest['title'] = single_cat_title('', false) . ' - ' . get_bloginfo('name');
} else if( is_single() ) {
	$urbanrest['title'] = single_post_title('', false);
} else if( is_page() ) {
	$urbanrest['title'] = get_bloginfo('name') . ': ' . single_post_title('', false);
} else {
	$urbanrest['title'] = wp_title('', true);
}
$urbanrest['description'] = get_bloginfo('description');
$urbanrest['email_address'] = get_bloginfo('admin_email');
$urbanrest['website'] = get_bloginfo('wpurl');

$urbanrest['phone_number']                  = get_option('urbanrest_setting_phone_number');
$urbanrest['fax_number']                  = get_option('urbanrest_setting_fax_number');
$urbanrest['monday_start_time']                  = get_option('urbanrest_setting_monday_start_time');
$urbanrest['monday_end_time']                  = get_option('urbanrest_setting_monday_end_time');
$urbanrest['tuesday_start_time']                  = get_option('urbanrest_setting_tuesday_start_time');
$urbanrest['tuesday_end_time']                  = get_option('urbanrest_setting_tuesday_end_time');
$urbanrest['wednesday_start_time']                  = get_option('urbanrest_setting_wednesday_start_time');
$urbanrest['wednesday_end_time']                  = get_option('urbanrest_setting_wednesday_end_time');
$urbanrest['thursday_start_time']                  = get_option('urbanrest_setting_thursday_start_time');
$urbanrest['thursday_end_time']                  = get_option('urbanrest_setting_thursday_end_time');
$urbanrest['friday_start_time']                  = get_option('urbanrest_setting_friday_start_time');
$urbanrest['friday_end_time']                  = get_option('urbanrest_setting_friday_end_time');
$urbanrest['saturday_start_time']                  = get_option('urbanrest_setting_saturday_start_time');
$urbanrest['saturday_end_time']                  = get_option('urbanrest_setting_saturday_end_time');
$urbanrest['sunday_start_time']                  = get_option('urbanrest_setting_sunday_start_time');
$urbanrest['sunday_end_time']                  = get_option('urbanrest_setting_sunday_end_time');
$urbanrest['street_address']                  = get_option('urbanrest_setting_street_address');
$urbanrest['locality']                        = get_option('urbanrest_setting_locality');
$urbanrest['region']                          = get_option('urbanrest_setting_region');
$urbanrest['postal_code']                     = get_option('urbanrest_setting_postal_code');
$urbanrest['country']                         = get_option('urbanrest_setting_country');
$urbanrest['favicon']                         = get_option('urbanrest_setting_favicon');
$urbanrest['apple_touch_icon']                = get_option('urbanrest_setting_apple_touch_icon');
$urbanrest['apple_touch_startup_image']       = get_option('urbanrest_setting_apple_touch_startup_image');
$urbanrest['apple_app_id']                    = get_option('urbanrest_setting_apple_app_id');
$urbanrest['apple_itunes_affiliate_id']       = get_option('urbanrest_setting_apple_itunes_affiliate_id');
$urbanrest['apple_app_name']                  = get_option('urbanrest_setting_apple_app_name');
$urbanrest['facebook_app_id']                 = get_option('urbanrest_setting_facebook_app_id');
$urbanrest['facebook_opengraph_image']        = get_option('urbanrest_setting_facebook_opengraph_image');
$urbanrest['facebook_opengraph_image_mime']  = get_option('urbanrest_setting_facebook_opengraph_image_mime');
$urbanrest['facebook_opengraph_image_width']  = get_option('urbanrest_setting_facebook_opengraph_image_width');
$urbanrest['facebook_opengraph_image_height'] = get_option('urbanrest_setting_facebook_opengraph_image_height');
$urbanrest['google_plus_id']                  = get_option('urbanrest_setting_google_plus_id');
$urbanrest['twitter_card_image']              = get_option('urbanrest_setting_twitter_card_image');
$urbanrest['twitter_username']                = get_option('urbanrest_setting_twitter_username');
?>
<!doctype html>
<html class="no-javascript" <?php language_attributes(); ?>>
	<head>
		<meta charset="<?php bloginfo( 'charset' ); ?>" />
		<meta http-equiv="x-ua-compatible" content="ie=edge" />

		<title><?php echo $urbanrest['title']; ?></title>

<?php if( $urbanrest['description'] ) : ?>
		<meta name="description" content="<?php echo $urbanrest['description']; ?>" />
<?php endif; ?>
		<meta name="format-detection" content="telephone=no" />
		<meta name="theme-color" content="#ff69b4" />
		<meta name="viewport" content="width=device-width, maximum-scale=1.0" />

<?php if( $urbanrest['favicon'] ) : ?>
		<link rel="icon" type="image/png" href="<?php echo $urbanrest['favicon']; ?>" />
<?php endif; ?>
<?php if( $urbanrest['apple_touch_icon'] ) : ?>
		<link rel="apple-touch-icon" href="<?php echo $urbanrest['apple_touch_icon']; ?>" />
<?php endif; ?>
<?php if( $urbanrest['apple_touch_startup_image'] ) : ?>
		<link rel="apple-touch-startup-image" href="<?php echo $urbanrest['apple_touch_startup_image']; ?>" />
<?php endif; ?>
<?php if( $urbanrest['apple_app_id'] ) : ?>
		<meta name="apple-itunes-app" content="app-id=<?php echo $urbanrest['apple_app_id']; ?>,affiliate-data=<?php echo $urbanrest['apple_itunes_affiliate_id']; ?>,app-argument=urbanrest://" />
<?php endif; ?>
		<meta name="apple-mobile-web-app-capable" content="yes" />
		<meta name="apple-mobile-web-app-status-bar-style" content="black" />
<?php if( $urbanrest['apple_app_name'] ) : ?>
		<meta name="apple-mobile-web-app-title" content="<?php echo $urbanrest['apple_app_name']; ?>" />
<?php endif; ?>

<?php if( $urbanrest['facebook_app_id'] ) : ?>
		<meta property="fb:app_id" content="<?php echo $urbanrest['facebook_app_id']; ?>" /> 
<?php endif; ?>
<?php if( $urbanrest['street_address'] ) : ?>
		<meta property="og:type" content="business.business" />
		<meta property="business:contact_data:street_address" content="<?php echo $urbanrest['street_address']; ?>" /> 
<?php endif; ?>
<?php if( $urbanrest['locality'] ) : ?>
		<meta property="business:contact_data:locality" content="<?php echo $urbanrest['locality']; ?>" /> 
<?php endif; ?>
<?php if( $urbanrest['region'] ) : ?>
		<meta property="business:contact_data:region" content="<?php echo $urbanrest['region']; ?>" /> 
<?php endif; ?>
<?php if( $urbanrest['postal_code'] ) : ?>
		<meta property="business:contact_data:postal_code" content="<?php echo $urbanrest['postal_code']; ?>" /> 
<?php endif; ?>
<?php if( $urbanrest['country'] ) : ?>
		<meta property="business:contact_data:country_name" content="<?php echo $urbanrest['country']; ?>" /> 
<?php endif; ?>
<?php if( $urbanrest['email_address'] ) : ?>
		<meta property="business:contact_data:email" content="<?php echo $urbanrest['email_address']; ?>" /> 
<?php endif; ?>
<?php if( $urbanrest['phone_number'] ) : ?>
		<meta property="business:contact_data:phone_number" content="<?php echo $urbanrest['phone_number']; ?>" /> 
<?php endif; ?>
<?php if( $urbanrest['fax_number'] ) : ?>
		<meta property="business:contact_data:fax_number" content="<?php echo $urbanrest['fax_number']; ?>" /> 
<?php endif; ?>
		<meta property="business:contact_data:website" content="<?php echo $urbanrest['website']; ?>" /> 
<?php if( $urbanrest['latitude'] && $urbanrest['longitude'] ) : ?>
		<meta property="place:location:latitude" content="<?php echo $urbanrest['latitude']; ?>" /> 
		<meta property="place:location:longitude" content="<?php echo $urbanrest['longitude']; ?>" />
<?php endif; ?>
<?php if( $urbanrest['monday_start_time'] && $urbanrest['monday_end_time'] ) : ?>
		<meta property="business:hours:day" content="monday" />
		<meta property="business:hours:start" content="<?php echo $urbanrest['monday_start_time']; ?>" />
		<meta property="business:hours:end" content="<?php echo $urbanrest['monday_end_time']; ?>" />
<?php endif; ?>
<?php if( $urbanrest['tuesday_start_time'] && $urbanrest['tuesday_end_time'] ) : ?>
		<meta property="business:hours:day" content="tuesday" />
		<meta property="business:hours:start" content="<?php echo $urbanrest['tuesday_start_time']; ?>" />
		<meta property="business:hours:end" content="<?php echo $urbanrest['tuesday_end_time']; ?>" />
<?php endif; ?>
<?php if( $urbanrest['wednesday_start_time'] && $urbanrest['wednesday_end_time'] ) : ?>
		<meta property="business:hours:day" content="wednesday" />
		<meta property="business:hours:start" content="<?php echo $urbanrest['wednesday_start_time']; ?>" />
		<meta property="business:hours:end" content="<?php echo $urbanrest['wednesday_end_time']; ?>" />
<?php endif; ?>
<?php if( $urbanrest['thursday_start_time'] && $urbanrest['thursday_end_time'] ) : ?>
		<meta property="business:hours:day" content="thursday" />
		<meta property="business:hours:start" content="<?php echo $urbanrest['thursday_start_time']; ?>" />
		<meta property="business:hours:end" content="<?php echo $urbanrest['thursday_end_time']; ?>" />
<?php endif; ?>
<?php if( $urbanrest['friday_start_time'] && $urbanrest['friday_end_time'] ) : ?>
		<meta property="business:hours:day" content="friday" />
		<meta property="business:hours:start" content="<?php echo $urbanrest['friday_start_time']; ?>" />
		<meta property="business:hours:end" content="<?php echo $urbanrest['friday_end_time']; ?>" />
<?php endif; ?>
<?php if( $urbanrest['saturday_start_time'] && $urbanrest['saturday_end_time'] ) : ?>
		<meta property="business:hours:day" content="saturday" />
		<meta property="business:hours:start" content="<?php echo $urbanrest['saturday_start_time']; ?>" />
		<meta property="business:hours:end" content="<?php echo $urbanrest['saturday_end_time']; ?>" />
<?php endif; ?>
<?php if( $urbanrest['sunday_start_time'] && $urbanrest['sunday_end_time'] ) : ?>
		<meta property="business:hours:day" content="sunday" />
		<meta property="business:hours:start" content="<?php echo $urbanrest['sunday_start_time']; ?>" />
		<meta property="business:hours:end" content="<?php echo $urbanrest['sunday_end_time']; ?>" />
<?php endif; ?>
<?php if( $urbanrest['title'] ) : ?>
		<meta property="og:title" content="<?php echo $urbanrest['title']; ?>" />
<?php endif; ?>
<?php if( $urbanrest['description'] ) : ?>
		<meta property="og:description" content="<?php echo $urbanrest['description']; ?>" />
<?php endif; ?>
<?php if( $urbanrest['facebook_opengraph_image'] ) : ?>
		<meta property="og:image" content="<?php echo $urbanrest['facebook_opengraph_image']; ?>" />
		<meta property="og:image:type" content="<?php echo $urbanrest['facebook_opengraph_image_mime']; ?>" />
		<meta property="og:image:width" content="<?php echo $urbanrest['facebook_opengraph_image_width']; ?>" />
		<meta property="og:image:height" content="<?php echo $urbanrest['facebook_opengraph_image_height']; ?>" />
<?php endif; ?>
		<meta property="og:updated_time" content="<?php echo get_the_modified_date('c'); ?>" />

<?php if( $urbanrest['google_plus_id'] ) : ?>
		<link href="https://plus.google.com/<?php echo $urbanrest['google_plus_id']; ?>" rel="publisher" />
<?php endif; ?>

		<meta name="twitter:card" content="summary" />
<?php if( $urbanrest['twitter_username'] ) : ?>
		<meta name="twitter:site" content="@<?php echo $urbanrest['twitter_username']; ?>" />
		<meta name="twitter:creator" content="@<?php echo $urbanrest['twitter_username']; ?>" />
<?php endif; ?>
		<meta name="twitter:url" content="<?php echo the_permalink(); ?>" />
<?php if( $urbanrest['title'] ) : ?>
		<meta name="twitter:title" content="<?php echo $urbanrest['title']; ?>" />
<?php endif; ?>
<?php if( $urbanrest['description'] ) : ?>
		<meta name="twitter:description" content="<?php echo $urbanrest['description']; ?>" />
<?php endif; ?>
<?php if( $urbanrest['twitter_card_image'] ) : ?>
		<meta name="twitter:image" content="<?php echo $urbanrest['twitter_card_image']; ?>" />
<?php endif; ?>

		<link type="text/plain" rel="author" href="<?php echo get_site_url(); ?>/humans.txt" />
		<?php wp_head(); ?>
	</head>

	<body <?php body_class(); ?>>
		<!--[if lt IE 8]>
		<p class="browser-upgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
		<![endif]-->

		<a class="skip-link screen-reader-text hidden" href="#main"><span>Skip to content</span></a>