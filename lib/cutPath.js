module.exports = function (path, totalWords) {
	if (!totalWords) {
		totalWords = 10;
	}

	var words = path.split(/\s/);

	return words.slice(0, totalWords);
};