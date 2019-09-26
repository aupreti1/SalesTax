var assert = require('assert');

var sales = require('./sales');

//Input One 
describe('priceWithTax', function() {
    it('it should NOT add tax to Book', function() {
        assert.equal(12.49, 12.49 + (12.49 * 0))
    });
});

describe('priceWithTax', function() {
    it('it should add tax to Music CD', function() {
        assert.equal(16.489, 14.99 + (14.99 * .10))
    });
});

describe('priceWithTax', function() {
    it('it should NOT add tax to Chocolate Bar', function() {
        assert.equal(.85, .85 + (.85 * 0))
    });
});

//Input Two
describe('priceWithTax', function() {
    it('it should add tax to Imported Chocolates', function() {
        assert.equal(10.50, 10.00 + (10.00 * .05))
    });
});

describe('priceWithTax', function() {
    it('it should add tax to Imported Perfume', function() {
        assert.equal(54.625, 47.50 + (47.50 * .15))
    });
});

//Input Three
describe('priceWithTax', function() {
    it('it should add tax to Imported Perfume', function() {
        assert.equal(32.1885, 27.99 + (27.99 * .15))
    });
});

describe('priceWithTax', function() {
    it('it should add tax to Perfume', function() {
        assert.equal(20.889, 18.99 + (18.99 * .10))
    });
});

describe('priceWithTax', function() {
    it('it should NOT add tax to Headache Pills', function() {
        assert.equal(9.75, 9.75 + (9.75 * 0))
    });
});

describe('priceWithTax', function() {
    it('it should add tax to Imported Chocolates', function() {
        assert.equal(11.8125, 11.25 + (11.25 * .05))
    });
});
