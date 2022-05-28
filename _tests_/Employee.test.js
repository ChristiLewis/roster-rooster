const { it, expect } = require('@jest/globals');
const { getMaxListeners } = require('process');
const Employee = require('../lib/Employee');

//PARENT CLASS
describe('Employee', () => {
    it('should creat an object with a name, id, and email if provided correct inputs', () => {
        const employee = new Employee('Chris', 0, 'chris@gmail.com')
    })

    expect(employee.name).toEqual('Chris');
    expect(employee.id).toEqual(0);
    expect(employee.email('Chris@gmail.com'));
});

// getRole() // Returns Employee


