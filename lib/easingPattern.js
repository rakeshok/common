
function easingPattern(type, time) {
	if ( type === 'easeInQuad' ) return time * time; // accelerating from zero velocity
	if ( type === 'easeOutQuad' ) return time * (2 - time); // decelerating to zero velocity
	if ( type === 'easeInOutQuad' ) return time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time; // acceleration until halfway, then deceleration
	if ( type === 'easeInCubic' ) return time * time * time; // accelerating from zero velocity
	if ( type === 'easeOutCubic' ) return (--time) * time * time + 1; // decelerating to zero velocity
	if ( type === 'easeInOutCubic' ) return time < 0.5 ? 4 * time * time * time : (time - 1) * (2 * time - 2) * (2 * time - 2) + 1; // acceleration until halfway, then deceleration
	if ( type === 'easeInQuart' ) return time * time * time * time; // accelerating from zero velocity
	if ( type === 'easeOutQuart' ) return 1 - (--time) * time * time * time; // decelerating to zero velocity
	if ( type === 'easeInOutQuart' ) return time < 0.5 ? 8 * time * time * time * time : 1 - 8 * (--time) * time * time * time; // acceleration until halfway, then deceleration
	if ( type === 'easeInQuint' ) return time * time * time * time * time; // accelerating from zero velocity
	if ( type === 'easeOutQuint' ) return 1 + (--time) * time * time * time * time; // decelerating to zero velocity
	if ( type === 'easeInOutQuint' ) return time < 0.5 ? 16 * time * time * time * time * time : 1 + 16 * (--time) * time * time * time * time; // acceleration until halfway, then deceleration
	return time; // no easing, no acceleration
}

module.exports = easingPattern;
