const checkIfEqual = require('../lib/Manager');

test('checks if 100 is equal to 100', () => {
    expect(checkIfEqual(100, 100)).toBe(true);
});
