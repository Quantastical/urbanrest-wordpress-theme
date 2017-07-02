<?php
// These are recommended settings for .htaccess out in the WordPress installation root
?>

# NON-WWW -> WWW REDIRECT
# HTTP -> HTTPS REDIRECT
RewriteCond %{HTTPS} off [OR]
RewriteCond %{HTTP_HOST} !^www\. [NC]
RewriteCond %{HTTP_HOST} ^(www\.)?(.*)$ [NC]
RewriteRule .* https://www.%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

#BEGIN GZIP COMPRESSION BY THEMIFY BUILDER
<IfModule mod_deflate.c>
#add content typing
AddType application/x-gzip .gz .tgz
AddEncoding x-gzip .gz .tgz

# Insert filters
AddOutputFilterByType DEFLATE text/plain
AddOutputFilterByType DEFLATE text/html
AddOutputFilterByType DEFLATE text/xml
AddOutputFilterByType DEFLATE text/css
AddOutputFilterByType DEFLATE application/xml
AddOutputFilterByType DEFLATE application/xhtml+xml
AddOutputFilterByType DEFLATE application/rss+xml
AddOutputFilterByType DEFLATE application/javascript
AddOutputFilterByType DEFLATE application/x-javascript
AddOutputFilterByType DEFLATE application/x-httpd-php
AddOutputFilterByType DEFLATE application/x-httpd-fastphp
AddOutputFilterByType DEFLATE image/svg+xml

# Drop problematic browsers
BrowserMatch ^Mozilla/4 gzip-only-text/html
BrowserMatch ^Mozilla/4\.0[678] no-gzip
BrowserMatch \bMSI[E] !no-gzip !gzip-only-text/html

# Make sure proxies don't deliver the wrong content
Header append Vary User-Agent env=!dont-vary
</IfModule>
# END GZIP COMPRESSION
## EXPIRES CACHING ##
<IfModule mod_expires.c>
ExpiresActive On
ExpiresDefault "access plus 1 week"
ExpiresByType application/atom+xml "access plus 1 hour" 
ExpiresByType application/font-woff "access plus 1 month" 
ExpiresByType application/pdf "access plus 1 month"
ExpiresByType application/javascript "access plus 1 months"
ExpiresByType application/json "access plus 0 seconds" 
ExpiresByType application/ld+json "access plus 0 seconds" 
ExpiresByType application/rss+xml "access plus 1 hour" 
ExpiresByType application/vnd.ms-fontobject "access plus 1 month" 
ExpiresByType application/x-font-ttf "access plus 1 month" 
ExpiresByType application/x-font-woff "access plus 1 year"
ExpiresByType application/x-javascript "access plus 1 months"
ExpiresByType application/x-shockwave-flash "access plus 1 month"
ExpiresByType application/x-web-app-manifest+json "access plus 0 seconds" 
ExpiresByType application/xml "access plus 0 seconds" 
ExpiresByType audio/ogg "access plus 1 month" 
ExpiresByType font/opentype "access plus 1 month" 
ExpiresByType image/gif "access plus 1 year"
ExpiresByType image/jpeg "access plus 1 year"
ExpiresByType image/jpg "access plus 1 year"
ExpiresByType image/png "access plus 1 year"
ExpiresByType image/svg+xml "access plus 1 month" 
ExpiresByType image/x-icon "access plus 1 year"
ExpiresByType text/cache-manifest "access plus 0 seconds" 
ExpiresByType text/css "access plus 1 month"
ExpiresByType text/html "access plus 1 minute"
ExpiresByType text/javascript "access plus 1 month"
ExpiresByType text/plain "access plus 1 month"
ExpiresByType text/x-component "access plus 1 month" 
ExpiresByType text/x-javascript "access plus 1 month"
ExpiresByType text/xml "access plus 0 seconds" 
ExpiresByType video/mp4 "access plus 1 month" 
ExpiresByType video/ogg "access plus 1 month" 
ExpiresByType video/webm "access plus 1 month" 
</IfModule>
#Alternative caching using Apache`s "mod_headers", if it`s installed.
#Caching of common files - ENABLED
<IfModule mod_headers.c>
<FilesMatch "\.(ico|pdf|flv|swf|js|css|gif|png|jpg|jpeg|ico|txt|html|htm)$">
Header set Cache-Control "max-age=2592000, public"
</FilesMatch>
</IfModule>


<IfModule mod_headers.c>
<FilesMatch "\.(js|css|xml|gz)$">
Header append Vary Accept-Encoding
</FilesMatch>
</IfModule>


<IfModule mod_gzip.c>
mod_gzip_on Yes
mod_gzip_dechunk Yes
mod_gzip_item_include file \.(html?|txt|css|js|php|pl)$
mod_gzip_item_include handler ^cgi-script$
mod_gzip_item_include mime ^text/.*
mod_gzip_item_include mime ^application/x-javascript.*
mod_gzip_item_exclude mime ^image/.*
mod_gzip_item_exclude rspheader ^Content-Encoding:.*gzip.*
</IfModule>

# Set Keep Alive Header
<IfModule mod_headers.c>
Header set Connection keep-alive
</IfModule>

# If your server don`t support ETags deactivate with "None" (and remove header)
<IfModule mod_expires.c> 
<IfModule mod_headers.c> 
Header unset ETag 
</IfModule> 
FileETag None 
</IfModule>
## EXPIRES CACHING ##
#END GZIP COMPRESSION BY THEMIFY BUILDER

# BEGIN WordPress
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /
RewriteRule ^index\.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.php [L]
</IfModule>

# END WordPress