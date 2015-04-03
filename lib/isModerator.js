export default function isModerator(session) {
	let passport = session.passport;
	return passport && passport.user && passport.user.roles & 2;
}