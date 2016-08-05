var fs = require('fs');
var grunt;

var config;

var generateLink = function (nodeValue) {
	var type = 'T';
	var name = nodeValue;

	if (name.indexOf(':') !== -1){
		var typeParts = name.split(':');
		type = typeParts[0];
		name = typeParts[1];
	}

	var localNamespace = config.localNamespaces.filter(function (namespace) {
		return name.toUpperCase().indexOf(namespace.toUpperCase()) > -1;
	});

	var isExternal = localNamespace.length === 0;

	var parts = name.split('.');
	var text = parts[parts.length - 1];
	text = replaceGenericTypes(text);

	if (type !== 'T'){
		return text;
	}
	if (isExternal) {
		return '[' + text + '](' + config.externalLinksBase + name + ')';
	}

	var link = name.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '_');

	if (config.linkExtension){
		link += config.linkExtension;
	}

	return '[' + text + '](' + link + ')';
};

var replaceGenericTypes = function (text) {
	return text.replace(/`[1-9]*/g, function ($1, $2) {
		var result = '';
		var i = 0;
		var numberOfTypes = parseInt($1.substring(1));

		for (i = 0; i < numberOfTypes; i++) {
			result += '<T' + (i + 1) + '>';
		}

		return result;
	});
};

var treatText = function (content) {
	//TODO: explain why, find better option?
	return content.replace(/¿¿¿ see cref="(?:[^'\/ ]*\/)*([^' ]+)" ¿¿¿/g, function ($1, $2) {
		return generateLink($2);
	});
};

var Generator = function (options) {
	config = options;

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

	this.replaceGenericTypes = replaceGenericTypes;
	//this.replaceGenericParameterTypes = replaceGenericParameterTypes;
	this.treatText = treatText;
	this.generateLink = generateLink;
};

module.exports = function (context) {
	grunt = context;

	return {
		Generator: Generator
	};
};
