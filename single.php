<?php wp_enqueue_script('single', get_stylesheet_directory_uri() . '/scripts/single.js', '1.0', true); ?>
<?php get_header(); ?>
<?php get_sidebar(); ?>
	<main class="post row around-xs">
<?php the_post(); ?>
		<article id="post-<?php the_ID(); ?>" <?php post_class('col-xs-11 col-sm-9 col-md-7'); ?>>
			<header class="post-header" role="banner">
<?php if ( has_post_thumbnail() ) : ?>
<?php $post_thumbnail_url = wp_get_attachment_image_src( get_post_thumbnail_id($post->ID), array( 720,405 ), false, '' )[0];?>
				<figure class="post-image animated zoomIn" data-entered-viewport="animated zoomIn" style="background-image:url('<?php echo $post_thumbnail_url; ?>');">
					<?php the_post_thumbnail(); ?>
				</figure>
<?php endif; ?>

				<?php the_title( '<h2 class="post-title">', '</h2>' ); ?>

				<div class="post-meta">
					<div class="byline">
						<?php echo get_avatar( get_the_author_meta('ID'), '96', 'http://www.urbanrestbrewing.com/wp-content/themes/urbanrest-wordpress-theme/images/default-avatar.png' ); ?>
						<address class="post-author">
							<a href="#" rel="author"><?php echo get_the_author(); ?></a>
						</address>
						<time class="post-date" datetime="<?php echo esc_attr( get_the_date( 'c' ) ); ?>">
							<?php echo esc_html( get_the_date() ); ?>
						</time>
					</div>
				</div>
			</header>

			<div class="post-content">
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

			<footer class="post-footer" role="contentinfo">
<?php $tags = wp_get_post_tags( $post->ID ); ?>
<?php if( count($tags) > 0 ) : ?>
				<ul class="post-tags">
<?php 	foreach( $tags as $tag ) : ?>
					<li class="post-tag">
						<a href="/tags/<?php echo $tag->slug; ?>"><?php echo $tag->name; ?></a>
					</li>
<?php 	endforeach; ?>
				</ul>
<?php endif; ?>

				<section class="post-actions">
					<!--
					<h3 class="post-like hyperlink" data-action="modal" data-target=".post-liking.modal">Like this page</h3>
					<ul class="post-liking modal">
						<li>
							<a class="facebook" href="http://www.facebook.com/sharer/sharer.php?u=<?php echo get_permalink(); ?>" onclick="javacript:share(this);" title="Share this on Facebook" data-event-action="Share" data-event-label="Facebook"><span>Like this on Facebook</span></a>
						</li>
						<li>
							<a class="twitter" href="https://twitter.com/intent/tweet?text=<?php echo get_permalink(); ?>" onclick="javascript:share(this);" title="Share this on Twitter" data-event-action="Share" data-event-label="Twitter"><span>Favorite this on Twitter</span></a>
						</li>
					</ul>
					-->

					<button class="post-share hyperlink" data-action="modal" data-target=".post-sharing.modal" type="button">Share this page</button>
					<ul class="post-sharing modal animated fadeInDown">
						<li>
							<a class="facebook" href="http://www.facebook.com/sharer/sharer.php?u=<?php echo get_permalink(); ?>" onclick="javacript:share(this);" title="Share this on Facebook" data-event-action="Share" data-event-label="Facebook"><span>Share this on Facebook</span></a>
						</li>
						<li>
							<a class="twitter" href="https://twitter.com/intent/tweet?text=<?php echo get_permalink(); ?>" onclick="javascript:share(this);" title="Share this on Twitter" data-event-action="Share" data-event-label="Twitter"><span>Share this on Twitter</span></a>
						</li>
						<li>
							<a class="google" href="https://plus.google.com/share?url=<?php echo get_permalink(); ?>" onclick="javascript:share(this);" title="Share this on Google+" data-event-action="Share" data-event-label="Google+"><span>Share this on Google+</span></a>
						</li>
						<li>
							<a class="email" href="mailto:?body=<?php echo get_permalink(); ?>" title="Share this via Email" data-event-action="Share" data-event-label="Email"><span>Share this via Email</span></a>
						</li>
					</ul>

					<!--
					<h3 class="post-comments hyperlink" data-action="modal" data-target=".post-commenting.modal">View Comments</h3>
					<div class="post-commenting modal"></div>
					-->
				</section>
			</footer>
		</article>
	</main>
<?php get_footer(); ?>