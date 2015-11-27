<?php
$tap_args = array(
	'order'          => 'ASC',
	'orderby'        => 'menu_order',
	'posts_per_page' => -1, // no pagination
	'post_type'      => 'beer',
	'post_status'    => 'on_tap',
);
$taps = get_posts($tap_args);

$deck_args = array(
	'posts_per_page' => -1, // no pagination
	'post_type'      => 'beer',
	'post_status'    => 'on_deck',
);
$decks = get_posts($deck_args);
?>
	<aside class="site-specials row" id="specials">
		<header class="col-xs-12">
			<h2>Try Our Handcrafted Beer</h2>
		</header>

		<section class="current-beer">
			<h3>On Tap</h3>
			<table class="taps">
				<thead>
					<tr>
						<th class="title">Title</th>
						<th class="abv"><abbr title="Alcohol By Volume">ABV</abbr></th>
						<th class="style">Style</th>
					</tr>
				</thead>
				<tbody>
<?php foreach( $taps as $beer ) : ?>
<?php 	setup_postdata( $GLOBALS['post'] =& $beer ); ?>
					<tr class="beer">
						<td class="title">
							<a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
						</td>
						<td class="abv"><?php echo get_post_meta( get_the_ID(), 'alcohol_by_volume', true ); ?></td>
						<td class="style"><?php the_terms(0, 'style'); ?></td>
					</tr>
<?php endforeach; ?>
<?php wp_reset_postdata(' / '); ?>
				</tbody>
			</table>
		</section>

		<section class="upcoming-beer">
			<h3>On Deck</h3>
			<table class="decks">
				<thead>
					<tr>
						<th class="title">Title</th>
						<th class="style">Style</th>
					</tr>
				</thead>
				<tbody>
<?php foreach( $decks as $beer ) : ?>
<?php 	setup_postdata( $GLOBALS['post'] =& $beer ); ?>
					<tr class="beer">
						<td class="title">
							<a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
						</td>
						<td class="style"><?php the_terms(0, 'style'); ?></td>
					</tr>
<?php endforeach; ?>
<?php wp_reset_postdata(' / '); ?>
				</tbody>
			</table>
		</section>
	</aside>