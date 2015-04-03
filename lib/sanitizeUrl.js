
function sanitizeUrl(string) {
	if ( !string || string.indexOf('.') < 0 ) return '';
	if ( string.indexOf('http://') < 0 && string.indexOf('https://') < 0 && string.indexOf('ftp://') < 0 ) {
		string = 'http://'+string; 
	}

	return string;
}

module.exports = sanitizeUrl;
