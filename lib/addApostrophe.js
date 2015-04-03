
function addApostrophe(string) {
	if ( string[ string.length-1 ] === 's' )
		return string+'\'';

	return string+'\'s';
}

module.exports = addApostrophe;
