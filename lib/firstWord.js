
export default function firstWord(string) {
	let newString = string.substr(0, string.indexOf(' '));
	return newString || string || '';
}
