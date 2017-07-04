<?php global $ajax; ?>
<?php if(!isset($ajax)) : ?>
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
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />

		<link rel="author" href="humans.txt" />
<?php if( get_option('urbanrest_setting_favicon') ) : ?>
		<link rel="icon" type="image/x-icon" href="<?php echo get_option('urbanrest_setting_favicon'); ?>" />
<?php endif; ?>
<?php if( get_option('urbanrest_setting_apple_touch_icon') ) : ?>
		<link rel="apple-touch-icon" type="image/png" href="<?php echo get_option('urbanrest_setting_apple_touch_icon'); ?>" />
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
		<meta property="og:url" content="<?php echo is_home() ? get_site_url() : get_permalink(); ?>" />
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
<?php $daysofweek = array('monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'); ?>
<?php for( $i = 0; $i < 7; $i++ ) : ?>
<?php 	$startTime = get_option('urbanrest_setting_' . $daysofweek[$i] . '_start_time'); ?>
<?php 	$endTime = get_option('urbanrest_setting_' . $daysofweek[$i] . '_end_time'); ?>
<?php 	if( $startTime || $endTime ) : ?>
		<meta property="business:hours:day" content="<?php echo $daysofweek[$i]; ?>" />
		<meta property="business:hours:start" content="<?php echo $startTime ? $startTime : '00:00'; ?>" />
		<meta property="business:hours:end" content="<?php echo $endTime ? $endTime : '23:59'; ?>" />
<?php 	endif; ?>
<?php endfor;?>
		<meta property="og:title" content="<?php echo urb_pre_get_document_title(); ?>" />
<?php $excerpt = get_the_excerpt() ?> 
<?php if( $excerpt ) : ?>
		<meta property="og:description" content="<?php echo $excerpt; ?>" />
<?php elseif( get_bloginfo('description') ) : ?>
		<meta property="og:description" content="<?php echo get_bloginfo('description'); ?>" />
<?php endif; ?>
<?php $image = ($post) ? wp_get_attachment_image_src( get_post_thumbnail_id($post->ID), array(1200,630) ) : false; ?>
<?php if( $image & !is_home() ) : ?>
		<meta property="og:image" content="<?php echo $image[0]; ?>" />
<?php elseif( get_option('urbanrest_setting_facebook_opengraph_image') ) : ?>
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
		<style id="critical-styles" type="text/css" media="screen">html { background: black; } body { opacity: 0; }</style>
		<style id="qr-code" type="text/css" media="print">.page-footer:before {content: url(http://chart.googleapis.com/chart?cht=qr&chs=200x200&choe=UTF-8&chld=H&chl=<?php echo urlencode( str_ireplace('URB.beer', 'QR.URB.beer', wp_get_shortlink()) ); ?>);}</style>
	</head>

	<body <?php body_class('site'); ?>>
		<!--[if lt IE 8]>
		<p class="browser-upgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
		<![endif]-->

		<script type="application/ld+json">
		{
			"@context" : "http://schema.org",
			"@type"    : "Organization",
			"name"     : "<?php bloginfo('name'); ?>",
			"url"      : "<?php echo get_bloginfo('wpurl'); ?>",
			"sameAs"   : [
<?php
$social = wp_nav_menu(array(
	'theme_location'  => 'social',
	'echo'            => false,
));
if (preg_match_all('#(<a [^<]+</a>)#', $social, $matches)) {
	$hrefpat = '/href *= *(([\"\']?)([^\"\' ]+)\2)/';
	$i = 0;
	$length = count($matches[0]);
	foreach ($matches[0] as $link) {
		if (preg_match($hrefpat, $link, $hrefs)) {
			$href = $hrefs[1];
		}

		echo "\t\t\t\t{$href}" . ($i == $length - 1 ? "\n" : ",\n");

		$i++;
	}
}
?>
			]
		}
		</script>

		<header class="site-header row active" id="preliminaries">
			<h1 class="site-title">
<?php if( get_option('urbanrest_setting_logo') ) : ?>
				<img alt="<?php bloginfo('name'); ?> Logo" class="site-logo" src="<?php echo get_option('urbanrest_setting_logo'); ?>" />
<?php endif; ?>
				<span class="site-name"><?php bloginfo('name'); ?></span>
			</h1>

<?php if( get_bloginfo( 'description', 'display' ) || is_customize_preview() ) : ?>
			<p class="site-description"><?php echo get_bloginfo( 'description', 'display' ); ?></p>
<?php endif; ?>
			<p><a class="skip-link screen-reader-text hidden" href="#main"><span>Skip to content</span></a>
		
			<nav class="site-navigation<?php echo (!is_home()) ? ' stuck-top' : ''; ?>">
<?php if( has_nav_menu('main-menu') ) : ?>
				<section class="main-navigation">
					<h3>Site Links</h3>
<?php
wp_nav_menu( array(
	'theme_location' => 'main-menu',
	'container'      => '',
	'menu_class'     => 'main-menu',
) );
?>
				</section>
<?php endif; ?>

				<section class="page-navigation">
					<h3>Page Links</h3>
<?php if( has_nav_menu('navbar') ) : ?>
<?php
wp_nav_menu( array(
	'theme_location' => 'navbar',
	'container'      => '',
	'items_wrap'     => '<ul class="navbar" id="menu-navbar">%3$s<li class="main-menu menu-item menu-item-type-custom menu-item-object-custom menu-item-294"><div id="menu-toggle"><div id="hamburger"><span></span><span></span><span></span></div><div id="cross"><span></span><span></span></div></div></li></ul>',
	'menu_class'     => 'navbar',
) );
?>
<?php endif; ?>
				</section>

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
	'link_before'     => '<span class="menu-label">',
	'link_after'      => '</span>',
	'items_wrap'      => '<ul id="%1$s" class="%2$s">'
	                   . '%3$s'
	                   . '</ul>',
	'depth'           => 0,
	'walker'          => ''
));
?>
				</section>
<?php endif; ?>
			</nav>
		</header>

		<section class="site-posts col-xs-12">
			<h3>Featured News &amp; Events</h3>
<?php
$locations = get_nav_menu_locations();
$menu = get_term( $locations['featured'], 'nav_menu' );
$featured = wp_get_nav_menu_items($menu->term_id);

if( $featured == false || count($featured) == 0 ) {
	$featured_args = array(
		'posts_per_page' => 1,
		'orderby'        => 'date',
		'order'          => 'DESC'
	);
	$featured = get_posts( $featured_args );
}

$first = true;
?>
			<ul class="latest-posts" id="latest-posts">
<?php foreach ( $featured as $featured_post ) : ?>
<?php 	if($featured_post->post_type == 'nav_menu_item') : ?>
<?php 		$featured_post = get_post($featured_post->object_id); ?>
<?php 	endif; ?>
<?php 	setup_postdata( $GLOBALS['post'] =& $featured_post ); ?>
				<li class="blog-post<?php echo ($first) ? ' active' : ' next'; $first = false; ?>" data-post-id="<?php echo $featured_post->ID; ?>">
					<a href="<?php the_permalink(); ?>">
<?php 	if ( has_post_thumbnail() ) : ?>
						<span class="blog-post-image" style="background-image:url('<?php echo wp_get_attachment_image_src( get_post_thumbnail_id($featured_post->ID), array( 720,405 ), false, '' )[0]; ?>');">
							<?php the_post_thumbnail(); ?>
						</span>
<?php 	endif; ?>
						<h4><?php the_title(); ?></h4>
					</a>
					<div class="blog-post-intro">
						<?php the_excerpt(); ?>
					</div>
				</li>
<?php break; ?>
<?php endforeach; ?>
<?php wp_reset_postdata(); ?>
			</ul>
		</section>
<?php endif; ?>