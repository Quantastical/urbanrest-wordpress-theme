# Urbanrest WordPress Theme

A WordPress theme for Ferndale, Michigan's [Urbanrest Brewing Company](http://urbanrestbrewing.com).

Note: If using FileZilla to upload the theme, make sure the local side is filtered to exclude the following items (see [this answer](http://superuser.com/a/997904) for assistance).

.git
.git-ignore
.sass-cache

Migration Scripts

UPDATE wordpress_options
SET option_value = replace(option_value, 'local.urbanrest.com', 'test.urbanrest.com')
WHERE option_name = 'home'
OR option_name = 'siteurl';

UPDATE wordpress_posts
SET guid = replace(guid, 'local.urbanrest.com','test.urbanrest.com');

UPDATE wordpress_posts
SET post_content = replace(post_content, 'local.urbanrest.com', 'test.urbanrest.com');

UPDATE wordpress_postmeta
SET meta_value = replace(meta_value,'local.urbanrest.com','test.urbanrest.com');