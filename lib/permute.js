// Returns a permutation array based on another array.
// Example: _.permute(['hey', 'there'], 2) -> ['hey there', 'there hey']
function permute(arr, size) {
	var results = [];
	var output = [];
	var used = new Array(arr.length);

	doPermute(arr, output, used, size, 0, results);
	return results;
}

function doPermute(arr, output, used, size, level, results) {

	if (size === level) {
		var word = output.join(' ');
		results.push(word);
		return;
	} 

	level++;

	for (var i = 0; i < arr.length; i++) {
		if (used[i] === true) {
			continue;
		}

		used[i] = true;
		output.push(arr[i]);
		doPermute(arr, output, used, size, level, results);
		used[i] = false;
		output.pop();
	}
}

module.exports = permute;
