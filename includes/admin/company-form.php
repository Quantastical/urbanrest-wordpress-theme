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

		$.post('/wp-content/themes/urbanrest-wordpress-theme/api/geocoding.php', $(this).closest('form').serialize(), function(data){
			$('#urbanrest_setting_latitude').val(data.results[0].geometry.location.lat);
			$('#urbanrest_setting_longitude').val(data.results[0].geometry.location.lng);
		}).fail(function(data) {
			console.log(data);
			alert( "geocoding error" );
		});
	});
});
</script>