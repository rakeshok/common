import { difference } from 'lodash';
import stopwords from './stopwordsAll';

export default function highlight(text, string) {
	let words, phrase;

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