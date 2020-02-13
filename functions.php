<?php 

update_option('siteurl','banyansite.nuvi.com';);
update_option('home','banyansite.nuvi.com';);

function noQuery() {
	wp_deregister_script('jquery');	
} add_action('wp_enqueue_scripts', 'noQuery');

include_once('includes/php/_reset.inc.php');
include_once('includes/php/_tags.inc.php');

register_nav_menus( array( 'primary' => __( 'Primary Navigation' ), ) );
register_nav_menus( array( 'industry' => __( 'Industries Navigation' ), ) );
register_nav_menus( array( 'footer' => __( 'Footer Page Navigation' ), ) );
register_nav_menus( array( 'footer2' => __( '2nd Footer Page Navigation' ), ) );

add_theme_support('post-thumbnails');
add_image_size( '480', 480, 9999, FALSE );
add_image_size( '768', 768, 9999, FALSE );
//add_image_size( '1024', 1024, 9999, FALSE ); WP Does this as Large Size
add_image_size( '1440', 1440, 9999, FALSE );
add_image_size( '1920', 1920, 9999, FALSE );
add_image_size( '2560', 2560, 9999, FALSE );

if( function_exists('acf_add_options_page') ) {

	acf_add_options_page();
	acf_add_options_page('Offers');
	acf_add_options_page('Webinar');
	
}

add_theme_support( 'post-thumbnails' );
add_post_type_support( 'page', 'excerpt' );

function cc_mime_types($mimes) {
  $mimes['svg'] = 'image/svg+xml';
  return $mimes;
}
add_filter('upload_mimes', 'cc_mime_types');

// Formidable and Pardot Integration
include('includes/php/_formidable.inc.php');

// Resources Taxonomy
include('includes/php/_resources.inc.php');