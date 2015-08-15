<?php wp_enqueue_script('kickstarter', get_stylesheet_directory_uri() . '/scripts/kickstarter.js', '1.0', true); ?>
<?php get_header(); ?>
		<header id="preliminaries" class="site-header">
			<h1 class="site-title">
				<img alt="<?php bloginfo( 'name' ); ?>" class="site-logo" src="<?php echo get_stylesheet_directory_uri(); ?>/images/logo-3-color.png" />
			</h1>
<?php
$description = get_bloginfo( 'description', 'display' );
if( $description || is_customize_preview() ) :
?>
			<p class="site-description"><?php echo $description; ?></p>
<?php endif; ?>
		</header>

<?php if( get_option('urbanrest_setting_google_plus_id') ) : ?>
		<section class="social-navigation" id="social-navigation">
			<h3>Social Links</h3>
			<ul class="menu social-menu">
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
		</section>
<?php endif; ?>
<?php get_sidebar(); ?>
<?php get_footer(); ?>
