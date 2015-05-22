
function isModerator(session) {
	var passport = session.passport;
	return passport && passport.user && passport.user.roles & 2;
}

module.exports = isModerator;
