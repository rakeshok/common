var emailRegex = require('./emailRegex');

function isEmail(string) {
	return emailRegex.test(string);
}

module.exports = isEmail;
