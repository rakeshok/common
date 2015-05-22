var emailRegex = require('../regex/emailRegex');

function isEmail(string) {
	return emailRegex.test(string);
}

module.exports = isEmail;
