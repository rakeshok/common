import urlRegex from './urlRegex';

export default function isURL(string) {
	return typeof string === 'string' && string.length ? urlRegex.test(string) : false;
}