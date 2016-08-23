jQuery(function($){
	Urb.$specials = $('.site-specials');
	Urb.$currentBeerTaps = $('.current-beer .taps', Urb.$specials);
	Urb.$currentBeerDeck = $('.upcoming-beer .decks', Urb.$specials);

	Urb.setupTapSorting = function() {
		Urb.log('Urb.setupTapSorting');

		$('th', Urb.$currentBeerTaps).click(Urb.sortTap);
	};

	Urb.sortTap = function() {
		Urb.log('Urb.sortTap');
		
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