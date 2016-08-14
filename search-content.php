<?php $search_terms = (isset($_GET['q'])) ? trim( $_GET['q'] ) : ''; ?>
			<div class="page-content">
				<p>
					Here is a list of search results that may help you find what you are looking for.
				</p>

				<p>
					<form action="/search" autocomplete="off" class="site-search" method="get">
						<label for="q">Search results for</label>
						<input class="search-input" id="q" name="q" value="<?php echo $search_terms; ?>" />
						<button class="search-submit" type="submit"><span class="btn-label">Find Results</span></button>
					</form>
				</p>
<?php if( strlen($search_terms) > 0) : ?>
<?php 	$args = array( 's' => $search_terms ); ?>
<?php 	$the_query = new WP_Query( $args ); ?>
<?php 	if( $the_query->have_posts() ) : ?>
				<ul>
<?php 		while( $the_query->have_posts() ) : ?>
<?php 			$the_query->the_post(); ?>
					<li><a href="<?php echo the_permalink(); ?>"><?php echo get_the_title(); ?></a></li>
<?php 		endwhile; ?>
				</ul>
<?php 	else : ?>
				<em>Nothing was found.</em>
<?php 	endif; ?>
<?php endif; ?>
<?php wp_reset_postdata(); ?>
			</div>