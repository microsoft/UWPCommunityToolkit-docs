var grunt, common;

module.exports = function (context) {
	grunt = context;
	common = require('./commonGenerator.js')(grunt);

	return {
		generate: function (path, model) {
			var generator = new common.Generator();

			generator.addLine('# ' + model.name + ' namespace');
			generator.addLine(generator.treatText(model.summary));
			generator.addLine('## Classes');
			generator.addLine('The **' + model.name + '** namespace has these types');

			if (model.classes.length) {
				generator.addLine('| class | description |');
				generator.addLine('| --- | --- |');

				model.classes.forEach(function (c) {
					generator.addLine('| ' + generator.generateLink(c.name) + ' | ' + generator.treatText(c.summary) + ' |');
				});
			}

			return generator.writeFile(path);
		}
	};
};
