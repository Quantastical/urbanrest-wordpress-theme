<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" xmlns:html="http://www.w3.org/TR/REC-html40" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes" />
	<xsl:template match="/">
		<html xmlns="http://www.w3.org/1999/xhtml">
			<head>
				<title>XML Sitemap Index</title>
				<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
				<link href="wp-content/themes/urbanrest-wordpress-theme/styles/xsl/xml-sitemap.css" rel="stylesheet" type="text/css" />
			</head>
			<body>
				<div id="content">
					<h1>XML Sitemap</h1>
					<p class="expl">
						This is an XML Sitemap that is designed for search engines.
						If you are looking for the main website, visit <a href="http://Urbanrest.com">Urbanrest.com</a>.
					</p>
					<p class="expl">
						You can find more information about XML sitemaps on <a href="http://sitemaps.org">sitemaps.org</a>.
					</p>
					<p class="expl">
						This sitemap contains <xsl:value-of select="count(sitemap:sitemapindex/sitemap:sitemap)"/> URLs.
					</p>			
					<table id="sitemap" cellpadding="3">
						<thead>
							<tr>
								<th>URL</th>
								<th>Last Change</th>
							</tr>
						</thead>
						<tbody>
							<xsl:variable name="lower" select="'abcdefghijklmnopqrstuvwxyz'" />
							<xsl:variable name="upper" select="'ABCDEFGHIJKLMNOPQRSTUVWXYZ'" />
							<xsl:for-each select="sitemap:sitemapindex/sitemap:sitemap">
								<tr>
									<td>
										<xsl:variable name="itemURL">
											<xsl:value-of select="sitemap:loc" />
										</xsl:variable>
										<a href="{$itemURL}">
											<xsl:value-of select="sitemap:loc" />
										</a>
									</td>
									<td>
										<xsl:value-of select="concat(substring(sitemap:lastmod,0,11),concat(' ', substring(sitemap:lastmod,12,5)))" />
									</td>
								</tr>
							</xsl:for-each>
						</tbody>
					</table>
				</div>
			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>