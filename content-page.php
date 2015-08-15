<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<header class="entry-header" role="banner">
		<?php the_title( '<h2 class="entry-title">', '</h2>' ); ?>
	</header>

	<div class="entry-content">
		<?php the_content(); ?>
		<?php
			wp_link_pages( array(
				'before'      => '<div class="page-links"><span class="page-links-title">' . 'Pages:' . '</span>',
				'after'       => '</div>',
				'link_before' => '<span>',
				'link_after'  => '</span>',
				'pagelink'    => '<span class="screen-reader-text">' . 'Page' . ' </span>%',
				'separator'   => '<span class="screen-reader-text">, </span>',
			) );
		?>
	</div>

	<?php edit_post_link( 'Edit', '<footer class="entry-footer" role="contentinfo"><span class="edit-link">', '</span></footer><!-- .entry-footer -->' ); ?>

</article>
