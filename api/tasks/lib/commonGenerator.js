var fs = require('fs');
var grunt;

var generateLink = function (name) {
	var parts = name.split('.');
	var text = parts[parts.length - 1];
	var link = name.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '_');

	return '[' + text + '](' + link + ')';
};

var treatText = function (content) {
	//TODO: explain why, find better option?
	return content.replace(/¿¿¿ see cref="(?:[^'\/ ]*\/)*([^' ]+)" ¿¿¿/g, function ($1, $2) {
		return generateLink($2);
	});
};

var Generator = function () {
	var content = '';
	this.addContent = function (value) {
		content += value;
	};
	this.addLine = function (text) {
		content += '\n' + text.trim() + '\n'; // eslint-disable-line no-param-reassign
	};
	this.writeFile = function (path) {
		return new Promise(function (resolve, reject) {
			fs.writeFile(path, content, function (err) {
				if (err) {
					reject(err);
					return;
				}
				grunt.verbose.writeln('file saved', path);
				resolve();
			});
		});
	};
	this.treatText = treatText;
	this.generateLink = generateLink;
};

module.exports = function (context) {
	grunt = context;

	return {
		Generator: Generator
	};
};
