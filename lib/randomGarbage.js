
export default function randomGarbage(length, allowedChars) {
	let chars = allowedChars || '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz';
	let string = '';
	let randomNumber;

	length = length || 8;

	for (let i = 0; i < length; i++) {
		randomNumber = Math.floor(Math.random() * chars.length);
		string += chars.substring(randomNumber, randomNumber + 1);
	}

	return string;
}