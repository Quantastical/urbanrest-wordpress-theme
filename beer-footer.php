			<footer class="page-footer beer-footer" role="contentinfo">
				<section class="beer-actions">
<?php
$rating_enabled = get_post_meta($post->ID, 'rating_enabled');
if($rating_enabled[0] != 'false') :
?>
					<div class="beer-rating">
						<h5>
							Overall Rating
							<sup class="annotation" id="annotation-rating">
								<a class="annotation-link" href="#citation-rating">*</a>
							</sup>
						</h5>
						<div data-beer-id="<?php echo $post->ID; ?>" data-overall-rating="<?php echo urb_get_average_rating( $post->ID ); ?>" data-user-rating="<?php echo urb_get_user_rating( $post->ID ); ?>" itemprop="aggregateRating" itemscope itemtype="http://schema.org/AggregateRating">
							Rated <span itemprop="ratingValue"><?php echo urb_get_average_rating( $post->ID ); ?></span>/5
							based on <span itemprop="reviewCount"><?php echo count( urb_get_ratings($post->ID) ); ?></span> customer reviews
						</div>
					</div>
<?php
endif;
?>

					<div class="modal checkin-modal animated fadeIn">
<?php
$beeradvocate_beer_url = get_post_meta($post->ID, 'beeradvocate_beer_url');
$ratebeer_beer_url = get_post_meta($post->ID, 'ratebeer_beer_url');
$untappd_beer_url = get_post_meta($post->ID, 'untappd_beer_url');

$has_beeradvocate = filter_var($beeradvocate_beer_url[0], FILTER_VALIDATE_URL);
$has_ratebeer = filter_var($ratebeer_beer_url[0], FILTER_VALIDATE_URL);
$has_untappd = filter_var($untappd_beer_url[0], FILTER_VALIDATE_URL);

if( $has_beeradvocate || $has_ratebeer || $has_untappd ) :
?>
						<h5 class="menu-title">Share your rating with your favorite online community.</h5>
						<ul class="menu">
<?php if( $has_beeradvocate ) : ?>
							<li class="menu-item">
								<a class="icon beeradvocate" href="<?php echo $beeradvocate_beer_url[0]; ?>"><span class="icon-label">Rate this on BeerAdvocate</span></a>
							</li>
<?php endif; ?>
<?php if( $has_ratebeer ) : ?>
							<li class="menu-item">
								<a class="icon ratebeer" href="<?php echo $ratebeer_beer_url[0]; ?>"><span class="icon-label">Rate this on RateBeer</span></a>
							</li>
<?php endif; ?>
<?php if( $has_untappd && get_option('untappd_api_client_id') ) : ?>
							<li class="menu-item">
								<a class="icon untappd" href="<?php echo $untappd_beer_url[0]; ?>"><span class="icon-label">Check-In on Untappd</span></a>
							</li>
<?php endif; ?>
						</ul>
<?php
endif;
?>
					</div>
					<button class="page-share beer-share hyperlink" data-action="modal" data-target=".modal.share-modal" type="button">Share this page</button>
					<div class="modal share-modal animated fadeIn">
						<a class="shortlink" href="<?php echo wp_get_shortlink(); ?>"><?php echo str_replace('/', '/&#8203;', str_replace(stripos($_SERVER['SERVER_PROTOCOL'],'https') === true ? 'https://' : 'http://', '', wp_get_shortlink())); ?></a>
						<h5 class="menu-title">Share this page on your favorite social&nbsp;network.</h5>
						<ul class="menu">
							<li class="menu-item">
								<a class="icon facebook" href="http://www.facebook.com/sharer/sharer.php?u=<?php echo get_permalink(); ?>" data-event-action="Share" data-event-label="Facebook"><span class="icon-label">Share this on Facebook</span></a>
							</li>
							<li class="menu-item">
								<a class="icon twitter" href="https://twitter.com/intent/tweet?text=<?php echo get_permalink(); ?>" data-event-action="Share" data-event-label="Twitter"><span class="icon-label">Share this on Twitter</span></a>
							</li>
							<li class="menu-item">
								<a class="icon google-plus" href="https://plus.google.com/share?url=<?php echo get_permalink(); ?>" data-event-action="Share" data-event-label="Google+"><span class="icon-label">Share this on Google+</span></a>
							</li>
							<li class="menu-item">
								<a class="icon email" href="mailto:?body=<?php echo get_permalink(); ?>" data-event-action="Share" data-event-label="Email"><span class="icon-label">Share this via Email</span></a>
							</li>
						</ul>
					</div>
				</section>
			</footer>