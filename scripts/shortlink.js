jQuery(function($){
	var $editSlugBox = $('#edit-slug-box');

	function isSlugBoxActive() {
		return $editSlugBox.length > 0 && $('#edit-slug-buttons', $editSlugBox).length > 0;
	}

	var shortlinkBoxInterval = setInterval(function() {
		if( isSlugBoxActive() ) {
			clearInterval(shortlinkBoxInterval);
			setupShortlinkBox();
		} else {
			$editSlugBox = $('#edit-slug-box');
		}
	}, 1000);

	function setupShortlinkBox() {
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

		if($shortlink.length > 0) {
			$('+ button', $shortlink)
				.addClass('edit')
				.detach()
				.appendTo( $('#edit-shortlink-buttons', $editShortlinkBox) )
				.text('Edit Shortlink')
				.removeAttr('onclick');
		} else {
			$shortlink = $('<input type="hidden" id="shortlink" value="' + _URB.shortlinkUrl + '" />')
			$shortlink.insertAfter('#edit-shortlink-buttons');
			$('<a class="button button-small edit" href="#">Edit Shortlink</a>').appendTo( $('#edit-shortlink-buttons', $editShortlinkBox) );
		}

		$editShortlinkBox.on('click', '#edit-shortlink-buttons .edit', function(){
			var $editableShortlinkSlug = $('#editable-shortlink-slug');
			var value = $editableShortlinkSlug.text();

			var $sampleShortlink = $('#sample-shortlink');
			$sampleShortlink
				.data('cancel', $sampleShortlink.html())
				.data('originalValue', $sampleShortlink.text())
				.html(_URB.shortlinkDomain + '<span id="editable-shortlink-slug"><input type="text" id="new-shortlink-slug" value="' + value + '" autocomplete="off"></span>');

			var $editShortlinkButtons = $('#edit-shortlink-buttons');
			$editShortlinkButtons
				.data('edit', $editShortlinkButtons.html())
				.html('<button type="button" class="save button button-small">OK</button> <button type="button" class="cancel button-link">Cancel</button>');

			$('#new-shortlink-slug').select();
		});

		$editShortlinkBox.on('click', '#edit-shortlink-buttons .save', function() {
			var $newShortlinkSlug = $('#new-shortlink-slug');
			var $sampleShortlink = $('#sample-shortlink');

			$saveButton = $(this);
			$saveButton.text('Saving...').attr('disabled',true);
			$saveButton.siblings('.cancel').hide();

			var slug = $newShortlinkSlug.val()
				.replace(/\s+/g, '-')           // Replace spaces with -
				.replace(/[^\w\-]+/g, '')       // Remove all non-word chars
				.replace(/\-\-+/g, '-')         // Replace multiple - with single -
				.replace(/^-+/, '')             // Trim - from start of text
				.replace(/-+$/, '');
			
			// Check to make sure it was changed before hitting the server
			if((_URB.shortlinkDomain + slug).trim() !== $sampleShortlink.data('originalValue').trim()) {
				$.ajax({
					type: 'POST',
					url: _URB.url,
					data: {
						'action': 'saveshortlink',
						'nonce': _URB.nonce,
						'slug': slug,
						'post_id': $('#post_ID').val()
					},
					dataType: 'json',
					success: function(response){
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

						$saveButton.text('OK').attr('disabled',false);
						$saveButton.siblings('.cancel').show();
					}
				});
			} else {
				$sampleShortlink.html($sampleShortlink.data('cancel')).removeData('cancel');

				var $editShortlinkButtons = $('#edit-shortlink-buttons');
				$editShortlinkButtons.html($editShortlinkButtons.data('edit')).removeData('edit');
			}
		});

		$editShortlinkBox.on('click', '#edit-shortlink-buttons .cancel', function() {
			var $sampleShortlink = $('#sample-shortlink');
			$sampleShortlink.html($sampleShortlink.data('cancel')).removeData('cancel');
			
			var $editShortlinkButtons = $('#edit-shortlink-buttons');
			$editShortlinkButtons.html($editShortlinkButtons.data('edit')).removeData('edit');
		});
	}
});