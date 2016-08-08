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

	//remove array's for parameters
	name = name.replace('[]', '');
	//remove at's for parameters
	name = name.replace('@', '');


	if(text.endsWith('@')){
		text = 'out ' +  text.replace('@', '');
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

			var theFile = path.match(/\/([^/]*)$/)[1];
			var onlyName = theFile.substr(0, theFile.lastIndexOf('.')) || theFile;
			var classname = onlyName.replace(/_/g, ".");
			var header = 
`---
permalink: /en-US/api/` + onlyName + `.htm
title: ` + classname + ` API 
description: API page for ` + classname + `
keywords: windows, app, toolkit, UWP, API
layout: default
search.product: eADQiWindows 10XVcnh
---

`;

			fs.writeFile(path, header + content, function (err) {
				if (err) {
					reject(err);
					return;
				}
				grunt.verbose.writeln('file saved', path);
				resolve();
			});
		});
	};


	this.generateLinkIfPossible = function(text){
		//we only generate links for simple types
		//we are not generating links for types like:
		// - Microsoft.Toolkit.Uwp.Services.IParser(TT0) (has a parenthesi)
		// - Microsoft.Toolkit.Uwp.Services.IParser(Microsoft.Toolkit.SomeType) (has a parenthesi)
		// - TT0 (is generic)
		// - T0 (is generic)

		var containsParenthesi = text.indexOf('(') !== -1;
		if(containsParenthesi)
		{
			return text;
		}

		var isGeneric = text.match(/TT[0-9]/g) || text.match(/T[0-9]/g);
		if(isGeneric)
		{
			return text;
		}

		return this.generateLink(text);
	};

	this.replaceGenericTypes = replaceGenericTypes;
	this.treatText = treatText;
	this.generateLink = generateLink;
};

module.exports = function (context) {
	grunt = context;

	return {
		Generator: Generator
	};
};
