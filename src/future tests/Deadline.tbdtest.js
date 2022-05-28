const Deadline = require('../../lib/Deadline');
const Contact = require('../lib/_mocks_/Contact.js');

jest.mock('../lib/Contact.js');

test('creates a deadline object', () => {
    const deadline = new Deadline('CEO', 'investor');

    expect(deadline.name).toBe('CEO');
    expect(deadline.weapon).toBe('call');
    expect(deadline.email).toEqual(expect.any(String));
    expect(deadline.strength).toEqual(expect.any(Number));
    expect(deadline.agility).toEqual(expect.any(Number));
    //CHECK FOR DEADLINE CONTACT OBJECT NOT INVENTORY ARRAY
    expect(deadline.contact).toEqual(expect.any(Object))
});