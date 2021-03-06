<?php global $ajax; ?>
<?php if(!isset($ajax)) : ?>
		<footer class="site-footer" id="colophon" itemscope itemtype="http://schema.org/Brewery">
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

			<p>
				Copyright &copy;
				<time datetime="2015" itemprop="foundingDate"><?php echo (date('Y') > 2015) ? '2015 &ndash; ' . date('Y') : date('Y'); ?></time>
			</p>
				<strong itemprop="legalName"><?php bloginfo('name'); ?></strong>
				<address class="site-address" itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
<?php if( get_option('urbanrest_setting_street_address') ) : ?>
					<span itemprop="streetAddress"><?php echo get_option('urbanrest_setting_street_address'); ?></span>
<?php endif; ?>
<?php if( get_option('urbanrest_setting_locality') ) : ?>
					<span itemprop="addressLocality"><?php echo get_option('urbanrest_setting_locality'); ?></span>
<?php endif; ?>
<?php if( get_option('urbanrest_setting_region') ) : ?>
					<span itemprop="addressRegion"><?php echo get_option('urbanrest_setting_region'); ?></span>
<?php endif; ?>
<?php if( get_option('urbanrest_setting_postal_code') ) : ?>
					<span itemprop="postalCode"><?php echo get_option('urbanrest_setting_postal_code'); ?></span>
<?php endif; ?>
<?php if( get_option('urbanrest_setting_country') ) : ?>
					<span itemprop="addressCountry"><?php echo get_option('urbanrest_setting_country'); ?></span>
<?php endif; ?>
				</address>
		</footer>

		<div class="font-preload">
<?php echo urb_get_fonts_for_preloading(); ?>
		</div>

		<noscript id="deferred-styles">
			<!--<link rel="stylesheet" type="text/css" href="<?php echo get_stylesheet_directory_uri() . '/style.min.css'; ?>" />-->
		</noscript>
		<script>
		/*
			var loadDeferredStyles = function() {
				var addStylesNode = document.getElementById('deferred-styles');
				var replacement = document.createElement('div');
				replacement.innerHTML = addStylesNode.textContent;
				document.body.appendChild(replacement)
				addStylesNode.parentElement.removeChild(addStylesNode);
			};
			var raf = requestAnimationFrame || mozRequestAnimationFrame || webkitRequestAnimationFrame || msRequestAnimationFrame;
      if (raf) raf(function() { window.setTimeout(loadDeferredStyles, 0); });
      else window.addEventListener('load', loadDeferredStyles);
		*/
    
	    var html = document.documentElement;
			if(html && html.classList){
				html.classList.remove('no-javascript');
				html.classList.add('javascript');
			}

			window._URB = {
				'url' : '<?php echo str_replace( "'", "\'", admin_url('admin-ajax.php') ); ?>',
				'nonce' : '<?php echo str_replace( "'", "\'", wp_create_nonce('admin-ajax') ); ?>',
				'googleAnalyticsTrackingID' : '<?php echo str_replace( "'", "\'", get_option('google_analytics_tracking_id') ); ?>',
				'googleBrowserMapApiKey' : '<?php echo str_replace( "'", "\'", get_option('google_browser_api_key') ); ?>'
			};
		</script>
		<script type="text/javascript" src="<?php echo get_stylesheet_directory_uri() . '/script.min.js'; ?>"></script>
		<?php wp_footer(); ?>
	</body>
</html>
<?php endif; ?>