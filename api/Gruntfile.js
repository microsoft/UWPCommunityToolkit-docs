module.exports = function (grunt) {
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		xmlToMarkdown: {
			all: {
				files: [{
					src: ['xml/*.xml'],
					dest: 'dist/'
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