
export default function getTeaser(string, limit) {
	if ( typeof string !== 'string' ) return '';

	let teaser = string.substr(0, limit);
	if ( /^\S/.test(string.substr(limit)) )
		teaser = teaser.replace(/\s+\S*$/, "");

	return teaser;
}
