<?php
if( !function_exists( 'urbanrest_admin_init_company' ) ) :
	function urbanrest_admin_init_company( ) {
		// Company
		register_setting(
			'urbanrest_admin_page_company', // $option_group
			'urbanrest_setting_country' // $option_name
			// $sanitize_callback
		);
		register_setting(
			'urbanrest_admin_page_company', // $option_group
			'urbanrest_setting_fax_number' // $option_name
			// $sanitize_callback
		);
		register_setting(
			'urbanrest_admin_page_company', // $option_group
			'urbanrest_setting_friday_start_time' // $option_name
			// $sanitize_callback
		);
		register_setting(
			'urbanrest_admin_page_company', // $option_group
			'urbanrest_setting_friday_end_time' // $option_name
			// $sanitize_callback
		);
		register_setting(
			'urbanrest_admin_page_company', // $option_group
			'urbanrest_setting_latitude' // $option_name
			// $sanitize_callback
		);
		register_setting(
			'urbanrest_admin_page_company', // $option_group
			'urbanrest_setting_locality' // $option_name
			// $sanitize_callback
		);
		register_setting(
			'urbanrest_admin_page_company', // $option_group
			'urbanrest_setting_longitude' // $option_name
			// $sanitize_callback
		);
		register_setting(
			'urbanrest_admin_page_company', // $option_group
			'urbanrest_setting_monday_start_time' // $option_name
			// $sanitize_callback
		);
		register_setting(
			'urbanrest_admin_page_company', // $option_group
			'urbanrest_setting_monday_end_time' // $option_name
			// $sanitize_callback
		);
		register_setting(
			'urbanrest_admin_page_company', // $option_group
			'urbanrest_setting_phone_number' // $option_name
			// $sanitize_callback
		);
		register_setting(
			'urbanrest_admin_page_company', // $option_group
			'urbanrest_setting_postal_code' // $option_name
			// $sanitize_callback
		);
		register_setting(
			'urbanrest_admin_page_company', // $option_group
			'urbanrest_setting_region' // $option_name
			// $sanitize_callback
		);
		register_setting(
			'urbanrest_admin_page_company', // $option_group
			'urbanrest_setting_saturday_start_time' // $option_name
			// $sanitize_callback
		);
		register_setting(
			'urbanrest_admin_page_company', // $option_group
			'urbanrest_setting_saturday_end_time' // $option_name
			// $sanitize_callback
		);
		register_setting(
			'urbanrest_admin_page_company', // $option_group
			'urbanrest_setting_street_address' // $option_name
			// $sanitize_callback
		);
		register_setting(
			'urbanrest_admin_page_company', // $option_group
			'urbanrest_setting_sunday_start_time' // $option_name
			// $sanitize_callback
		);
		register_setting(
			'urbanrest_admin_page_company', // $option_group
			'urbanrest_setting_sunday_end_time' // $option_name
			// $sanitize_callback
		);
		register_setting(
			'urbanrest_admin_page_company', // $option_group
			'urbanrest_setting_thursday_start_time' // $option_name
			// $sanitize_callback
		);
		register_setting(
			'urbanrest_admin_page_company', // $option_group
			'urbanrest_setting_thursday_end_time' // $option_name
			// $sanitize_callback
		);
		register_setting(
			'urbanrest_admin_page_company', // $option_group
			'urbanrest_setting_tuesday_start_time' // $option_name
			// $sanitize_callback
		);
		register_setting(
			'urbanrest_admin_page_company', // $option_group
			'urbanrest_setting_tuesday_end_time' // $option_name
			// $sanitize_callback
		);
		register_setting(
			'urbanrest_admin_page_company', // $option_group
			'urbanrest_setting_wednesday_start_time' // $option_name
			// $sanitize_callback
		);
		register_setting(
			'urbanrest_admin_page_company', // $option_group
			'urbanrest_setting_wednesday_end_time' // $option_name
			// $sanitize_callback
		);
	}

	function urbanrest_admin_page_company() {
		// Admin -> Settings -> Company
		// Location
		add_settings_section(
			'urbanrest_admin_section_location', // $section_id
			'Location', // $title
			'urbanrest_admin_section_location', // $section_callback
			'urbanrest_admin_page_company' // $page
		);

		// Contact
		add_settings_section(
			'urbanrest_admin_section_contact', // $section_id
			'Contact', // $title
			'urbanrest_admin_section_contact', // $section_callback
			'urbanrest_admin_page_company' // $page
		);

		// Form Markup
		include('company-form.php');
	}
	function urbanrest_admin_section_contact() {
		// Company -> Contact
		// Phone Number
		add_settings_field(
			'urbanrest_setting_phone_number', // $setting_id
			'Phone Number', // $setting_title
			'urbanrest_setting_phone_number', // $setting_callback
			'urbanrest_admin_page_company', // $page
			'urbanrest_admin_section_contact', // $section = 'default'
			array() // $args = array()
		);

		// Fax Number
		add_settings_field(
			'urbanrest_setting_fax_number', // $setting_id
			'Fax Number', // $setting_title
			'urbanrest_setting_fax_number', // $setting_callback
			'urbanrest_admin_page_company', // $page
			'urbanrest_admin_section_contact', // $section = 'default'
			array() // $args = array()
		);

		// Hours of Operation
		add_settings_field(
			'urbanrest_setting_hours_of_operation', // $setting_id
			'Hours of Operation', // $setting_title
			'urbanrest_setting_hours_of_operation', // $setting_callback
			'urbanrest_admin_page_company', // $page
			'urbanrest_admin_section_contact', // $section = 'default'
			array() // $args = array()
		);
	}

	function urbanrest_admin_section_location() {
		// Company -> Location
		// Street Address
		add_settings_field(
			'urbanrest_setting_street_address', // $setting_id
			'Street Address', // $setting_title
			'urbanrest_setting_street_address', // $setting_callback
			'urbanrest_admin_page_company', // $page
			'urbanrest_admin_section_location', // $section = 'default'
			array() // $args = array()
		);

		// Locality
		add_settings_field(
			'urbanrest_setting_locality', // $setting_id
			'Locality', // $setting_title
			'urbanrest_setting_locality', // $setting_callback
			'urbanrest_admin_page_company', // $page
			'urbanrest_admin_section_location', // $section = 'default'
			array() // $args = array()
		);

		// Region
		add_settings_field(
			'urbanrest_setting_region', // $setting_id
			'Region', // $setting_title
			'urbanrest_setting_region', // $setting_callback
			'urbanrest_admin_page_company', // $page
			'urbanrest_admin_section_location', // $section = 'default'
			array() // $args = array()
		);

		// Postal Code
		add_settings_field(
			'urbanrest_setting_postal_code', // $setting_id
			'Postal Code', // $setting_title
			'urbanrest_setting_postal_code', // $setting_callback
			'urbanrest_admin_page_company', // $page
			'urbanrest_admin_section_location', // $section = 'default'
			array() // $args = array()
		);

		// Country
		add_settings_field(
			'urbanrest_setting_country', // $setting_id
			'Country', // $setting_title
			'urbanrest_setting_country', // $setting_callback
			'urbanrest_admin_page_company', // $page
			'urbanrest_admin_section_location', // $section = 'default'
			array() // $args = array()
		);

		// Coordinates
		add_settings_field(
			'urbanrest_setting_coordinates', // $setting_id
			'Map Coordinates', // $setting_title
			'urbanrest_setting_coordinates', // $setting_callback
			'urbanrest_admin_page_company', // $page
			'urbanrest_admin_section_location', // $section = 'default'
			array() // $args = array()
		);
	}
endif;
add_action('admin_init', 'urbanrest_admin_init_company');
?>