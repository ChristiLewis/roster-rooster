//SET-UP TEST
const { it } = require('@jest/globals');
const Manager = require('../lib/Manager');

describe('Manager class', () => {
    it('should create a new manager object')
    const manager = new Manager('Chris');

    expect(manager.name).toBe('Chris');
    expect(manager.id).toBe('0');
    expect(manager.email).toBe('Chris@gmail.com')
    expect(manager.officeNumber).toBe(expect.any(Number));

    it('should throw an error for no input', () => {
        const manager = new Manager();

        expect(manager).toThrow();
    });

    it('should throw an error if name is not a string', () => {
        const manager = new Manager();
        const err = new Error("Expected 'name' to be a non-empty string")

        expect(manager).toThrow(err);
    });

});


