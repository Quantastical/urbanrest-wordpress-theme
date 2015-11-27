<h3>Notifications</h3>
<table class="form-table">
	<tr>
		<th><label for="urb_newsletter">Newsletter</label></th>
		<td>
			<label>
				<input name="urb_newsletter" id="urb_newsletter" type="checkbox"<?php echo (isset($_POST['urb_newsletter']) || get_the_author_meta( 'urb_newsletter', $user->ID )) ? ' checked="checked"' : ''; ?> />
				Notify me of beer releases and news
			</label>
		</td>
	</tr>
</table>