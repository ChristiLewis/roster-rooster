const checkIfEqual = require('../lib/Engineer.js');

test('checks if 200 is equal to 200', () => {
    expect(checkIfEqual(200, 200)).toBe(true);
});