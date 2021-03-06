<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<header class="entry-header" role="banner">
		<?php
			if ( is_single() ) :
				the_title( '<h2 class="entry-title">', '</h2>' );
			else :
				the_title( sprintf( '<h3 class="entry-title"><a href="%s" rel="bookmark">', esc_url( get_permalink() ) ), '</a></h3>' );
			endif;
		?>
	</header><!-- .entry-header -->

	<div class="entry-content">
		<?php
			/* translators: %s: Name of current post */
			the_content( sprintf(
				'Continue reading...',
				the_title( '<span class="screen-reader-text">', '</span>', false )
			) );

			wp_link_pages( array(
				'before'      => '<div class="page-links"><span class="page-links-title">Pages:</span>',
				'after'       => '</div>',
				'link_before' => '<span>',
				'link_after'  => '</span>',
				'pagelink'    => '<span class="screen-reader-text">Page </span>%',
				'separator'   => '<span class="screen-reader-text">, </span>',
			) );
		?>
	</div>

	<footer class="entry-footer" role="contentinfo">
	<?php if( !is_home() && !is_front_page() ) : ?>
		<?php edit_post_link( 'Edit', '<span class="edit-link">', '</span>' ); ?>
	<?php endif; ?>
	</footer>
</article>
