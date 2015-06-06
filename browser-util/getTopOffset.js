
function getTopOffset(element, offset) {
	var pixels = offset || 0;

	if (element.offsetParent) {
		do {
			pixels += element.offsetTop;
			element = element.offsetParent;
		} while (element);
	}

	return pixels;
}

module.exports = getTopOffset;
