			<div class="page-content">
<?php foreach(array('Post', 'Page', 'Beer') as $section) : ?>
<?php
	$args = array(
		'type' => ($section == 'Post') ? 'postbypost' : 'alpha', // yearly, monthly, weekly, daily, postbypost, alpha
		'limit' => '',
		'format' => 'html', // html, option, link, custom
		'before' => '',
		'after' => '',
		'show_post_count' => 0, // 1, 0
		'echo' => 0, // 1, 0
		'order' => 'ASC', // ASC, DESC
		'post_type' => strtolower($section)
	);
	$archives = wp_get_archives($args);
?>
<?php 	if(strlen($archives) > 0) : ?>
				<section>
					<h2><?php echo $section . 's'; ?></h2>
					<ul class="page-grid">
<?php 			echo $archives; ?>
					</ul>
				</section>
<?php 	endif; ?>
<?php endforeach; ?>
			</div>
