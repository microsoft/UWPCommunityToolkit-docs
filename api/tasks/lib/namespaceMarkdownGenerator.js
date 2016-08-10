var grunt, common;

module.exports = function (context) {
	grunt = context;
	common = require('./commonGenerator.js')(grunt);

	return {
		generate: function (path, model, options) {
			var generator = new common.Generator(options);

			generator.addLine('# ' + model.name + ' namespace');
			generator.addLine('## Classes');
			generator.addLine('The **' + model.name + '** namespace has the following types:');

			if (model.classes.length) {
				generator.addLine('');
				generator.addContent('| Class | Description |\r');
				generator.addContent('| --- | --- |\r');

				model.classes.forEach(function (c) {
					var name = generator.generateLink(c.fullName);
					var summary = generator.treatText(c.summary);
					generator.addContent('| ' + name + ' | ' + summary + ' |\r');
				});
			}

			return generator.writeFile(path);
		}
	};
};
