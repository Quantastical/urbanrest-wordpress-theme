'use strict';
module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		watch: {
			sass: {
				files: ['styles/**/*.{scss,sass}'],
				tasks: ['sass']
			}
		},

		sass: {
			dist: {
				options: {
					style: 'compress',
				},
				files: {
					'style.css': 'style.scss',
					/*'editor-style.css': 'editor-style.scss'*/
					'styles/admin/style.css': 'styles/admin/style.scss',
					'styles/editor/style.css': 'styles/editor/style.scss',
					'styles/login/style.css': 'styles/login/style.scss',
					'styles/xsl/xml-sitemap.css': 'styles/xsl/xml-sitemap.scss'
				}
			}
		},

		uglify: {
			dist: {
				files: grunt.file.readJSON('script.json')
			}
		}
	});

	grunt.registerTask('default', ['sass', 'watch']);
};