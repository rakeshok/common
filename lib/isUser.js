
export default function isUser(session) {
	let passport = session.passport;
	return passport && passport.user && passport.user.type === 'user';
}