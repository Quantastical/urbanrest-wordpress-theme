jQuery( function( $ ) {
	$('#on_tap thead .title').text('On Tap');
	$('#on_tap tr').each(function() {
		var $tr = $(this);
		var $titleColumn = $tr.find('.title'); // indices are zero-based here
		var $abvColumn = $tr.find('.abv');
		$titleColumn.detach().insertAfter($abvColumn);
	});
} );