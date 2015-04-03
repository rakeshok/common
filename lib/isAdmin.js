
function isAdmin(session) {
	var passport = session.passport;
	return passport && passport.user && passport.user.roles & 4;
}

module.exports = isAdmin;
