<?php get_header(); ?>
<?php get_sidebar(); ?>
<?php $current_term = get_queried_object(); ?>
	<main class="taxonomy row around-xs">
		<article id="taxonomy-<?php echo $term->term_id; ?>" <?php post_class('col-xs-11 col-sm-9 col-md-7'); ?>>
			<header class="taxonomy-header" role="banner">
				<h2 class="taxonomy-title">Our Beer in Styles</h2>
				<p>
					The brewers of Urbanrest pride themselves in crafting high quality beer in classic styles that casual drinkers and connessiuers (sp.?) can equally enjoy.
				</p>
			</header>
			<div class="taxonomy-content">
<?php
$taxonomies = array( 'beer_style' );

$term_args = array(
	'orderby'           => 'name',
	'order'             => 'ASC',
	'hide_empty'        => true,
	'exclude'           => array(),
	'exclude_tree'      => array(),
	'include'           => array(),
	'number'            => '',
	'fields'            => 'all',
	'slug'              => '',
	'parent'            => '',
	'hierarchical'      => true,
	'child_of'          => 0,
	'childless'         => false,
	'get'               => '',
	'name__like'        => '',
	'description__like' => '',
	'pad_counts'        => false,
	'offset'            => '',
	'search'            => '',
	'cache_domain'      => 'core'
); 

$terms = get_terms($taxonomies, $term_args);

//var_dump($terms);

foreach( $terms as $term ) :
?>
				<section>
					<h3><?php echo $term->name; ?></h3>
<?php 	if( $term->description ) : ?>
					<p>
						<?php echo $term->description; ?>
					</p>
<?php 	endif; ?>
					<p>
						Beers categorized as &ldquo;<?php echo $term->name; ?>&rdquo;:</p>
					</p>
					<ol>
<?php
	$post_args = array(
		'post_type'      => 'beer',
		'beer_style'     => $term->slug,
		'posts_per_page' => -1
	);
	$query = new WP_Query($post_args);

	query_posts( $post_args );
	while ( have_posts() ) : the_post();
?>
						<li>
							<a href="#"><?php echo the_title(); ?></a>
						</li>
<?php
	endwhile;
	wp_reset_query();
?>
					</ol>
				</section>
<?php
endforeach;
?>
			</div>
		</article>
	</main>
<?php urb_get_specials(); ?>
<?php urb_get_community(); ?>
<?php urb_get_shop(); ?>
<?php urb_get_company(); ?>
<?php get_footer(); ?>