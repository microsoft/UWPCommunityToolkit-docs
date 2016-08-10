var grunt, common;

var getMembersGroupedByTpe = function (members) {
	var groupedMembers = {};
	members.forEach(function (member) {
		if (!groupedMembers[member.type.id]) {
			groupedMembers[member.type.id] = {
				type: member.type,
				members: []
			};
		}
		groupedMembers[member.type.id].members.push(member);
	});
	return groupedMembers;
};

var getMemberTitle = function (member) {
	var paramNames = member.params.map(function (param) {
		return param.type + ' ' + param.name;
	});

	var memberTitle = member.name;

	if (member.type.name === 'method'){
		memberTitle = memberTitle + '(' + paramNames.join(',') + ')';
	}

	if (member.type.name === 'constructor'){
		memberTitle = 'contructor';
	}

	return memberTitle;
};


module.exports = function (context) {
	grunt = context;
	common = require('./commonGenerator.js')(grunt);

	return {
		generate: function (path, model, options) {
			var generator = new common.Generator(options);

			//header
			generator.addLine('# ' + generator.replaceGenericTypes(model.name) + ' class');
			generator.addLine(generator.treatText(model.summary));

			//members index
			generator.addLine('## Members');
			generator.addLine('The **' + generator.replaceGenericTypes(model.name) + '** class has the following types of members:');

			var members = model.members.sort(function (a, b) {
				if (a.type.id > b.type.id) {
					return 1;
				}
				if (a.type.id < b.type.id) {
					return -1;
				}
				return 0;
			});

			var membersByType = getMembersGroupedByTpe(members);
			var types = [];

			for (var property in membersByType) {
				if (membersByType.hasOwnProperty(property)) {
					types.push(membersByType[property].type);
				}
			}

			types.forEach(function (type) {
				generator.addLine('* [' + type.plural + ']' + '(#' + type.plural + ')');
			});

			//members details
			types.forEach(function (type) {
				var typeMembers = membersByType[type.id].members;
				generator.addLine('### ' + type.plural);

				typeMembers.forEach(function (member) {
					var memberTitle = getMemberTitle(member);

					generator.addLine('#### ' + memberTitle);
					generator.addLine(generator.treatText(member.summary));

					if (member.params.length || member.returns.length) {
						generator.addLine('##### Parameters');
						generator.addContent('\n\n\n');
						generator.addContent('| Name | Description | Type |\r');
						generator.addContent('| --- | --- | --- |\r');
					}

					member.params.forEach(function (param) {
						var typeLink = generator.generateLinkIfPossible(param.type);
						generator.addContent('| ' + param.name + ' | ' + generator.treatText(param.text) + ' | ' + typeLink + ' |\r');
					});

					member.returns.forEach(function (ret) {
						generator.addContent('| return |' + generator.treatText(ret.text) + ' |\r');
					});

					if (member.exceptions.length) {
						generator.addLine('##### Exceptions');
						generator.addLine('');
						generator.addContent('| Type | Description |\r');
						generator.addContent('| --- | --- |\r');
					}

					member.exceptions.forEach(function (exc) {
						generator.addContent('| exception type |' + exc.text + ' |\r');
					});

					generator.addLine('');
				});
			});

			return generator.writeFile(path);
		}
	};
};
