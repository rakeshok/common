var objectIdRegex = require('../regex/objectIdRegex');

function isObjectId(string) {
	return objectIdRegex.test(string);
}

module.exports = isObjectId;
