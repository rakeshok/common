
function randomCharacter() {
	var randomIndex = Math.floor( Math.random()*__config.anonymousCharacters.length );
	return __config.anonymousCharacters[ randomIndex ];
}

module.exports = randomCharacter;
