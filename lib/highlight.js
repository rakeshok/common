var difference = require('lodash').difference;
var stopwords = require('./stopwordsAll');

function highlight(text, string) {
	var words, phrase;

	words = difference( string.split(/\ /), stopwords );

	if ( words.length ) {
		phrase = '('+words.join('|')+')';
		phrase = '\\b'+phrase+'\\b';

		text = text
			.replace(new RegExp(phrase, 'gi'), '<span class="search-highlight">$1</span>')
			.replace(new RegExp('</span> <span class="search-highlight">', 'g'), ' ');
	}

	return text;
}

module.exports = highlight;
