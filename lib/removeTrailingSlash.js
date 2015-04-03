
function removeTrailingSlash(text) {
	if ( text[0] === '/' )
		return text.substr(1);
	
	return text;
}

module.exports = removeTrailingSlash;
