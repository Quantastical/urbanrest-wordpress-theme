var gulp = require('gulp'),
	rename = require('gulp-rename'),
	sass = require('gulp-sass'),
	sourcemaps = require('gulp-sourcemaps'),
	uglify = require('gulp-uglify');

gulp.task('default', function() {
});

gulp.task('sass', function() {
	/*
	'style.css': 'style.scss',
	//'editor-style.css': 'editor-style.scss'
	'styles/admin/style.css': 'styles/admin/style.scss',
	'styles/editor/style.css': 'styles/editor/style.scss',
	'styles/login/style.css': 'styles/login/style.scss',
	'styles/xsl/xml-sitemap.css': 'styles/xsl/xml-sitemap.scss'
	*/

	gulp.src('style.scss')
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('./'));

	return gulp.src('style.scss')
		.pipe(sourcemaps.init())
		.pipe(sass({outputStyle: 'compressed'}))
		.pipe(rename('style.min.css'))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('./'));
});

gulp.task('uglify', function() {
	return gulp
		.src([
		"scripts/plugins/jQuery.fn.sortElements.js",
		"scripts/plugins/jquery.urbModal.js",
		"scripts/reset.js",

		"scripts/modal.js",
		"scripts/navigation.js",
		"scripts/search.js",
		"scripts/tooltip.js",

		"scripts/header.js",
		"scripts/specials.js",
		"scripts/community.js",
		"scripts/company.js",

		"scripts/beer.js",
		"scripts/page.js",
		"scripts/post.js",
		"scripts/single.js",
		"scripts/user.js",
		"scripts/analytics.js"])
		.pipe(uglify())
		.pipe(gulp.dest('script.js'));
});