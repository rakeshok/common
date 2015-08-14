/*eslint no-unused-expressions:0*/
var common = require('../index');
var expect = require('chai').expect;

describe('common', function() {
	it('should expose functions when requiring the lib', function() {
		expect(common.addApostrophe).to.exist;
		expect(common.buildObject).to.exist;
	});

	it('should be able to require individual functions', function() {
		var capitalize = require('../util/capitalize');
		expect(capitalize).to.exist;
	});
});
