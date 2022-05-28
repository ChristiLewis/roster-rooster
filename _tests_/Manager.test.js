//FOR THE TEST THE CHILD NEEDS TO IMPORT ITSELF- THE ACTUAL FUNCTION IT NEEDS TO IMPORT ITS PARENT
const Manager = require('../lib/Manager.js');

test('checks if it can find an office number through the constructor', () => {
    const testValue = "officeNumber";
    const mgr = new Manager(
        'Kelly',
        3,
        "kelly@gmail.com",
        testValue
    );
    expect('officeNumber').toBe(testValue);
});


