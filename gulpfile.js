var gulp = require('gulp'),
	sass = require('gulp-sass'),
	uglify = require('gulp-uglify');

gulp.task('default', function() {
});

gulp.task('sass', function() {
	return gulp
		.src('style.scss')
		.pipe(sass())
		.pipe(gulp.dest('style.css'));
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