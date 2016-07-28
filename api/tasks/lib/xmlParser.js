var fs = require('fs');
var libxmljs;
var grunt;

var readFile = function (path) {
	return new Promise(function (resolve, reject) {
		fs.readFile(path, 'utf8', function (err, content) {
			if (err) {
				return reject(err);
			}

			resolve(content);
		});
	});
};

/* eslint-disable quote-props */
var types = {
	'namespace': {id: 1, name: 'namespace', plural: 'namespaces'},
	'class': {id: 2, name: 'class', plural: 'classes'},
	'ctor': {id: 3, name: 'constructor', plural: 'constructors'},
	'special': {id: 4, name: 'Special!?', plural: 'Speciasl!!!?'},
	'method': {id: 5, name: 'method', plural: 'methods'},
	'property': {id: 6, name: 'property', plural: 'properties'},
	'event': {id: 7, name: 'event', plural: 'events'},
	'field': {id: 8, name: 'field', plural: 'fields'}
};
/* eslint-enable quote-props */

var resolveType = function (type, name) {
	// types explained here:
	// https://msdn.microsoft.com/en-us/library/fsbx0t7x.aspx
	/* eslint-disable dot-notation */
	switch (type) {
		case 'N':
			return types['namespace'];
		case 'T':
			//can be class, interface, struct, enum, delegate
			return types['class'];
		case 'F':
			return types['field'];
		case 'M':
			// method (including such special methods as constructors, operators, and so forth)
			if (name.indexOf('#') !== -1) {
				if (name.indexOf('#ctor') !== -1) {
					return types['ctor'];
				}
				grunt.verbose.writeln('this is special!', name);
				return types['special'];
			}
			return types['method'];
		case 'P':
			return types['property'];
		case 'E':
			return types['event'];
		case '!':
		default:
			throw new Error('unkwon type');
	}
	/* eslint-enable dot-notation */
};

var replaceReferences = function (content) {
	//TODO: explain why, find better option?
	return content.replace(/<see cref="(?:[^'\/ ]*\/)*([^' ]+)" \/>/g, function ($1, $2) {
		return '¿¿¿ see cref="' + $2 + '" ¿¿¿';
	}).replace(/<see cref="(?:[^'\/ ]*\/)*([^' ]+)"\/>/g, function ($1, $2) {
		return '¿¿¿ see cref="' + $2 + '" ¿¿¿';
	});
};

var parseMember = function (node) {
	var nameParts = node.attr('name').value().split(':');
	var type = nameParts[0];
	var name = nameParts[1];
	var summary = node.get('summary').text().replace('\n', '').trim();


	var params = (node.find('param')).map(function (paramNode) {
		return {
			name: paramNode.attr('name').value(),
			text: paramNode.text().replace('\n', '').trim()
		};
	});

	var returns = node.find('returns').map(function (returnNode) {
		return {
			text: returnNode.text().replace('\n', '').trim()
		};
	});

	var exceptions = node.find('exception').map(function (exceptionNode) {
		return {
			text: exceptionNode.text().replace('\n', '').trim()
		};
	});

	var member = {
		type: resolveType(type, name),
		name: name,
		summary: summary,
		params: params,
		returns: returns,
		exceptions: exceptions
	};


	return member;
};

var parseXml = function (xml) {
	xml = replaceReferences(xml); // eslint-disable-line no-param-reassign
	return new Promise(function (resolve) {
		var xmlDoc = libxmljs.parseXml(xml, {noblanks: true});
		var assemblyNode = xmlDoc.get('//assembly');

		var name = assemblyNode.get('//name').text();
		var summary = assemblyNode.get('//summary').text().replace('\n', '').trim();

		var namespace = {name: name, summary: summary};

		var membersNode = xmlDoc.get('//members');

		var currentClass;
		namespace.classes = [];

		namespace.members = membersNode.childNodes().forEach(function (memberNode) {
			var member = parseMember(memberNode);
			if (member.type.name === 'class') {
				currentClass = member;
				currentClass.members = [];
				namespace.classes.push(currentClass);
			} else {
				currentClass.members.push(member);
			}
		});

		resolve(namespace);
	});
};

module.exports = function (context) {
	grunt = context;
	try {
		libxmljs = require('libxmljs');
	} catch (e) {
		grunt.fail.fatal('libxmljs not found');
	}

	return {
		getModel: function (path) {
			return readFile(path).then(parseXml);
		}
	};
};
