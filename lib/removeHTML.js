
function removeHTML(text) {
	return text.replace(/(<([^>]+)>)/ig, '');
}

module.exports = removeHTML;
