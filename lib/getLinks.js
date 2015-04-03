import urlRegex from './urlRegex';

export default function getLinks(text) {
	return text.match(urlRegex) || false;
}
