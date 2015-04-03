
function pluralize(string, count) {
	if ( count < 2 ) return string;

	// Handle "Reply" -> "Replies"
	if ( string[string.length-1] === 'y' )
		string = string.slice(0, -1)+'ie';

	return string+'s';
}

module.exports = pluralize;
