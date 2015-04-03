
export default function removeHTML(text) {
	return text.replace(/(<([^>]+)>)/ig, '');
}