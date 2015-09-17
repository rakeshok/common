var urlRegex = require('../regex/urlRegex');

function isURL(string) {
  if (typeof string !== 'string' || !string.length) return false;
  var test = urlRegex.test(string);
  urlRegex.lastIndex = 0;
	return test;
}

module.exports = isURL;
