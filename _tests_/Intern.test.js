//FOR THE TEST THE CHILD NEEDS TO IMPORT ITSELF- THE ACTUAL FUNCTION IT NEEDS TO IMPORT ITS PARENT
const Intern = require('../lib/Intern.js');
//INTERN CLASS HAS EMPLOYEE'S PROPERTIES AND METHODS APPLIED IN ITS OWN FUNCTION

test('checks if it can find a school in the constructor', () => {
    const testValue = "schoolName";
    const int = new Intern(
        'Jane',
        2,
        "jane@gmail.com",
        testValue
    );
    expect('schoolName').toBe(testValue);
});

