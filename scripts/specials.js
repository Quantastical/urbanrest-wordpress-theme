jQuery(function($){
	Urb.$currentBeerTaps = $('.site-specials .current-beer .taps');
	Urb.$currentBeerDeck = $('.site-specials .upcoming-beer .decks');

	Urb.setupTapSorting = function() {
		$('th', Urb.$currentBeerTaps).click(Urb.sortTap);
	};

	Urb.sortTap = function() {
		var $th = $(this);

		Urb.$currentBeerTaps.find('td').filter( function(){
			return $(this).index() === $th.index();
		}).sortElements(function(a, b){
			if( $.text([a]) == $.text([b]) ) {
				return 0;
			} else {
				return $.text([a]) > $.text([b]) ? 1 : -1;
			}
		}, function(){
			return this.parentNode;
		});

		Urb.$currentBeerDeck.find('td').filter( function(){
			return $(this).index() === $th.index();
		}).sortElements(function(a, b){
			if( $.text([a]) == $.text([b]) ) {
				return 0;
			} else {
				return $.text([a]) > $.text([b]) ? 1 : -1;
			}
		}, function(){
			return this.parentNode;
		});
	};

	Urb.$window.on('load', Urb.setupTapSorting);
});