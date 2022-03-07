const { expect } = require('@jest/globals');
const { test } = require('picomatch');
const checkIfEqual = require('../lib/Employee.js');

test('checks if 10 is equal to 10', () => {
    expect(checkIfEqual(10,10), toBe(true));
});