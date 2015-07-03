
/**
 * Gets the top offset of an element. The top offset is the amount of pixels
 * from the top of the document's body, to the top border of this element.
 *
 * @param  {Node}    element  The DOM Node to calculate the top offset.
 * @param  {Number}  offset   The amount of pixels to add to the calculation.
 *
 * @return {Number}           The number of pixels this element is, relative
 *                            to the top of the browser's window.
 */
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
