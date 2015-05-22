
function pluralize(string, count, pluralWhenEmpty) {
	if (count === 1 || (count === 0 && !pluralWhenEmpty)) return string;

	// Handle "Reply" -> "Replies"
	if (string[string.length - 1] === 'y')
		string = string.slice(0, -1) + 'ie';

	return string + 's';
}

module.exports = pluralize;
