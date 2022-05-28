//ENGINEER CLASS HAS EMPLOYEE'S PROPERTIES AND METHODS + 
const Engineer = require('../lib/Engineer.js');

test('checks if can set up github through the constructor', () => {
    const testValue = "githubUsername";
    const eng = new Engineer(
        'Mike',
        1,
        "mike@gmail.com",
        testValue
    );
    expect(`https://github.com/${eng}`).toBe(true);
});



