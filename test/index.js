import common from '..';
import { expect } from 'chai';

describe('common', () => {
	it('require', () => {
		expect(common.addApostrophe).exist;
		expect(common.buildCommunityKey).exist;
		expect(common.buildObject).exist;
	});

	it('require lib', () => {
		let capitalize = require('../lib/capitalize');
		expect(capitalize).exist;
	})

	it('capitalize', () => {
		expect(common.capitalize('')).equal('');
		expect(common.capitalize('antonio')).equal('Antonio');
	});
});
