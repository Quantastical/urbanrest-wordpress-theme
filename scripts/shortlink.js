jQuery(function($){
	var $editShortlinkBox = $(
		'<div id="edit-shortlink-box" class="hide-if-no-js">' +
		'	<strong>Shortlink:</strong>' +
		'	<span id="sample-shortlink">' +
		'		<a href="' + _URB.shortlinkUrl + '">' + _URB.shortlinkDomain + '<span id="editable-shortlink-slug">' + _URB.shortlinkSlug + '</span>' + '</a>' +
		'	</span>' +
		'	‎<span id="edit-shortlink-buttons">' +
		'	</span>' +
		'</div>'
	);

	$('#edit-slug-box').after($editShortlinkBox);
	$('.edit-slug.button').text('Edit Permalink');

	var $shortlink = $('#shortlink');

	$('+ a', $shortlink)
		.addClass('edit')
		.detach()
		.appendTo( $('#edit-shortlink-buttons', $editShortlinkBox) )
		.text('Edit Shortlink')
		.removeAttr('onclick');

	$editShortlinkBox.on('click', '#edit-shortlink-buttons .edit', function(){
		var $editableShortlinkSlug = $('#editable-shortlink-slug');
		var value = $editableShortlinkSlug.text();

		var $sampleShortlink = $('#sample-shortlink');
		$sampleShortlink
			.data('cancel', $sampleShortlink.html())
			.html(_URB.shortlinkDomain + '<span id="editable-shortlink-slug"><input type="text" id="new-shortlink-slug" value="' + value + '" autocomplete="off"></span>')

		var $editShortlinkButtons = $('#edit-shortlink-buttons');
		$editShortlinkButtons
			.data('edit', $editShortlinkButtons.html())
			.html('<button type="button" class="save button button-small">OK</button> <button type="button" class="cancel button-link">Cancel</button>');

	});

	$editShortlinkBox.on('click', '#edit-shortlink-buttons .save', function() {
		var $newShortlinkSlug = $('#new-shortlink-slug');
		$.ajax({
			type: 'POST',
			url: _URB.url,
			data: {
				'action': 'saveshortlink',
				'nonce': _URB.nonce,
				'slug': $newShortlinkSlug.val(),
				'post_id': $('#post_ID').val()
			},
			dataType: 'json',
			success: function(response){
				console.log(response);
				if(response.success) {
					var newSlug = response.data.slug;
					var newUrl = _URB.shortlinkDomain + newSlug;

					var $sampleShortlink = $('#sample-shortlink');
					$sampleShortlink.html(
						'<a href="' + newUrl + '">' + _URB.shortlinkDomain + '<span id="editable-shortlink-slug">' + newSlug + '</span></a>'
					).removeData('cancel');
					
					var $editShortlinkButtons = $('#edit-shortlink-buttons');
					$editShortlinkButtons.html($editShortlinkButtons.data('edit')).removeData('edit');
				} else {
					console.log(response);
				}
			}
		});
	});

	$editShortlinkBox.on('click', '#edit-shortlink-buttons .cancel', function() {
		var $sampleShortlink = $('#sample-shortlink');
		$sampleShortlink.html($sampleShortlink.data('cancel')).removeData('cancel');
		
		var $editShortlinkButtons = $('#edit-shortlink-buttons');
		$editShortlinkButtons.html($editShortlinkButtons.data('edit')).removeData('edit');
	});
});