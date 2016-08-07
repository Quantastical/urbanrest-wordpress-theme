			<div class="page-content">
<?php foreach(array('Post', 'Page', 'Beer') as $section) : ?>
				<section>
					<h2><?php echo $section . 's'; ?></h2>
					<ul class="page-grid">
<?php
$args = array(
	'type' => 'postbypost', // yearly, monthly, weekly, daily, postbypost, alpha
	'limit' => '',
	'format' => 'html', // html, option, link, custom
	'before' => '',
	'after' => '',
	'show_post_count' => 0, // 1, 0
	'echo' => 1, // 1, 0
	'order' => 'ASC', // ASC, DESC
	'post_type' => strtolower($section)
);
wp_get_archives($args);
?>
					</ul>
				</section>
<?php endforeach; ?>
			</div>
