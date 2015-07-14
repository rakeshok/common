/**
 * CareerDean Achievements
 *
 * Note:
 * - Any achievement that has a required reputation below 0 means that the
 * achievement can not be gained with reputation.
 */

module.exports = {

	joinedCareerDean: {
		rep: -1,
		name: 'Joined CareerDean',
		iconGreen: '/images/icons/achievement-joined.jpg',
		iconDark: '/images/icons/achievement-joined-dark.jpg',
		description: 'Unlocks all content.',
		key: 'joinedCareerDean',
		state: 'user'
	},

	opVision: {
		rep: 10,
		name: 'OP Vision',
		iconGreen: '/images/icons/achievement-op-vision.jpg',
		iconDark: '/images/icons/achievement-op-vision-dark.jpg',
		description: 'You now get notifications when the OP appreciates, <br />or replies to your answer <br />to their question.',
		key: 'opVision',
		state: 'frontpage'
	},

	boosterPack: {
		rep: 35,
		name: 'Booster Pack',
		iconGreen: '/images/icons/achievement-booster-pack.jpg',
		iconDark: '/images/icons/achievement-booster-pack-dark.jpg',
		description: 'You now have recommended content at the top of your feed for faster, smarter answering.',
		key: 'boosterPack',
		state: 'frontpage'
	},

	smartFilter: {
		rep: 275,
		name: 'Smart Filter',
		iconGreen: '/images/icons/achievement-smart-filter.jpg',
		iconDark: '/images/icons/achievement-smart-filter-dark.jpg',
		description: 'You now can hide posts that you’ve already answered.',
		key: 'smartFilter',
		state: 'user.settings'
	},

	friendlyNeighbors: {
		rep: 75,
		name: 'Friendly Neighbors',
		iconGreen: '/images/icons/achievement-friendly-neighbors.jpg',
		iconDark: '/images/icons/achievement-friendly-neighbors-dark.jpg',
		description: 'You now can see <br />people who are the most <br />in common with you, <br />based on discussions <br />you both participate in.',
		key: 'friendlyNeighbors',
		state: 'frontpage'
	},

	beastMode: {
		rep: 150,
		name: 'Beast Mode',
		iconGreen: '/images/icons/achievement-beast-mode.jpg',
		iconDark: '/images/icons/achievement-beast-mode-dark.jpg',
		description: 	'You now can answer questions and navigate the feed using keyboard shortcuts: <br />' +
						'• Right arrow (next) <br />' +
						'• Left arrow (previous) <br />' +
						'• Enter (focus answer field) <br />' +
						'• Cmd+Enter (post answer)',
		key: 'beastMode',
		state: 'frontpage'
	},

	endorser: {
		rep: 500,
		name: 'Endorser',
		iconGreen: '/images/icons/achievement-endorser.jpg',
		iconDark: '/images/icons/achievement-endorser-dark.jpg',
		description: 'You now can give your ’seal of approval’ to someone else’s answer.',
		key: 'endorser',
		state: 'frontpage'
	},

	tagger: {
		rep: 850,
		name: 'Tagger',
		iconGreen: '/images/icons/achievement-tagger.jpg',
		iconDark: '/images/icons/achievement-tagger-dark.jpg',
		description: 'You now can help your community by tagging posts with their proper topics.',
		key: 'tagger',
		state: 'frontpage'
	},

	swag: {
		rep: 1337,
		name: 'Swag',
		iconGreen: '/images/icons/achievement-swag.jpg',
		iconDark: '/images/icons/achievement-swag-dark.jpg',
		key: 'swag',
		state: null
	},

	teamPlayer: {
		rep: 2000,
		name: 'Team Player',
		iconGreen: '/images/icons/achievement-team-player.jpg',
		iconDark: '/images/icons/achievement-team-player-dark.jpg',
		description: 'You now have <br />moderator powers.',
		key: 'teamPlayer',
		state: 'frontpage'
	}

};
