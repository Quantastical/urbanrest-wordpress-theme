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
<!--
	<section class="shop-apparel col-sm-6">
		<h3>For Wearing</h3>
		<h4>Urbanrest Apparel &ndash; Designed and Made in Michigan</h4>
		<p>
			We've been designing apparel since <abbr title="The Year 2000">Y2K</abbr>.
			Join our army of followers and show up to your next gathering with Urbanrest clothing and accessories.
			There's something for everyone and every season.
		</p>
	</section>

	<section class="shop-drinkware col-sm-6">
		<h3>For Drinking</h3>
		<h4>Pick Up a Couple of Glasses, a Growler and Share a Drink. Cheers!</h4>
		<p>
			The shapes of beer glasses aren't just for looks and, for some reason, beer just tastes better wearing its brewery's logo on the glass.
			We've also got some of the handiest hand-made, hand-blown handhelds made right here in Michigan.
		</p>
	</section>

	<section class="shop-brewing col-sm-6">
		<h3>For Brewing</h3>
		<h4>The #URBshop Has What You Need to Brew Your Own Beer</h4>
		<p>
			The #URBshop is our way of supporting the craft and community we've come to know and love.
			We got started just like you: drinking and having fun with our friends, appreciating the flavors and craftsmanship, and wanting to learn more abou the beer we love.
		</p>
	</section>

	<section class="shop-miscellaneous col-sm-6">
		<h3>For Everything</h3>
		<h4>Check Out All the Cool Stuff We Have to Offer</h4>
		<p>
			We've got even more goodies that are all made in your local neighborhoods and nearby.
			Support your community and your neighborhood brewery.
		</p>
	</section>
-->
</aside>
<?php endif; ?>