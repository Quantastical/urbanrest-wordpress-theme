jQuery(function($){
	Urb.$aggregateRating = $('[itemprop="aggregateRating"]');

	Urb.rateBeer = function() {
		var $ratingActions = $('<div class="rating-actions" />');
		var $rateButton = $(this);

		$.ajax({
			type: "post",
			url: _URB.url,
			data: "action=post-rate&nonce=" + _URB.nonce + "&post_rating=" + $rateButton.val() + "&post_id=" + $rateButton.data('id'),
			dataType: 'json',
			success: function(response){
				if(response.success) {
					$ratingActions.addClass('rated');
					$rateButton.addClass('rated');
					$rateButton.prevAll('.rate-button').addClass('rated');
					Urb.$aggregateRating.attr('data-user-rating', $rateButton.val() );
				} else {
					console.log(response);
					alert(response.message);
				}
			}
		});

		return false;
	};

	Urb.setupRatingPoll = function() {
		var $ratingActions = $('<div class="rating-actions" />');
		if( Number(Urb.$aggregateRating.data('user-rating')) > 0 ) {
			$ratingActions.addClass('rated');
		}
		for(var i = 1; i <= 5; i++) {
			var $rateButton = $('<button class="rate-button" />');
			$rateButton.val(i);
			$rateButton.data('id', Urb.$aggregateRating.data('beer-id'));
			$rateButton.text(i === 1 ? '1 Star' : i + ' Stars');
			$rateButton.toggleClass('rated', i <= Number(Urb.$aggregateRating.data('user-rating')) );
			$ratingActions.append($rateButton);
			$rateButton.on('click', Urb.rateBeer);
		}

		Urb.$aggregateRating.after($ratingActions);
	};

	Urb.setupRatingsFrom3rdParties = function() {
		// Untappd
		$.ajax({
			type: 'get',
			url: Urb.API + 'untappd/beer/info/',
			data: { postId: $('[itemprop="aggregateRating"]').data('beer-id') },
			dataType: 'json',
			success: function(data) {
				var ratingValue = Number($('[itemprop="ratingValue"]', Urb.$aggregateRating).text());
				var reviewCount = Number($('[itemprop="reviewCount"]', Urb.$aggregateRating).text());
				var totalRatings = ratingValue * reviewCount;

				if(data.response.beer) {
					var untappdRatingValue = data.response.beer.rating_score;
					var untappdReviewCount = data.response.beer.rating_count;
					var untappdTotalRatings = untappdRatingValue * untappdReviewCount;

					var overallTotalRatings = totalRatings + untappdTotalRatings;
					var overallReviewCount = reviewCount + untappdReviewCount;
					var overallRatingValue = overallTotalRatings / overallReviewCount;

					Urb.$aggregateRating.attr( 'data-overall-rating', overallRatingValue.toFixed(1) );
					$('[itemprop="ratingValue"]', Urb.$aggregateRating).text( overallRatingValue.toFixed(1) );
					$('[itemprop="reviewCount"]', Urb.$aggregateRating).text( overallReviewCount.toFixed(0) );
				}
			}
		});

		// RateBeer
		$.ajax({
			type: 'get',
			url: Urb.API + 'ratebeer/beer/info/',
			data: { postId: $('[itemprop="aggregateRating"]').data('beer-id') },
			dataType: 'json',
			success: function(data) {
				var ratingValue = Number($('[itemprop="ratingValue"]', Urb.$aggregateRating).text());
				var reviewCount = Number($('[itemprop="reviewCount"]', Urb.$aggregateRating).text());
				var totalRatings = ratingValue * reviewCount;

				if(data) {
					var rateBeerRatingValue = Number(data.rating_value) / Number(data.best_rating) * 5;
					var rateBeerReviewCount = Number(data.review_count);
					var rateBeerTotalRatings = rateBeerRatingValue * rateBeerReviewCount;

					var overallTotalRatings = totalRatings + rateBeerTotalRatings;
					var overallReviewCount = reviewCount + rateBeerReviewCount;
					var overallRatingValue = overallTotalRatings / overallReviewCount;

					Urb.$aggregateRating.attr( 'data-overall-rating', overallRatingValue.toFixed(1) );
					$('[itemprop="ratingValue"]', Urb.$aggregateRating).text( overallRatingValue.toFixed(1) );
					$('[itemprop="reviewCount"]', Urb.$aggregateRating).text( overallReviewCount.toFixed(0) );
				}
			}
		});


		// BeerAdvocate
		$.ajax({
			type: 'get',
			url: Urb.API + 'beeradvocate/beer/info/',
			data: { postId: $('[itemprop="aggregateRating"]').data('beer-id') },
			dataType: 'json',
			success: function(data) {
				var ratingValue = Number($('[itemprop="ratingValue"]', Urb.$aggregateRating).text());
				var reviewCount = Number($('[itemprop="reviewCount"]', Urb.$aggregateRating).text());
				var totalRatings = ratingValue * reviewCount;

				if(data) {
					var rateBeerRatingValue = Number(data.rating_value) / Number(data.best_rating) * 5;
					var rateBeerReviewCount = Number(data.review_count);
					var rateBeerTotalRatings = rateBeerRatingValue * rateBeerReviewCount;

					var overallTotalRatings = totalRatings + rateBeerTotalRatings;
					var overallReviewCount = reviewCount + rateBeerReviewCount;
					var overallRatingValue = overallTotalRatings / overallReviewCount;

					Urb.$aggregateRating.attr( 'data-overall-rating', overallRatingValue.toFixed(1) );
					$('[itemprop="ratingValue"]', Urb.$aggregateRating).text( overallRatingValue.toFixed(1) );
					$('[itemprop="reviewCount"]', Urb.$aggregateRating).text( overallReviewCount.toFixed(0) );
				}
			}
		});
	};

	if( Urb.$body.is('.single-beer') ) {
		Urb.$window.on('load', Urb.setupRatingPoll);
		Urb.$window.on('load', Urb.setupRatingsFrom3rdParties);
	}
	/*
	Urb.scrollToBeerContent = function() {
		if(!Urb.$body.hasClass('home') && Urb.$window.scrollTop() == 0 && Urb.$body.hasClass('single-beer')) {
			Urb.$window.scrollTop( $('.single-beer .beer-container').offset().top );
		} else if( location.hash ) {
			console.log('test');
		}
	};

	Urb.$window.on('load', function() { setTimeout(Urb.scrollToBeerContent, 1); }); // TODO: figure out why setTimeout has to be used here
	*/
});