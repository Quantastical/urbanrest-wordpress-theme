			<div class="page-content post-content">
				<?php
					/* translators: %s: Name of current post */
					the_content( sprintf(
						'Continue reading...',
						the_title( '<span class="screen-reader-text">', '</span>', false )
					) );

					wp_link_pages( array(
						'before'      => '<div class="page-links"><span class="page-links-title">Pages:</span>',
						'after'       => '</div>',
						'link_before' => '<span>',
						'link_after'  => '</span>',
						'pagelink'    => '<span class="screen-reader-text">Page </span>%',
						'separator'   => '<span class="screen-reader-text">, </span>',
					) );
				?>
			</div>