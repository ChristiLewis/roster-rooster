const checkIfEqual = require('../lib/Engineer.js');

test('checks if 100 is equal to 200', () => {
    expect(checkIfEqual(100, 200)).toBe(false);
});