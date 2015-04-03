var objectIdRegex = require('./objectIdRegex');

function isObjectId(string) {
	return objectIdRegex.test(string);
}

module.exports = isObjectId;
