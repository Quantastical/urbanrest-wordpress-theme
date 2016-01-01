jQuery( function( $ ) {
	Urb.$searchForm = $('#search');
	Urb.$search = $('input', Urb.$searchForm);
	Urb.$searchButton = $('[href="#search"]', Urb.$socialNavigation);
	Urb.$searchLabel = $('.search-label', Urb.$searchForm);
	Urb.$searchSubmit = $('button', Urb.$searchForm);

	Urb.cancelSearching = function() {
		// Using setTimeout to allow button click handler to trigger before blur event
		setTimeout(function() {
			Urb.$searchForm.toggleClass('searching', false);
		}, 250);
	};

	Urb.changeSearch = function() {
		Urb.$searchLabel.toggleClass('visible', !Urb.$search.is(':valid'));
	};

	Urb.search = function() {
		if(Urb.$search.is(':invalid')) {
			event.preventDefault();
			return false;
		}
	};

	Urb.setupSearch = function() {
		
	};

	Urb.showSearchBox = function() {
		Urb.startSearching();
		Urb.$search.focus();
	};

	Urb.startSearching = function() {
		Urb.changeSearch();
		Urb.$searchForm.toggleClass('searching', true);
	};

	Urb.$searchButton.on('click', Urb.showSearchBox);
	Urb.$searchSubmit.on('click', function() { console.log('test');Urb.$searchForm.submit(); } );
	Urb.$searchForm.on('submit', Urb.search);
	//Urb.$search.on('focus', Urb.startSearching);
	Urb.$search.on('blur', Urb.cancelSearching);
	Urb.$search.on('input', Urb.changeSearch);
	Urb.$window.on('load', Urb.setupSearch);
} );