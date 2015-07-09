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
		iconGreen: '/images/icons/rep-0.jpg',
		iconDark: '/images/icons/rep-0-dark.jpg',
		description: 'Signed up on CareerDean',
		key: 'joinedCareerDean',
		state: 'user'
	},

	opVision: {
		rep: 10,
		name: 'OP Vision',
		iconGreen: '/images/icons/rep-10.jpg',
		iconDark: '/images/icons/rep-10-dark.jpg',
		description:	'You get notifications when the \'Original Poster\' ' +
									'appreciates your answer to their question.',
		key: 'opVision',
		state: 'frontpage'
	},

	boosterPack: {
		rep: 35,
		name: 'Booster Pack',
		iconGreen: '/images/icons/rep-50.jpg',
		iconDark: '/images/icons/rep-50-dark.jpg',
		key: 'boosterPack',
		state: 'frontpage'
	},

	smartFilter: {
		rep: 275,
		name: 'Smart Filter',
		iconGreen: '/images/icons/rep-150.jpg',
		iconDark: '/images/icons/rep-150-dark.jpg',
		key: 'smartFilter',
		state: 'user.settings'
	},

	friendlyNeighbors: {
		rep: 75,
		name: 'Friendly Neighbors',
		iconGreen: '/images/icons/rep-150-2.jpg',
		iconDark: '/images/icons/rep-150-2-dark.jpg',
		key: 'friendlyNeighbors',
		state: 'frontpage'
	},

	beastMode: {
		rep: 150,
		name: 'Beast Mode',
		iconGreen: '/images/icons/rep-400.jpg',
		iconDark: '/images/icons/rep-400-dark.jpg',
		key: 'beastMode',
		state: 'frontpage'
	},

	endorser: {
		rep: 500,
		name: 'Endorser',
		iconGreen: '/images/icons/rep-500.jpg',
		iconDark: '/images/icons/rep-500-dark.jpg',
		key: 'endorser',
		state: 'frontpage'
	},

	tagger: {
		rep: 850,
		name: 'Tagger',
		iconGreen: '/images/icons/rep-1k.jpg',
		iconDark: '/images/icons/rep-1k-dark.jpg',
		key: 'tagger',
		state: 'frontpage'
	},

	swag: {
		rep: 1337,
		name: 'Swag',
		iconGreen: '/images/icons/rep-1337.jpg',
		iconDark: '/images/icons/rep-1337-dark.jpg',
		key: 'swag',
		state: null
	},

	teamPlayer: {
		rep: 2000,
		name: 'Team Player',
		iconGreen: '/images/icons/rep-2k.jpg',
		iconDark: '/images/icons/rep-2k-dark.jpg',
		key: 'teamPlayer',
		state: 'frontpage'
	}

};
