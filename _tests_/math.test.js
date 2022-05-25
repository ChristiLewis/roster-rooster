const { expect } = require('@jest/globals');
const { test } = require('picomatch');
const math = require( './src/math' );

test('checks to see if 2 + 3 = 5', () => {
    expect(math.add(2,3)).toBe(5);
});

