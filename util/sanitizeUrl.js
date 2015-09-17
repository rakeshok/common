
function sanitizeUrl(string) {
  string = string ? string.trim() : string;

	if (!string || string.indexOf('.') < 0 || string.indexOf(' ') > -1) {
    return '';
  }

	if (string.indexOf('http://') < 0 && string.indexOf('https://') < 0 && string.indexOf('ftp://') < 0) {
		string = 'http://' + string;
	}

	return string;
}

module.exports = sanitizeUrl;
