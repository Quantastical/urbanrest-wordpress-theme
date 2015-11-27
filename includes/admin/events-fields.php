<!--
<p>
	<label for="all_day">All Day Event:</label>
	<input type="checkbox" id="all_day" name="all_day" value="true"<?php echo ($all_day) ? ' checked="checked"' : ''; ?> />
	<script type="text/javascript">
		jQuery(function($){
			$('#all_day').on('change',function(){
				$('.label_time, .start_datetime_time, .end_datetime_time').css('display', ($(this).is(':checked')) ? 'none' : '');
			});
		});
	</script>
</p>
<p>
	<label for="start_datetime_month">Start Date<span class="label_time"> &amp; Time</span>:</label>
	<span class="start_datetime_date">
		<select id="start_datetime_month" name="start_datetime_month">
<?php for( $month = 1; $month <= 12; $month++ ) : ?>
			<option value="<?php echo str_pad($month, 2, '0'); ?>"<?php echo ($start_datetime->format('m') == $month) ? ' selected="selected"' : ''; ?>><?php echo date('m-M', mktime(0, 0, 0, $month, 10)); ?></option>
<?php endfor; ?>
		</select>
		<input id="start_datetime_day" name="start_datetime_day" type="number" min="1" max="31" step="1" maxlength="2" value="<?php echo $start_datetime->format('d'); ?>" />
		,
		<input id="start_datetime_year" name="start_datetime_year" type="number" min="2000" max="2100" step="1" maxlength="4" value="<?php echo $start_datetime->format('Y'); ?>" />
	</span>
	<span class="start_datetime_time">
		@
		<input id="start_datetime_hour" name="start_datetime_hour" type="number" min="1" max="24" step="1" maxlength="2" value="<?php echo $start_datetime->format('H'); ?>" />
		:
		<input id="start_datetime_minute" name="start_datetime_minute" type="number" min="0" max="59" step="1" maxlength="2"value="<?php echo $start_datetime->format('i'); ?>" />
	</span>
</p>
<p>
	<label for="end_datetime_month">End Date<span class="label_time"> &amp; Time</span>:</label>
	<span class="end_datetime_date">
		<select id="end_datetime_month" name="end_datetime_month">
<?php for( $month = 1; $month <= 12; $month++ ) : ?>
			<option value="<?php echo str_pad($month, 2, '0'); ?>"<?php echo ($end_datetime->format('m') == $month) ? ' selected="selected"' : ''; ?>><?php echo date('m-M', mktime(0, 0, 0, $month, 10)); ?></option>
<?php endfor; ?>
		</select>
		<input id="end_datetime_day" name="end_datetime_day" type="number" min="1" max="31" step="1" maxlength="2" value="<?php echo $end_datetime->format('d'); ?>" />
		,
		<input id="end_datetime_year" name="end_datetime_year" type="number" min="2000" max="2100" step="1" maxlength="4" value="<?php echo $end_datetime->format('Y'); ?>" />
	</span>
	<span class="end_datetime_time">
		@
		<input id="end_datetime_hour" name="end_datetime_hour" type="number" min="1" max="24" step="1" maxlength="2" value="<?php echo $end_datetime->format('H'); ?>" />
		:
		<input id="end_datetime_minute" name="end_datetime_minute" type="number" min="0" max="59" step="1" maxlength="2" value="<?php echo $end_datetime->format('i'); ?>" />
	</span>
</p>
-->