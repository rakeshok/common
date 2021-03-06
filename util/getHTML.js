var _ = require('lodash');
var urlRegex = require('../regex/urlRegex');

function getHTML(text) {
	text = text || '';

	if (text.length) {

		// Remove tags except for <a>'s, add <br>'s
		text = text
			.replace(/(<((?!a).|\n)*?>)/ig, '')
			.replace(/\n\r?/g, '<br>');

		// Transform links to HTML
		var links = _.uniq(_.map(text.match(urlRegex), function(link) {
			return link.replace('http://', '').replace('https://', '');
		}));


		if (links) {
			for (var i = 0, len = links.length; i < len; i++) {
				var link = links[i];
				var re = new RegExp('(http://|https://)?' + link, 'g');
				text = text.replace(re, '<a href="http://' + link + '" target="_blank" rel="nofollow" class="user-link">' + link + '</a>');
			}
		}
	}

	return text;
}

module.exports = getHTML;
