			<div class="page-content">
				<time class="published-date" datetime="<?php the_time('c'); ?>">
					<span class="day"><?php the_time('M j'); ?></span>
					<span class="year"><?php the_time('Y'); ?></span>
				</time>
				<?php the_excerpt(); ?>
			</div>
