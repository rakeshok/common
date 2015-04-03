import emailRegex from './emailRegex';

export default function isEmail(string) {
	return emailRegex.test(string);
}
