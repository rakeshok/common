var urlRegex = require('../regex/urlRegex');

function getLinks(text) {
	return text.match(urlRegex) || false;
}

module.exports = getLinks;
