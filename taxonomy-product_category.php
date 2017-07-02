<?php get_header(); ?>
<?php get_sidebar(); ?>
<?php $category = get_queried_object(); ?>
	<main class="taxonomy row around-xs">
		<article id="taxonomy-<?php echo $category->term_id; ?>" <?php post_class('col-xs-11 col-sm-9 col-md-7'); ?>>
			<header class="taxonomy-header" role="banner">
				<h2 class="taxonomy-title"><?php echo $category->name; ?></h2>
			</header>
			<div class="taxonomy-content">
				<ol>
<?php
$post_args = array(
	'post_type'      => 'product',
	// 'product_category'     => $category->slug,
	'posts_per_page' => -1,
	'tax_query' => array(
		'relation' => 'AND',
		array(
			'taxonomy' => 'product_category',
			'field' => 'slug',
			'terms' => array($category->slug),
			'include_children' => true,
			'operator' => 'IN'
		)
	)
);
$query = new WP_Query($post_args);

query_posts( $post_args );
while ( have_posts() ) : the_post();
?>
					<li>
						<a href="<?php echo the_permalink(); ?>"><?php echo the_title(); ?></a>
					</li>
<?php
endwhile;
wp_reset_query();
?>
				</ol>
			</div>
		</article>
	</main>
<?php urb_get_specials(); ?>
<?php urb_get_community(); ?>
<?php urb_get_shop(); ?>
<?php urb_get_company(); ?>
<?php get_footer(); ?>