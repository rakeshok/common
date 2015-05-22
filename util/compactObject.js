var _ = require('lodash');

function compactObject(object) {
	var clone = _.clone(object);
	_.each(clone, function(value, key) {
		if (!value)
			delete clone[key];
	});
	return clone;
}

module.exports = compactObject;
