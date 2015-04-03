
function randomGarbage(length, allowedChars) {
	var chars = allowedChars || '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz';
	var string = '';
	var randomNumber;

	length = length || 8;

	for (var i = 0; i < length; i++) {
		randomNumber = Math.floor(Math.random() * chars.length);
		string += chars.substring(randomNumber, randomNumber + 1);
	}

	return string;
}

module.exports = randomGarbage;
