<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * e.g., it puts together the home page when no home.php file exists.
 */
?>
<?php get_header(); ?>
	<main id="home" class="site-home">
		<section id="menu">
			<h2>Handcrafted Beer</h2>

			<div id="taps">
				<h3>Current Taps</h3>
				<?php if( get_field('taps') ): ?>
					<?php the_field('taps'); ?>
				<?php endif; ?>
			</div>

			<div id="growlers">
				<h3>Growler Fills</h3>
				<?php if( get_field('growlers') ): ?>
					<?php the_field('growlers'); ?>
				<?php endif; ?>
			</div>

			<div id="deck">
				<h3>On-Deck</h3>
				<?php if( get_field('deck') ): ?>
					<?php the_field('deck'); ?>
				<?php endif; ?>
			</div>
		</section>
	</main>
<?php get_footer(); ?>
