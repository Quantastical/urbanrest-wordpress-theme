<?php
function urbanrest_setting_logo() {
	// Artwork -> Icons -> Logo
	echo '<input type="text" id="urbanrest_setting_logo" name="urbanrest_setting_logo" value="' . get_option( 'urbanrest_setting_logo' ) . '" />';
	echo '<span class="wp-media-buttons">';
	echo '	<a href="#urbanrest_setting_logo" class="button view_image">View Image</a>';
	echo '	<a href="#urbanrest_setting_logo" class="button add_media" data-editor="content" title="Add Media">';
	echo '		<span class="wp-media-buttons-icon"></span>';
	echo '		Add Media';
	echo '	</a>';
	echo '</span>';
	echo '<p class="description" id="urbanrest_setting_logo_description">1-Color Black on Transparent PNG</p>';
}

function urbanrest_setting_apple_touch_icon() {
	// Artwork -> Icons -> Apple Touch Icon
	echo '<input type="text" id="urbanrest_setting_apple_touch_icon" name="urbanrest_setting_apple_touch_icon" value="' . get_option( 'urbanrest_setting_apple_touch_icon' ) . '" />';
	echo '<span class="wp-media-buttons">';
	echo '	<a href="#urbanrest_setting_apple_touch_icon" class="button view_image">View Image</a>';
	echo '	<a href="#urbanrest_setting_apple_touch_icon" class="button add_media" data-editor="content" title="Add Media">';
	echo '		<span class="wp-media-buttons-icon"></span>';
	echo '		Add Media';
	echo '	</a>';
	echo '</span>';
	echo '<p class="description" id="urbanrest_setting_apple_touch_icon_description">1024&times;1024px</p>';
}

function urbanrest_setting_apple_touch_startup_image() {
	// Artwork -> Icons -> Apple Touch Startup Image
	echo '<input type="text" id="urbanrest_setting_apple_touch_startup_image" name="urbanrest_setting_apple_touch_startup_image" value="' . get_option( 'urbanrest_setting_apple_touch_startup_image' ) . '" />';
	echo '<span class="wp-media-buttons">';
	echo '	<a target="_blank" href="#urbanrest_setting_apple_touch_startup_image" class="button view_image">View Image</a>';
	echo '	<a href="#urbanrest_setting_apple_touch_startup_image" class="button add_media" data-editor="content" title="Add Media">';
	echo '		<span class="wp-media-buttons-icon"></span>';
	echo '		Add Media';
	echo '	</a>';
	echo '</span>';
	echo '<p class="description" id="urbanrest_setting_apple_touch_startup_image_description">1242&times;2208px or 2208&times;1242px PNG</p>';
}

function urbanrest_setting_coordinates() {
	// Company -> Location -> Coordinates
	echo '<input type="text" name="urbanrest_setting_latitude" id="urbanrest_setting_latitude" value="' . get_option( 'urbanrest_setting_latitude' ) . '" class="regular-text ltr" />';
	echo '<input type="text" name="urbanrest_setting_longitude" id="urbanrest_setting_longitude" value="' . get_option( 'urbanrest_setting_longitude' ) . '" class="regular-text ltr" />';
	echo '<span class="wp-media-buttons">';
	echo '	<a target="_blank" href="#urbanrest_setting_latitude" class="button use_address">Use Address</a>';
	echo '</span>';
}

function urbanrest_setting_country() {
	// Company -> Location -> Country
	echo '<input type="text" name="urbanrest_setting_country" id="urbanrest_setting_country" value="' . get_option( 'urbanrest_setting_country' ) . '" class="regular-text ltr" />';
}

function urbanrest_setting_hours_of_operation() {
	// Company -> Contact -> Hours of Operation
	echo '<div class="hours_of_operation">';
	echo '<div>';
	echo '	<label>Monday</label>';
	//echo '	<label>Start</label>';
	echo '	<input type="time" name="urbanrest_setting_monday_start_time" id="urbanrest_setting_monday_start_time" value="' . get_option( 'urbanrest_setting_monday_start_time' ) . '" class="ltr" />';
	//echo '	<label>End</label>';
	echo '	<span>to</span>';
	echo '	<input type="time" name="urbanrest_setting_monday_end_time" id="urbanrest_setting_monday_end_time" value="' . get_option( 'urbanrest_setting_monday_end_time' ) . '" class="ltr" />';
	echo '</div>';
	echo '<div>';
	echo '	<label>Tuesday</label>';
	//echo '	<label>Start</label>';
	echo '	<input type="time" name="urbanrest_setting_tuesday_start_time" id="urbanrest_setting_tuesday_start_time" value="' . get_option( 'urbanrest_setting_tuesday_start_time' ) . '" class="ltr" />';
	//echo '	<label>End</label>';
	echo '	<span>to</span>';
	echo '	<input type="time" name="urbanrest_setting_tuesday_end_time" id="urbanrest_setting_tuesday_end_time" value="' . get_option( 'urbanrest_setting_tuesday_end_time' ) . '" class="ltr" />';
	echo '</div>';
	echo '<div>';
	echo '	<label>Wednesday</label>';
	//echo '	<label>Start</label>';
	echo '	<input type="time" name="urbanrest_setting_wednesday_start_time" id="urbanrest_setting_wednesday_start_time" value="' . get_option( 'urbanrest_setting_wednesday_start_time' ) . '" class="ltr" />';
	//echo '	<label>End</label>';
	echo '	<span>to</span>';
	echo '	<input type="time" name="urbanrest_setting_wednesday_end_time" id="urbanrest_setting_wednesday_end_time" value="' . get_option( 'urbanrest_setting_wednesday_end_time' ) . '" class="ltr" />';
	echo '</div>';
	echo '<div>';
	echo '	<label>Thursday</label>';
	//echo '	<label>Start</label>';
	echo '	<input type="time" name="urbanrest_setting_thursday_start_time" id="urbanrest_setting_thursday_start_time" value="' . get_option( 'urbanrest_setting_thursday_start_time' ) . '" class="ltr" />';
	//echo '	<label>End</label>';
	echo '	<span>to</span>';
	echo '	<input type="time" name="urbanrest_setting_thursday_end_time" id="urbanrest_setting_thursday_end_time" value="' . get_option( 'urbanrest_setting_thursday_end_time' ) . '" class="ltr" />';
	echo '</div>';
	echo '<div>';
	echo '	<label>Friday</label>';
	//echo '	<label>Start</label>';
	echo '	<input type="time" name="urbanrest_setting_friday_start_time" id="urbanrest_setting_friday_start_time" value="' . get_option( 'urbanrest_setting_friday_start_time' ) . '" class="ltr" />';
	//echo '	<label>End</label>';
	echo '	<span>to</span>';
	echo '	<input type="time" name="urbanrest_setting_friday_end_time" id="urbanrest_setting_friday_end_time" value="' . get_option( 'urbanrest_setting_friday_end_time' ) . '" class="ltr" />';
	echo '</div>';
	echo '<div>';
	echo '	<label>Saturday</label>';
	//echo '	<label>Start</label>';
	echo '	<input type="time" name="urbanrest_setting_saturday_start_time" id="urbanrest_setting_saturday_start_time" value="' . get_option( 'urbanrest_setting_saturday_start_time' ) . '" class="ltr" />';
	//echo '	<label>End</label>';
	echo '	<span>to</span>';
	echo '	<input type="time" name="urbanrest_setting_saturday_end_time" id="urbanrest_setting_saturday_end_time" value="' . get_option( 'urbanrest_setting_saturday_end_time' ) . '" class="ltr" />';
	echo '</div>';
	echo '<div>';
	echo '	<label>Sunday</label>';
	//echo '	<label>Start</label>';
	echo '	<input type="time" name="urbanrest_setting_sunday_start_time" id="urbanrest_setting_sunday_start_time" value="' . get_option( 'urbanrest_setting_sunday_start_time' ) . '" class="ltr" />';
	//echo '	<label>End</label>';
	echo '	<span>to</span>';
	echo '	<input type="time" name="urbanrest_setting_sunday_end_time" id="urbanrest_setting_sunday_end_time" value="' . get_option( 'urbanrest_setting_sunday_end_time' ) . '" class="ltr" />';
	echo '</div>';
	echo '</div>';
}

function urbanrest_setting_street_address() {
	// Company -> Location -> Street Address
	echo '<input type="text" name="urbanrest_setting_street_address" id="urbanrest_setting_street_address" value="' . get_option( 'urbanrest_setting_street_address' ) . '" class="regular-text ltr" />';
}

function urbanrest_setting_favicon() {
	// Artwork -> Icons -> Favicon
	echo '<input type="text" id="urbanrest_setting_favicon" name="urbanrest_setting_favicon" value="' . get_option( 'urbanrest_setting_favicon' ) . '" />';
	echo '<span class="wp-media-buttons">';
	echo '	<a href="#urbanrest_setting_favicon" class="button view_image">View Image</a>';
	echo '	<a href="#urbanrest_setting_favicon" id="urbanrest_setting_favicon" class="button add_media" data-editor="content" title="Add Media">';
	echo '		<span class="wp-media-buttons-icon"></span>';
	echo '		Add Media';
	echo '	</a>';
	echo '</span>';
	echo '<p class="description" id="urbanrest_setting_favicon_description">16&times;16 &ndash; 256&times;256 <a href="http://icoconvert.com" target="_blank">Multi-Size ICO</a></p>';
}

function urbanrest_setting_facebook_opengraph_image() {
	// Artwork -> Icons -> Facebook OpenGraph Image
	echo '<input type="text" id="urbanrest_setting_facebook_opengraph_image" name="urbanrest_setting_facebook_opengraph_image" value="' . get_option( 'urbanrest_setting_facebook_opengraph_image' ) . '" />';
	echo '<input type="hidden" id="urbanrest_setting_facebook_opengraph_image_mime" name="urbanrest_setting_facebook_opengraph_image_mime" value="' . get_option( 'urbanrest_setting_facebook_opengraph_image_mime' ) . '" />';
	echo '<input type="hidden" id="urbanrest_setting_facebook_opengraph_image_width" name="urbanrest_setting_facebook_opengraph_image_width" value="' . get_option( 'urbanrest_setting_facebook_opengraph_image_width' ) . '" />';
	echo '<input type="hidden" id="urbanrest_setting_facebook_opengraph_image_height" name="urbanrest_setting_facebook_opengraph_image_height" value="' . get_option( 'urbanrest_setting_facebook_opengraph_image_height' ) . '" />';
	echo '<span class="wp-media-buttons">';
	echo '	<a href="#urbanrest_setting_facebook_opengraph_image" class="button view_image">View Image</a>';
	echo '	<a href="#urbanrest_setting_facebook_opengraph_image" class="button add_media" data-editor="content" title="Add Media">';
	echo '		<span class="wp-media-buttons-icon"></span>';
	echo '		Add Media';
	echo '	</a>';
	echo '</span>';
	echo '<p class="description" id="urbanrest_setting_facebook_opengraph_image_description">1500&times;1500px 5MB PNG</p>';
}

function urbanrest_setting_fax_number() {
	// Company -> Contact -> Fax Number
	echo '<input type="text" name="urbanrest_setting_fax_number" id="urbanrest_setting_fax_number" value="' . get_option( 'urbanrest_setting_fax_number' ) . '" class="regular-text ltr" data-input-mask="(999) 999-9999" />';
}

function urbanrest_setting_locality() {
	// Company -> Location -> Locality
	echo '<input type="text" name="urbanrest_setting_locality" id="urbanrest_setting_locality" value="' . get_option( 'urbanrest_setting_locality' ) . '" class="regular-text ltr" />';
}

function urbanrest_setting_phone_number() {
	// Company -> Contact -> Phone Number
	echo '<input type="text" name="urbanrest_setting_phone_number" id="urbanrest_setting_phone_number" value="' . get_option( 'urbanrest_setting_phone_number' ) . '" class="regular-text ltr" data-input-mask="(999) 999-9999" />';
}

function urbanrest_setting_postal_code() {
	// Company -> Location -> Postal Code
	echo '<input type="text" name="urbanrest_setting_postal_code" id="urbanrest_setting_postal_code" value="' . get_option( 'urbanrest_setting_postal_code' ) . '" class="regular-text ltr" />';
}

function urbanrest_setting_region() {
	// Company -> Location -> Region
	echo '<input type="text" name="urbanrest_setting_region" id="urbanrest_setting_region" value="' . get_option( 'urbanrest_setting_region' ) . '" class="regular-text ltr" />';
}

function urbanrest_setting_twitter_card_image() {
	// Artwork -> Icons -> Twitter Image
	echo '<input type="text" id="urbanrest_setting_twitter_card_image" name="urbanrest_setting_twitter_card_image" value="' . get_option( 'urbanrest_setting_twitter_card_image' ) . '" />';
	echo '<span class="wp-media-buttons">';
	echo '	<a href="#urbanrest_setting_twitter_card_image" class="button view_image">View Image</a>';
	echo '	<a href="#urbanrest_setting_twitter_card_image" class="button add_media" data-editor="content" title="Add Media">';
	echo '		<span class="wp-media-buttons-icon"></span>';
	echo '		Add Media';
	echo '	</a>';
	echo '</span>';
	echo '<p class="description" id="urbanrest_setting_twitter_card_image_description">300&times;300px 1MB PNG</p>';
}
?>