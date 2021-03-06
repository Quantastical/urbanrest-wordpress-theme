<?php get_header(); ?>
<?php get_sidebar(); ?>
<?php $current_term = get_queried_object(); ?>
	<main class="taxonomy row around-xs">
		<article id="taxonomy-<?php echo $current_term->term_id; ?>" <?php post_class('col-xs-11 col-sm-9 col-md-7'); ?>>
			<header class="taxonomy-header" role="banner">
				<h2 class="taxonomy-title"><?php echo $current_term->name; ?></h2>
				<p>
					<?php echo $current_term->description; ?>
				</p>
			</header>
			<div class="taxonomy-content">
				<p><em><?php echo $current_term->name; ?></em> beers that we have brewed:</p>
				<ol>
<?php
$post_args = array(
	'post_type'      => 'beer',
	//'beer_style'     => $current_term->slug,
	'posts_per_page' => -1,
	'tax_query' => array(
		'relation' => 'AND',
		array(
			'taxonomy' => 'beer_style',
			'field' => 'slug',
			'terms' => array($current_term->slug),
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