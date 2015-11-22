var test = require('tape'),
	rxArray = require('../src/rxArray'),
	rArray = rxArray();

test('Check name property', function(assert) {
	var actual = rArray.name;
	var expected = 'Steven';

	assert.equal(actual, expected, 'Name should be Steven.');
	assert.end();
});
