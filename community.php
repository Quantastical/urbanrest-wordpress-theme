<aside class="site-community row" id="community">
	<header class="col-xs-12">
		<h2>Come See What's New</h2>
	</header>

	<section class="site-events col-sm-6">
		<h3>
			<span class="word">Upcoming</span>
			<span class="letter">E</span>
			<span class="letter">v</span>
			<span class="letter">e</span>
			<span class="letter">n</span>
			<span class="letter">t</span>
			<span class="letter">s</span>
		</h3>
<?php
$event_args = array(
	'order'          => 'ASC',
	'orderby'        => 'date',
	'posts_per_page' => -1, // no pagination
	'post_type'      => 'event',
	'post_status'    => 'publish'
);
$events = get_posts($event_args);
?>
		<ul class="events">
<?php foreach( $events as $post ) : ?>
<?php 	setup_postdata( $GLOBALS['post'] =& $post ); ?>
			<li class="event" itemscope itemtype="http://schema.org/MusicEvent">
				<div class="event-when">
					<time class="event-start" itemprop="startDate" datetime="<?php urb_the_datetime('start_datetime'); ?>">
						<span class="day"><?php urb_the_datetime('start_datetime', 'l'); ?></span>
						<span class="month"><?php urb_the_datetime('start_datetime', 'F'); ?></span>
						<span class="date"><?php urb_the_datetime('start_datetime', 'j'); ?></span>
						<span class="year"><?php urb_the_datetime('start_datetime', 'Y'); ?></span>
						<span class="time"><?php urb_the_datetime('start_datetime', 'h:i A'); ?></span>
					</time>
					<time class="event-end" itemprop="endDate" datetime="<?php urb_the_datetime('end_datetime'); ?>">
						<span class="day"><?php urb_the_datetime('end_datetime', 'l'); ?></span>
						<span class="month"><?php urb_the_datetime('end_datetime', 'F'); ?></span>
						<span class="date"><?php urb_the_datetime('end_datetime', 'j'); ?></span>
						<span class="year"><?php urb_the_datetime('end_datetime', 'Y'); ?></span>
						<span class="time"><?php urb_the_datetime('end_datetime', 'h:i A'); ?></span>
					</time>
				</div>
				<a class="event-what" itemprop="url" href="<?php the_permalink(); ?>">
					<span itemprop="name"><?php the_title(); ?></span>
				</a>
				<div class="event-why" itemprop="description">
					<?php the_content(); ?>
				</div>
			</li>
<?php endforeach; ?>
<?php wp_reset_postdata(' / '); ?>
		</ul>
	</section>

	<section class="site-club col-sm-6">
		<h3><abbr class="hashtag" title="hashtag">#</abbr>URBcrew</h3>
		<p>Join the #URBcrew to earn savings, discounts, and get rewarded for your continued support.</p>
		<ul>
			<li>20-ounce pours instead of pints</li>
			<li>Exclusive #URBcrew shirt</li>
			<li>Early access to limited releases</li>
		</ul>
		<a class="btn btn-primary" href="#">
			<span class="btn-label">Join Now</span>
			<span class="btn-content">$100</span>
		</a>
	</section>

	<section class="site-blog col-xs-12">
		<h3>Latest Posts</h3>
<?php
$latest_args = array(
	'posts_per_page' => 5,
	'orderby' => 'date',
	'order', 'DESC'
);
$latest = get_posts( $latest_args );
?>
		<ul class="latest-posts row around-xs around-sm around-md around-lg center-md" style="width: calc(<?php echo count($latest) * 100; ?>% + <?php echo count($latest) * 0.5; ?>rem);">
<?php foreach ( $latest as $post ) : ?>
<?php 	setup_postdata( $GLOBALS['post'] =& $post ); ?>
			<li class="blog-post col-sm-5 col-md-5 col-lg-4" style="width: <?php echo 1 / count($latest) * 100; ?>%;">
				<a href="<?php the_permalink(); ?>">
<?php 	if ( has_post_thumbnail() ) : ?>
					<span class="blog-post-image" style="background-image:url('<?php echo wp_get_attachment_image_src( get_post_thumbnail_id($post->ID), array( 720,405 ), false, '' )[0]; ?>');">
						<?php the_post_thumbnail(); ?>
					</span>
<?php 	endif; ?>
					<h4><?php the_title(); ?></h4>
				</a>
				<div class="blog-post-intro">
					<?php the_content(); ?>
				</div>
			</li>
<?php endforeach; ?>
<?php wp_reset_postdata(); ?>
		</ul>
	</section>
</aside>