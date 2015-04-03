var Cookies = require('cookies');
var keygrip = require('keygrip');

// Gets the value of a signed cookie from the HTTP headers
function getSignedCookie(name, headers) {
	var keys = keygrip(__config.secretKeys);
	var value = null;

	// Decode the user's session
	try {
		var cookies = new Cookies({ headers: headers }, {}, keys);
		value = cookies.get(name, { signed: true });
		if (value) {
			value = JSON.parse( new Buffer(value, 'base64').toString('utf8') );
		}
	} catch (err) {
		__log.module('mixins').tags(['mixin', 'getSignedCookie']).error(err.stack);
	}

	return value;
}

module.exports = getSignedCookie;
