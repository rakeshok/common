
function isUser(session) {
	var passport = session.passport;
	return passport && passport.user && passport.user.type === 'user';
}

module.exports = isUser;
