module.exports = function (grunt) {
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		xmlToMarkdown: {
			all: {
				files: [{
					src: ['xml/*.xml'],
					dest: '../en-us/uwp-community-toolkit/api/'
				}],
				linkExtension: '.htm',
				localNamespaces: [
					'Microsoft.Toolkit.Uwp'
				],
				externalLinksBase: 'https://msdn.microsoft.com/library/windows/apps/'
				//externalLinksBase: 'https://msdn.microsoft.com/library/windows/apps/'
			}
		},
		eslint: {
			target: ['Gruntfile.js', 'tasks/**/*.js']
		}
	});

	grunt.loadTasks('tasks');

	grunt.registerTask('default', ['xmlToMarkdown']);
};