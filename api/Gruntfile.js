module.exports = function (grunt) {
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		xmlToMarkdown: {
			all: {
				files: [{
					src: ['xml/*.xml'],
					dest: '../en-us/uwp-community-toolkit/api/'
				}]
			}
		},
		eslint: {
			target: ['Gruntfile.js', 'tasks/**/*.js']
		}
	});

	grunt.loadTasks('tasks');

	grunt.registerTask('default', ['xmlToMarkdown']);
};