<?php
$sitemaps = array(
	array(
		'file_suffix' => 'pages',
		'post_type'   => 'page'
	),
	array(
		'file_suffix' => 'posts',
		'post_type'   => 'post'
	),
	array(
		'file_suffix' => 'beers',
		'post_type'   => 'beer'
	)
);

header("HTTP/1.1 200 OK");
header('Content-Type: application/xml');
echo '<?xml version="1.0" encoding="UTF-8"?>';
?>
<?php if( $sitemap_type === 'index' ) : ?>
<?php 	echo '<?xml-stylesheet type="text/xsl" href="' . get_stylesheet_directory_uri() . '/styles/xsl/xml-sitemap-index.xsl" ?>'; ?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<?php
foreach( $sitemaps as $sitemap ) :
	$recent_posts = wp_get_recent_posts( array(
		'numberposts' => 1,
		'orderby' => 'modified',
		'order' => 'DESC',
		'post_type' => $sitemap['post_type'],
		'post_status' => 'any'
	) );

	if( count($recent_posts) === 1 ) :
?>
	<sitemap>
		<loc><?php echo get_site_url(); ?>/sitemap-<?php echo $sitemap['file_suffix'] ?>.xml</loc>
		<lastmod><?php echo date( 'c', strtotime($recent_posts[0]['post_modified_gmt']) ); ?></lastmod>
	</sitemap>
<?php
	endif;
endforeach;

/*
$recent_pages = wp_get_recent_posts( array(
	'numberposts' => 1,
	'orderby' => 'modified',
	'order' => 'DESC',
	'post_type' => 'page',
	'post_status' => 'publish'
) );
?>
<?php if( count($recent_pages) === 1 ) : ?>
	<sitemap>
		<loc><?php echo get_site_url(); ?>/sitemap-pages.xml</loc>
		<lastmod><?php echo date( 'c', strtotime($recent_pages[0]['post_modified_gmt']) ); ?></lastmod>
	</sitemap>
<?php endif; ?>

<?php
$recent_posts = wp_get_recent_posts( array(
	'numberposts' => 1,
	'orderby' => 'modified',
	'order' => 'DESC',
	'post_type' => 'post',
	'post_status' => 'publish'
) );
?>
<?php if( count($recent_posts) === 1 ) : ?>
	<sitemap>
		<loc><?php echo get_site_url(); ?>/sitemap-posts.xml</loc>
		<lastmod><?php echo date('c', strtotime($recent_posts[0]['post_modified_gmt']) ); ?></lastmod>
	</sitemap>
<?php endif;*/ ?>
</sitemapindex>
<?php elseif( $sitemap_type === 'urlset' ) : ?>
<?php 	echo '<?xml-stylesheet type="text/xsl" href="' . get_stylesheet_directory_uri() . '/styles/xsl/xml-sitemap.xsl" ?>'; ?>
<?php
		$posts = get_posts( array(
			'posts_per_page' => 50000,
			'offset' => 0,
			'orderby' => 'date',
			'order' => 'DESC',
			'post_type' => $post_type,
			'post_status' => 'any'
		) );
?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<?php 	if( count( $posts ) > 0 ) : ?>
<?php 		foreach( $posts as $post ) : ?>
	<url>
		<loc><?php echo get_permalink( $post->ID ); ?></loc>
		<lastmod><?php echo date('c', strtotime($post->post_modified_gmt) ); ?></lastmod>
		<changefreq>monthly</changefreq>
		<priority>0.5</priority>
	</url>
<?php 		endforeach; ?>
<?php 	endif; ?>
</urlset>
<?php endif; ?>