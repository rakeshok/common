
// Check if obj2 has the same properties and values as obj1
function hasSameProperties(obj1, obj2) {
	var same = true;

	Object.keys(obj1).forEach(function(key) {
		if (!obj2.hasOwnProperty(key) || obj2[key] !== obj1[key])
			same = false;
	});

	return same;
}

module.exports = hasSameProperties;
