<div class="wrap">
	<h2>Artwork &amp; Images</h2>
	<p>Upload <a href="http://compresspng.com">compressed PNG</a> images using tranparency where applicable</p>
	<form method="POST" action="options.php" novalidate="novalidate">
<?php
settings_fields( 'urbanrest_admin_page_artwork' );
do_settings_sections( 'urbanrest_admin_page_artwork' );
submit_button();
?>
	</form>
</div>
<script type="text/javascript">
jQuery( function( $ ) {
	$('.add_media').click( function(e) {
		e.preventDefault();

		var button = this,
			image = wp.media( {
				title: 'Upload Image',
				multiple: false
			} )
				.open( )
					.on('select', function(e) {
							// This will return the selected image from the Media Uploader, the result is an object
							var uploaded_image = image.state().get('selection').first();
							// We convert uploaded_image to a JSON object to make accessing it easier
							// Output to the console uploaded_image
							console.log(uploaded_image);
							// Let's assign the url value to the input field
							$( $(button).attr('href') ).val(uploaded_image.attributes.url);
							$( $(button).attr('href') + '_mime' ).val(uploaded_image.attributes.mime);
							$( $(button).attr('href') + '_width' ).val(uploaded_image.attributes.width);
							$( $(button).attr('href') + '_height' ).val(uploaded_image.attributes.height);
					} );
	} );

	$('.view_image').click( function(e) {
		e.preventDefault();

		var button = this;
		var image = $( $(button).attr('href') ).val();
		if(image)
			window.open(image);
	} );
} );
</script>