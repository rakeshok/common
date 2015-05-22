
function firstWord(string) {
	var newString = string.substr(0, string.indexOf(' '));
	return newString || string || '';
}

module.exports = firstWord;
