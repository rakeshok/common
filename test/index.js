/*eslint no-unused-expressions:0*/
var common = require('../index');
var expect = require('chai').expect;

describe('common', function() {
	it('require', function() {
		expect(common.addApostrophe).exist;
		expect(common.buildCommunityKey).exist;
		expect(common.buildObject).exist;
	});

	it('require lib', function() {
		var capitalize = require('../lib/capitalize');
		expect(capitalize).exist;
	});

	it('capitalize', function() {
		expect(common.capitalize('')).equal('');
		expect(common.capitalize('antonio')).equal('Antonio');
	});
});
