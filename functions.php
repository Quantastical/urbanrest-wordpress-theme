<?php
if ( !function_exists( 'urbanrest_setup' ) ) :
	function urbanrest_setup() {
		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		// Let WordPress manage the document title.
		add_theme_support( 'title-tag' );

		// This theme uses wp_nav_menu() in two locations.
		register_nav_menus( array(
			'main'   => 'Main Menu',
			'social' => 'Social Media Menu',
			'footer' => 'Footer Menu'
		) );

		// Use default core markup for search form, comment form, and comments
		add_theme_support( 'html5', array(
			'search-form', 'comment-form', 'comment-list', 'gallery', 'caption'
		) );

		// Add main stylesheet
		wp_enqueue_style( 'main', get_stylesheet_uri() );
	}
endif;
add_action( 'after_setup_theme', 'urbanrest_setup' );

if( !function_exists( 'urbanrest_widgets_init' ) ) :
	function urbanrest_widgets_init() {
		register_sidebar( array(
			'name'          => 'Widget Area',
			'id'            => 'sidebar-1',
			'description'   => 'Add widgets here to appear in your sidebar.',
			'before_widget' => '<aside id="%1$s" class="widget %2$s">',
			'after_widget'  => '</aside>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		) );
	}
endif;
add_action( 'widgets_init', 'urbanrest_widgets_init' );