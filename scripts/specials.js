jQuery(function($){
	/*
	var wpAdminBarHeight = (Urb.$wpadminbar) ? Urb.$wpadminbar.outerHeight() : 0;
	var viewportHeight = Urb.$window.height() - wpAdminBarHeight - Urb.$mainNavigation.outerHeight();
	var viewportHeightPercent = 0;
	var logoScale = 50;
	*/

	Urb.$specials = $('.site-specials');
	Urb.$currentBeerTaps = $('.current-beer .taps', Urb.$specials);
	Urb.$currentBeerDeck = $('.upcoming-beer .decks', Urb.$specials);

	/*
	Urb.scrollParallaxBackground = function() {
		Urb.$menuLogo.closest('a').attr('tabindex', '-1');
		Urb.$specials.css({
			'background-position': 'center ' + (-50 * (Urb.scrollPosition - Urb.$specials.offset().top) / Urb.$window.height()).toFixed(2) + 'vh',
		});
	};
	*/

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

	//Urb.$window.on('load orientationchange resize scroll', Urb.scrollParallaxBackground);
});