const math = require( '../lib/Manager' );

test('checks to see if 2 + 3 = 5', () => {
    expect(math.add(2,3)).toBe(5);
});