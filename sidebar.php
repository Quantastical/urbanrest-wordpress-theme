		<nav class="site-navigation" id="navigation">
			<?php if( has_nav_menu( 'main' ) ) : ?>
			<section class="main-navigation" id="main-navigation">
				<h3>Main Navigation</h3>
				<?php
					// Primary navigation menu.
					wp_nav_menu( array(
						'theme_location' => 'main'
					) );
				?>
			</section>
			<?php endif; ?>
		</nav>
