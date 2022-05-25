// const { expect } = require('@jest/globals');
// const { test } = require('picomatch');
const checkIfEqual = require('../lib/Intern.js');

test('checks if 100 is equal to 100', () => {
    expect(checkIfEqual(100, 100)).toBe(true);
});