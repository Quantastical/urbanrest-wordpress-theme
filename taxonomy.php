<?php get_header(); ?>
<?php get_sidebar(); ?>
<?php $term = get_queried_object(); ?>
	<main class="taxonomy row around-xs">
		<article id="taxonomy-<?php echo $term->term_id; ?>" <?php post_class('col-xs-11 col-sm-9 col-md-7'); ?>>
			<header class="taxonomy-header" role="banner">
				<h2 class="taxonomy-title">Posts tagged with &ldquo;<?php echo $term->name; ?>&rdquo;</h2>
			</header>
			<div class="taxonomy-content">
<?php var_dump( $term ); ?>
				<ol>
<?php
$args = array(
	'post_type'      => 'beer',
	'beer_style'       => 'belgian-quadrupel',
	'posts_per_page' => -1
);
$query = new WP_Query($args);
var_dump($query->request);
query_posts( $args );
while ( have_posts() ) : the_post();
?>
					<li>
						<?php echo the_title(); ?>
					</li>
<?php
endwhile;
wp_reset_query();
?>
				</ol>
			</div>
			<footer class="taxonomy-footer" role="contentinfo">
				<hr />
				Footer
			</footer>
		</article>
	</main>
<?php urb_get_specials(); ?>
<?php urb_get_community(); ?>
<?php urb_get_shop(); ?>
<?php urb_get_company(); ?>
<?php get_footer(); ?>