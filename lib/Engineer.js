//IMPORT PARENT
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(
        name,
        id,
        email,
        github = ''
    ) {
        super(
            name,
            id,
            email
        );
        this.github = github;
    }
    //GITHUB USERNAME
    getGithub() {
        return this.github;
    }
    //OVERRIDDEN TO RETURN 'ENGINEER'
    getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;

