
function getTeaser(string, limit) {
	if ( typeof string !== 'string' ) return '';

	var teaser = string.substr(0, limit);
	if ( /^\S/.test(string.substr(limit)) )
		teaser = teaser.replace(/\s+\S*$/, "");

	return teaser;
}

module.exports = getTeaser;
