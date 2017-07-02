<?php $product_categories = get_terms( 'product_category', array('orderby' => 'id') ); ?>
<?php if( count($product_categories) ) : ?>
<aside class="site-shop row" id="shop">
	<header class="col-xs-12">
		<h2>Stop By the #URBshop</h2>
	</header>

<?php 	foreach( $product_categories as $product_category ) : ?>
<?php 		if( $product_category->parent === 0 ) : ?>
	<section class="shop-category <?php echo "shop-{$product_category->slug}"; ?> col-sm-6">
		<h3 class="shop-category-title"><?php echo $product_category->name; ?></h3>
		<h4 class="shop-category-subtitle"><?php echo get_metadata( 'term', $product_category->term_id, 'subtitle', true ); ?></h4>
		<div class="shop-category-description">
<?php 		echo $product_category->description; ?>
		</div>
		<a class="shop-category-link" href="<?php echo get_term_link( $product_category->term_id, 'product_category' ); ?>">View <?php echo ucwords($product_category->slug); ?> Items</a>
	</section>
<?php 		endif; ?>
<?php 	endforeach; ?>
</aside>
<?php endif; ?>