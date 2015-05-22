var urlRegex = require('../regex/urlRegex');

function isURL(string) {
	return typeof string === 'string' && string.length ? urlRegex.test(string) : false;
}

module.exports = isURL;
