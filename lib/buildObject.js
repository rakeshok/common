
// Returns an object based on a path and a value
// Example:
// buildObject('resume.summary', 'Im an engineer')
// => { resume: { summary: 'Im an engineer' } }
export default function buildObject(path, value) {
	let parts = path.split('.');
	let ret = {};
	let current = ret;

	for (let i = 0, len = parts.length; i < len; i++)
		current[parts[i]] = i === (len-1) ? value : {};

	return ret;
}
