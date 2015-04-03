
export default function randomCharacter() {
	let randomIndex = Math.floor( Math.random()*__config.anonymousCharacters.length );
	return __config.anonymousCharacters[ randomIndex ];
}