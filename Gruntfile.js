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
				}
			}
		},
	});

	grunt.registerTask('default', ['sass', 'watch']);
};