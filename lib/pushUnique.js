var findWhere = require('lodash').findWhere;

function pushUnique(container, item) {
	if (findWhere(container, item)) return;
	container.push(item);
}

module.exports = pushUnique;
