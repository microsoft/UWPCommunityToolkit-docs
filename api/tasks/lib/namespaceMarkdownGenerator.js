var grunt, common;

module.exports = function (context) {
	grunt = context;
	common = require('./commonGenerator.js')(grunt);

	return {
		generate: function (path, model, options) {
			var generator = new common.Generator(options);

			generator.addLine('# ' + model.name + ' namespace');
			generator.addLine('## Classes');
			generator.addLine('The **' + model.name + '** namespace has this types');

			if (model.classes.length) {
				generator.addLine('');
				generator.addContent('| class | description |\n');
				generator.addContent('| --- | --- |\n');

				model.classes.forEach(function (c) {
					var name = generator.generateLink(c.fullName);
					var summary = generator.treatText(c.summary);
					generator.addContent('| ' + name + ' | ' + summary + ' |\n');
				});
			}

			return generator.writeFile(path);
		}
	};
};
