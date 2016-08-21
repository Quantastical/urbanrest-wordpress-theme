<div class="wrap">
	<h2>Company Information</h2>
	<p>General information pertaining to your business</p>
	<form method="POST" action="options.php" novalidate="novalidate">
<?php
settings_fields( 'urbanrest_admin_page_company' );
do_settings_sections( 'urbanrest_admin_page_company' );
submit_button();
?>
	</form>
</div>

<script type="text/javascript">
jQuery(function($){
	$('.use_address').click(function(e){
		e.preventDefault();

		var data = {};
		$(this).closest('form').serializeArray().map(function(x){data[x.name] = x.value;});
		data.action = 'getgeocode';
		data.nonce = _URB.nonce;

		$.ajax({
			type: 'POST',
			url: _URB.url,
			data: data,
			dataType: 'json',
			success: function(response){
				console.log(response);

				if(response.success && response.data.results.length > 1) {
					$('#urbanrest_setting_latitude').val(response.data.results[0].geometry.location.lat);
					$('#urbanrest_setting_longitude').val(response.data.results[0].geometry.location.lng);
					$('#qr-code').html('.page-footer:before {content: \'\' !important;}}');
				} else {
					alert( "Error getting Geocode from Google." );
				}
			}
		});
	});
});
</script>