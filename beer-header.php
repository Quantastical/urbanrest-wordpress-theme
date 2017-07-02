			<header class="page-header beer-header" role="banner">
				<?php the_title( '<h2 class="beer-title">', '</h2>' ); ?>

				<div class="beer-meta">
<?php $styles = get_the_terms( $post->ID, 'beer_style' ); ?>
<?php if( $styles ): ?>
					<div class="beer-style row">
						<p class="col-xs-4 col-sm-2">Style</p>
						<p class="col-xs-8 col-sm-10">
<?php 	foreach( $styles as $style ) : ?>
							<span><?php echo $style->name; ?></span>
<?php 	endforeach; ?>
						</p>
					</div>
<?php endif; ?>
					<div class="beer-profile">
						<dl class="row">
<?php $alcohol = get_post_meta($post->ID, 'alcohol'); ?>
<?php if( !empty($alcohol[0]) ) : ?>
							<dt class="col-xs-4 col-sm-2">Alcohol</dt>
							<dd class="col-xs-8 col-sm-4">
								<?php echo $alcohol[0]; ?>% <abbr title="Alcohol By Volume">ABV</abbr>
							</dd>
<?php endif; ?>
<?php $bitterness = get_post_meta($post->ID, 'bitterness'); ?>
<?php if( !empty($bitterness[0]) ) : ?>
							<dt class="col-xs-4 col-sm-2">Bitterness</dt>
							<dd class="col-xs-8 col-sm-4">
								<?php echo $bitterness[0]; ?> <abbr title="International Bittering Units">IBUs</abbr>
							</dd>
<?php endif; ?>
<?php $gravity = get_post_meta($post->ID, 'gravity'); ?>
<?php if( !empty($gravity[0]) ) : ?>
							<dt class="col-xs-4 col-sm-2">Gravity</dt>
							<dd class="col-xs-8 col-sm-4">
								<?php echo $gravity[0]; ?> <abbr title="Original Gravity">OG</abbr>/<abbr title="Starting Gravity">SG</abbr>
							</dd>
<?php endif; ?>
<?php $color = get_post_meta($post->ID, 'color'); ?>
<?php if( !empty($color[0]) ) : ?>
							<dt class="col-xs-4 col-sm-2">Color</dt>
							<dd class="col-xs-8 col-sm-4">
								<?php echo $color[0]; ?> <abbr title="Standard Reference Method">SRM</abbr>/<abbr title="Lovibond">&deg;L</abbr>
							</dd>
<?php endif; ?>
						</dl>
					</div>
				</div>
			</header>
