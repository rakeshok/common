
// Returns an object based on a path and a value
// Example:
// buildObject('resume.summary', 'Im an engineer')
// => { resume: { summary: 'Im an engineer' } }
function buildObject(path, value) {
	var parts = path.split('.');
	var ret = {};
	var current = ret;

	for (var i = 0, len = parts.length; i < len; i++)
		current[parts[i]] = i === (len - 1) ? value : {};

	return ret;
}

module.exports = buildObject;
