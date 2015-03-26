
module.exports = function (grunt) {

	// Load plugins
	require('load-grunt-tasks')(grunt);


	// ---------- Project configuration
	grunt.initConfig({


		//	Settings
		//-----------------------------------
		pkg: grunt.file.readJSON('package.json'),


		//	Watch
		//-----------------------------------

		//	Watch changes to client folders within css/ and js/,
		//	files within core/ or packages/ should not be updated
		watch: {
			js: {
				files: [
					'links.js'
				],
				tasks: ['js']
			}
		},


		//	JS
		//-----------------------------------

		//	Hint .js files according to .jshintrc
		jshint: {
			all: [
				'links.js'
			],
			options: {
				jshintrc: '.jshintrc',
				force: true
			}
		},

		//	Test javascript writing conventions according to .jscs.json
		jscs: {
			src: [
				'links.js'
			],
			options: {
				config: '.jscs.json',
				force: true
			}
		}
	});


	// ---------- Tasks

	// Default
	grunt.registerTask('default', []);

	// JS
	grunt.registerTask('js', ['jshint', 'jscs']);
};