var Cookies = require('cookies');
var keygrip = require('keygrip');

// Gets the value of a signed cookie from the HTTP headers
function getSignedCookie(name, headers, keys) {
	var kgrip = keygrip(keys);
	var value = null;

	// Decode the user's session
	var cookies = new Cookies({ headers: headers }, {}, kgrip);
	value = cookies.get(name, { signed: true });

	if (value)
		value = JSON.parse(new Buffer(value, 'base64').toString('utf8'));

	return value || null;
}

module.exports = getSignedCookie;
