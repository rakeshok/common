import objectIdRegex from './objectIdRegex';

export default function isObjectId(string) {
	return objectIdRegex.test(string);
}