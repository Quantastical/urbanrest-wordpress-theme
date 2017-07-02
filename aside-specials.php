	<aside class="site-specials row" id="beer">
		<header class="col-xs-12">
			<h2>Urbanrest Beer List</h2>
		</header>

<?php
$menu_name = 'beer-list';
$locations = get_nav_menu_locations();
$tap_menu = wp_get_nav_menu_object( $locations[ $menu_name ] );
$tap_menu_items = wp_get_nav_menu_items( $tap_menu->term_id, array( 'order' => 'ASC' ) );
?>
<?php if( count($tap_menu_items) > 0 ) : ?>
		<section class="col-xs-12 beer-list">
			<h3>Currently On Tap</h3>

			<ol>
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
<?php endif; ?>
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
<?php if( count($tap_menu_items) == 0 && count($growler_menu_items) == 0 ) : ?>
		<section class="col-xs-12 beer-list">
			<h3>Under Construction</h3>
			<p style="text-align:center;">Beer&nbsp;List Coming&nbsp;Soon</p>
		</section>
<?php endif; ?>
	</aside>