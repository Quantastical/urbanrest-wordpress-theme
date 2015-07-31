<!doctype html>
<html <?php language_attributes(); ?>>
	<head>
		<meta charset="<?php bloginfo( 'charset' ); ?>" />
		<meta name="viewport" content="width=device-width, maximum-scale=1.0" />
		<?php wp_head(); ?>
	</head>

	<body <?php body_class(); ?>>
			<a class="skip-link screen-reader-text hidden" href="#main"><span>Skip to content</span></a>

			<header id="preliminaries" class="site-header" role="banner">
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

			<?php get_sidebar(); ?>