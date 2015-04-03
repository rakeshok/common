import Cookies from 'cookies';
import keygrip from 'keygrip';

// Gets the value of a signed cookie from the HTTP headers
export default function getSignedCookie(name, headers, keys) {
	let keys = keygrip(keys);
	let value = null;

	// Decode the user's session
	try {
		let cookies = new Cookies({ headers: headers }, {}, keys);
		value = cookies.get(name, { signed: true });
		if (value) {
			value = JSON.parse( new Buffer(value, 'base64').toString('utf8') );
		}
	} catch (err) {
		//TODO: Change
		__log.module('mixins').tags(['mixin', 'getSignedCookie']).error(err.stack);
	}

	return value;
}