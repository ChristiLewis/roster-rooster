const Contact = require('./Contact');

test('creates an email contact object',
() => {
    const contact = new Contact('email');

    expect(contact.name).toBe('email')
    expect(contact.function).toEqual(expect.any(String));
});

test( 'creates a random contact object', () => {
    const contact = new Contact();

    expect(contact.name).toEqual(expect.any(String));
    expect(contact.name.length).toBeGreaterThan(0);
    expect(contact.value).toEqual(expect.any(String));
});