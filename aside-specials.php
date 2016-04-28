	<aside class="site-specials row" id="beer">
		<header class="col-xs-12">
			<h2>Urbanrest Beer List</h2>
		</header>

		<section class="col-xs-12 beer-list">
			<h3>Currently On Tap</h3>

			<ol>
<?php
$menu_name = 'beer-list';
$locations = get_nav_menu_locations();
$tap_menu = wp_get_nav_menu_object( $locations[ $menu_name ] );
$tap_menu_items = wp_get_nav_menu_items( $tap_menu->term_id, array( 'order' => 'ASC' ) );
?>
<?php
foreach( $tap_menu_items as $tap_menu_item ):
	$beer = get_post(url_to_postid($tap_menu_item->url));
	$alcohol = get_post_meta( $beer->ID, 'alcohol', true );
?>
				<li class="beer">
					<a class="title" href="<?php the_permalink($beer->ID); ?>"><?php echo $beer->post_title; ?></a>
					<span class="abv"><?php echo ($alcohol > 0) ? $alcohol . '%' : '--'; ?></span>
					<p><?php echo $beer->post_excerpt; ?></p>
				</li>
<?php
endforeach;
?>
			</ol>
		</section>
<?php
$menu_name = 'growler-list';
$locations = get_nav_menu_locations();
$growler_menu = wp_get_nav_menu_object( $locations[ $menu_name ] );
$growler_menu_items = wp_get_nav_menu_items( $growler_menu->term_id, array( 'order' => 'ASC' ) );
?>
<?php if( count($growler_menu_items) > 0 ) : ?>
		<section class="col-xs-12 growler-list">
			<h3>Available in Growlers</h3>

			<ol>
<?php
foreach( $growler_menu_items as $growler_menu_item ):
	$beer = get_post(url_to_postid($growler_menu_item->url));
?>
				<li class="beer">
					<a class="title" href="<?php the_permalink($beer->ID); ?>"><?php echo $beer->post_title; ?></a>
				</li>
<?php
endforeach;
?>
			</ol>
		</section>
<?php endif; ?>
<?php
/*
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
			<h2>Urbanrest Beer List</h2>
		</header>

		<section class="current-beer">
			<h3>On Tap</h3>
			<table class="taps">
				<thead>
					<tr>
						<th class="title">Beer</th>
						<th class="abv"><abbr title="Alcohol By Volume">ABV</abbr></th>
						<th class="style">Style</th>
					</tr>
				</thead>
				<tbody>
<?php foreach( $taps as $beer ) : ?>
<?php 	setup_postdata( $GLOBALS['post'] =& $beer ); ?>
<?php 	$alcohol = get_post_meta( get_the_ID(), 'alcohol', true ); ?>
					<tr class="beer">
						<td class="title">
							<a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
						</td>
						<td class="abv"><?php echo ($alcohol > 0) ? $alcohol . '%' : '--'; ?></td>
						<td class="style"><?php the_terms(0, 'beer_style'); ?></td>
					</tr>
<?php endforeach; ?>
<?php wp_reset_postdata(' / '); ?>
				</tbody>
			</table>
		</section>

<?php
/*
		<section class="upcoming-beer">
			<h3>On Deck</h3>
			<table class="decks">
				<thead>
					<tr>
						<th class="title">Title</th>
						<th class="abv">ABV</th>
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
						<th class="abv">&nbsp;</th>
						<td class="style"><?php the_terms(0, 'beer_style'); ?></td>
					</tr>
<?php endforeach; ?>
<?php wp_reset_postdata(' / '); ?>
				</tbody>
			</table>
		</section>
*/
?>
	</aside>