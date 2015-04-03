
export default function isAdmin(session) {
	let passport = session.passport;
	return passport && passport.user && passport.user.roles & 4;
}
