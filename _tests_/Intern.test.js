// const { expect } = require('@jest/globals');
// const { test } = require('picomatch');
const checkIfEqual = require('../lib/Intern.js');

test('checks if 100 is equal to 101', () => {
    expect(checkIfEqual(100, 101)).toBe(false);
});