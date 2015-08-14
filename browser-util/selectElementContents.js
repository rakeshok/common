
/**
 * Selects the text in a node
 */
function selectElementContents(element) {
	var range = document.createRange();
	range.selectNodeContents(element);

	var sel = window.getSelection();
	sel.removeAllRanges();
	sel.addRange(range);
}

module.exports = selectElementContents;
