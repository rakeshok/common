var urlRegex = require('./urlRegex');

function getLinks(text) {
	return text.match(urlRegex) || false;
}

module.exports = getLinks;
