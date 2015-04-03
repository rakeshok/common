
export default function getTopOffset(element) {
	let pixels = 0;

	if (element.offsetParent) {
		do {
			pixels += element.offsetTop;
			element = element.offsetParent;
		} while (element);
	}

	return pixels;
}