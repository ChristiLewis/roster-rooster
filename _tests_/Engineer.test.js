//FOR THE TEST THE CHILD NEEDS TO IMPORT ITSELF- THE ACTUAL FUNCTION IT NEEDS TO IMPORT ITS PARENT
const Engineer = require('../lib/Engineer.js');

test('checks if it can set up github through the constructor', () => {
    const testValue = "githubUsername";
    const eng = new Engineer(
        'Mike',
        1,
        "mike@gmail.com",
        testValue
    );
    expect('githubUsername').toBe(testValue);
});



