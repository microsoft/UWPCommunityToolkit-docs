var fs = require('fs');
var xml2js;
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

var getText = function (node, prop) {
	if (typeof node === 'string') {
		return node ? node.replace('\n', '').trim() : '';
	} else if (prop) {
		return node[prop] ? node[prop].replace('\n', '').trim() : '';
	}

	return '';
};

var getTypesFromName = function (name) {
	var contexts = 0;
	var result = '';
	var i;

	name = name.replace(/`[0-9]*/g, function ($1, $2) {
		var type = $1.substring(1);
		return 'T' + type;
	});

	for (i = 0; i < name.length; i++) {
		var c = name[i];
		if(c === '{')
		{
			result += '(';
			contexts++;
		}
		else if(c === '}')
		{
			result += ')';
			contexts--;
		}

		else if(contexts === 0 && c === ','){
			result += '###SEPARATOR###';
		}else{
			result += c;
		}
	}

	var types = result.split('###SEPARATOR###');
	return types;
};

var parseMember = function (node) {
	var nameParts = node.$.name.split(':');
	var type = nameParts[0];
	var originalName = nameParts[1];
	var fullName = originalName;
	var paramsTypes = [];
	var paranthesisPosition = fullName.indexOf('(');
	var hasParenthesis = paranthesisPosition !== -1;

	if (hasParenthesis){
		var parametersString = fullName.substring(paranthesisPosition + 1, fullName.length - 1);
		paramsTypes = getTypesFromName(parametersString);
		fullName = fullName.substring(0, paranthesisPosition);
	}

	var name = fullName.substring(fullName.lastIndexOf('.') + 1);

	var sumamryValue = node.summary || [];
	var summary = getText(sumamryValue.shift());

	var params = (node.param || []).map(function (paramNode, index) {
		return {
			name: paramNode.$.name,
			text: getText(paramNode, '_'),
			type: paramsTypes[index]
		};
	});

	var returns = (node.returns || []).map(function (returnNode) {
		return {
			text: getText(returnNode)
		};
	});

	var exceptions = (node.exception || []).map(function (exceptionNode) {
		return {
			text: getText(exceptionNode, '-')
		};
	});

	var member = {
		type: resolveType(type, name),
		name: name,
		fullName: originalName,
		summary: summary,
		params: params,
		returns: returns,
		exceptions: exceptions
	};

	return member;
};

var parseXml = function (xml) {
	xml = replaceReferences(xml); // eslint-disable-line no-param-reassign
	return new Promise(function (resolve, reject) {
		var parserOptions = {
			trim: true
		};
		var parser = new xml2js.Parser(parserOptions);
		parser.parseString(xml, function (err, result) {
			if (err) {
				reject(err);
				return;
			}

			var xmlDoc = result.doc;
			var assembly = xmlDoc.assembly ? xmlDoc.assembly[0] : {};
			var name = assembly.name ? assembly.name[0] : '';
			var members = xmlDoc.members ? xmlDoc.members[0].member : [];

			var namespace = {name: name};

			var currentClass;
			namespace.classes = [];

			members.forEach(function (memberNode) {
				var member = parseMember(memberNode, namespace);
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
	});
};

module.exports = function (context) {
	grunt = context;
	try {
		xml2js = require('xml2js');
	} catch (e) {
		grunt.fail.fatal('xml2js not found');
	}

	return {
		getModel: function (path) {
			return readFile(path).then(parseXml);
		}
	};
};
