var gulp = require('gulp'),
	concat = require('gulp-concat'),
	count = require('gulp-count'),
	hash = require('gulp-hash-filename'),
	imagemin = require('gulp-imagemin'),
	//pngquant = require('imagemin-pngquant'),
	rename = require('gulp-rename'),
	sass = require('gulp-sass'),
	sourcemaps = require('gulp-sourcemaps'),
	uglify = require('gulp-uglify'),
	scriptJSON = require('./script.json');

gulp.task('default', function() {
	console.log('Which task do you want to perform?');
});

gulp.task('all', ['images', 'styles', 'scripts']);

gulp.task('styles', function() {
	/*
	'style.css': 'style.scss',
	//'editor-style.css': 'editor-style.scss'
	'styles/admin/style.css': 'styles/admin/style.scss',
	'styles/editor/style.css': 'styles/editor/style.scss',
	'styles/login/style.css': 'styles/login/style.scss',
	'styles/xsl/xml-sitemap.css': 'styles/xsl/xml-sitemap.scss'
	*/

	gulp.src('./styles/admin/style.scss')
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(sourcemaps.write('./', {
			sourceMappingURL: function(file) {
				return file.relative + '.map';
			}
		}))
		.pipe(gulp.dest('./styles/admin/'));

	gulp.src('./styles/editor/style.scss')
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(sourcemaps.write('./', {
			sourceMappingURL: function(file) {
				return file.relative + '.map';
			}
		}))
		.pipe(gulp.dest('./styles/editor/'));

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

gulp.task('scripts', function() {
	gulp
		.src(scriptJSON['script.js'])
		.pipe(sourcemaps.init())
		.pipe(concat('script.js'))
		.pipe(uglify({
			output: {
				beautify: true
			}
		}))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('./'));

	return gulp
		.src(scriptJSON['script.js'])
		.pipe(sourcemaps.init())
		.pipe(concat('script.min.js'))
		.pipe(uglify({
			mangle: true,
			ouput: {
				comments: false
			}
		}))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('./'));
});

gulp.task('images', function() {
	gulp
		.src(['./images/*', '!./images/*.min.*'])
		.pipe(imagemin({
			optimizationLevel: 7,
			interlaced: true,
            progressive: true,
            //svgoPlugins: [
            //    { removeViewBox: false },
            //    { cleanupIDs: false }
            //],
            //use: [pngquant()]
        }))
        .pipe(hash({format: '{name}.min{ext}'}))
        .pipe(gulp.dest('./images'));
});