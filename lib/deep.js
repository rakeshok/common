var _ = require('lodash');

// Searches or Sets a property even if its nested.
// Ej. search( { body: { tags: [] }}, 'body.tags') -> []
function deep(obj, key, value) {
	var keys = key.replace(/\[(["']?)([^\1]+?)\1?\]/g, '.$2').replace(/^\./, '').split('.');
	var root;
	var i = 0;
	var n = keys.length;

	// Set deep value
	if (arguments.length > 2) {

		root = obj;
		n--;

		while (i < n) {
			key = keys[i++];
			obj = obj[key] = _.isObject(obj[key]) ? obj[key] : {};
		}

		obj[keys[i]] = value;

		value = root;

	// Get deep value
	} else {
		while ((obj = obj[keys[i++]]) != null && i < n) {}; // jshint ignore:line
		value = i < n ? void 0 : obj;
	}

	return value;
}

module.exports = deep;
