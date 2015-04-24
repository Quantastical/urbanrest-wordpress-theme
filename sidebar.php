<?php if( has_nav_menu( 'main' ) || has_nav_menu( 'social' )  ) : ?>
		<div id="navigation" class="site-navigation" role="navigation">
			<?php if( has_nav_menu( 'main' ) ) : ?>
			<nav id="main-navigation" class="main-navigation">
				<h3>Main Navigation</h3>
				<?php
					// Primary navigation menu.
					wp_nav_menu( array(
						'theme_location' => 'main'
					) );
				?>
			</nav>
			<?php endif; ?>

			<?php if( has_nav_menu( 'social' ) ) : ?>
			<nav id="social-navigation" class="social-navigation">
				<h3>Social Links</h3>
				<?php
					// Social Media navigation menu.
					wp_nav_menu( array(
						'theme_location' => 'social'
					) );
				?>
			</nav>
			<?php endif; ?>
		</div>
<?php endif; ?>
