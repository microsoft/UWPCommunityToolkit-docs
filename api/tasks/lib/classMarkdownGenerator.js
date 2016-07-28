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

module.exports = function (context) {
	grunt = context;
	common = require('./commonGenerator.js')(grunt);

	return {
		generate: function (path, model) {
			var generator = new common.Generator();

			//header
			generator.addLine('# ' + model.name + ' class');
			generator.addLine(generator.treatText(model.summary));

			//members index
			generator.addLine('## Members');
			generator.addLine('The **' + model.name + '** namespace has these types of members');

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
				// result += '* [' + type.plural + ']' + '(#' + type.plural + ')\n';
				generator.addLine('* [' + type.plural + ']' + '(#' + type.plural + ')');
			});

			//members details
			types.forEach(function (type) {
				var typeMembers = membersByType[type.id].members;
				generator.addLine('### ' + type.plural);

				typeMembers.forEach(function (member) {
					generator.addLine('#### ' + member.name);
					generator.addLine(generator.treatText(member.summary));

					if (member.params.length || member.returns.length) {
						generator.addLine('##### parameters');
						generator.addContent('\n\n\n');
						generator.addLine('| name | description |');
						generator.addLine('| --- | --- |');
					}

					member.params.forEach(function (param) {
						//result += '| '
                        // + param.name + ' | ' + param.text + ' |\n';
						generator.addLine('| ' + param.name + ' | ' + generator.treatText(param.text) + ' |');
					});

					member.returns.forEach(function (ret) {
						//result += '| return |' + ret.text + ' |\n';
						generator.addLine('| return |' + generator.treatText(ret.text) + ' |');
					});

					if (member.exceptions.length) {
						generator.addLine('##### exceptions');
						generator.addLine('');
						generator.addLine('| type | description |');
						generator.addLine('| --- | --- |');
					}

					member.exceptions.forEach(function (exc) {
						generator.addLine('| exception type |' + exc.text + ' |');
					});
				});
			});

			return generator.writeFile(path);
		}
	};
};
