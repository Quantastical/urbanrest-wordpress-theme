		<footer id="colophon" class="site-footer" role="contentinfo">
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

			<p>Copyright &copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?></p>
		</footer>

		<?php wp_footer(); ?>
	</body>
</html>
