			<footer class="beer-footer" role="contentinfo">
				<section class="beer-actions">
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

					<div class="beer-checkin modal animated fadeIn">
						<h5>Share your rating with your favorite online community.</h5>
						<ul>
<?php $beeradvocate_beer_url = get_post_meta($post->ID, 'beeradvocate_beer_url'); ?>
<?php if( filter_var($beeradvocate_beer_url[0], FILTER_VALIDATE_URL) ) : ?>
							<li class="beer-checkin-item">
								<a class="beeradvocate" href="<?php echo $beeradvocate_beer_url[0]; ?>"><span>Rate this on BeerAdvocate</span></a>
							</li>
<?php endif; ?>
<?php $ratebeer_beer_url = get_post_meta($post->ID, 'ratebeer_beer_url'); ?>
<?php if( filter_var($ratebeer_beer_url[0], FILTER_VALIDATE_URL) ) : ?>
							<li class="beer-checkin-item">
								<a class="ratebeer" href="<?php echo $ratebeer_beer_url[0]; ?>"><span>Rate this on RateBeer</span></a>
							</li>
<?php endif; ?>
<?php $untappd_beer_url = get_post_meta($post->ID, 'untappd_beer_url'); ?>
<?php if( filter_var($untappd_beer_url[0], FILTER_VALIDATE_URL) && get_option('untappd_api_client_id') ) : ?>
							<li class="beer-checkin-item">
								<a class="untappd" href="<?php echo $untappd_beer_url[0]; ?>"><span>Check-In on Untappd</span></a>
							</li>
<?php endif; ?>
						</ul>
					</div>
					<!--
					<h3 class="beer-like hyperlink" data-action="modal" data-target=".beer-liking.modal">Like this beer</h3>
					<ul class="beer-liking modal">
						<li>
							<a class="facebook" href="http://www.facebook.com/sharer/sharer.php?u=<?php echo get_permalink(); ?>" onclick="javacript:share(this);" title="Share this on Facebook" data-event-action="Share" data-event-label="Facebook"><span>Like this on Facebook</span></a>
						</li>
						<li>
							<a class="twitter" href="https://twitter.com/intent/tweet?text=<?php echo get_permalink(); ?>" onclick="javascript:share(this);" title="Share this on Twitter" data-event-action="Share" data-event-label="Twitter"><span>Favorite this on Twitter</span></a>
						</li>
					</ul>
					-->
<script type="text/javascript">
jQuery(function($){
//	$.get('http://localapi.urbanrest.com/ratebeer/beer/info/founders-kbs-kentucky-breakfast-stout/40544/', function(res) {
//
	//	console.log(res);
	//});
});
</script>
					<button class="beer-share hyperlink" data-action="modal" data-target=".beer-sharing.modal" type="button">Share this page</button>
					<ul class="beer-sharing modal animated fadeIn">
						<li>
							<input class="shortlink" type="text" value="http://URB.beer<?php echo wp_get_shortlink(); ?>" onfocus="this.select();" />
						</li>
						<li>
							<a class="facebook" href="http://www.facebook.com/sharer/sharer.php?u=<?php echo get_permalink(); ?>" onclick="javacript:share(this);" data-event-action="Share" data-event-label="Facebook"><span>Share this on Facebook</span></a>
						</li>
						<li>
							<a class="twitter" href="https://twitter.com/intent/tweet?text=<?php echo get_permalink(); ?>" onclick="javascript:share(this);" data-event-action="Share" data-event-label="Twitter"><span>Share this on Twitter</span></a>
						</li>
						<li>
							<a class="google" href="https://plus.google.com/share?url=<?php echo get_permalink(); ?>" onclick="javascript:share(this);" data-event-action="Share" data-event-label="Google+"><span>Share this on Google+</span></a>
						</li>
						<li>
							<a class="email" href="mailto:?body=<?php echo get_permalink(); ?>" data-event-action="Share" data-event-label="Email"><span>Share this via Email</span></a>
						</li>
					</ul>
<?php
/*
					<!--
					<h3 class="beer-comments hyperlink" data-action="modal" data-target=".beer-commenting.modal">View Comments</h3>
					<div class="beer-commenting modal"></div>
					-->
*/
?>
				</section>
<?php
/*
				<section class="beer-citations">
					<ol>
						<li class="citation" id="citation-rating">
							<a class="citation-link" href="#annotation-rating">*</a>
							<em>Overall Rating</em> calculated as the average aggregate rating from
<?php if( filter_var($beeradvocate_beer_url, FILTER_VALIDATE_URL) ) : ?>
							<a class="rating-system" href="<?php echo ($beeradvocate_beer_url) ? $beeradvocate_beer_url[0] : 'http://ratebeer.com'; ?>">BeerAdvocate</a>
<?php endif; ?>
<?php if( filter_var($ratebeer_beer_url, FILTER_VALIDATE_URL) ) : ?>
							<a class="rating-system" href="<?php echo ($ratebeer_beer_url) ? $ratebeer_beer_url[0] : 'http://ratebeer.com'; ?>">RateBeer</a>
<?php endif; ?>
<?php if( filter_var($untappd_beer_url, FILTER_VALIDATE_URL) && get_option('untappd_api_client_id') ) : ?>
							<a class="rating-system" href="<?php echo ($untappd_beer_url) ? $untappd_beer_url[0] : 'http://untappd.com'; ?>">Untappd</a>
<?php endif; ?>
							<span class="rating-system rating-system-wordpress">votes from our users</span>.
						</li>
					</ol>
				</section>
*/
?>
			</footer>