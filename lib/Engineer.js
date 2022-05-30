//IMPORT PARENT
const Employee = require("./Employee");
//IMPORT-EXPORT 
const Intern = require('../lib/Intern');

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
        this.algorithm = [''];
        this.intern = new Intern()
    }
    //GITHUB USERNAME
    getGithub() {
        return this.github;
    }
    //OVERRIDDEN TO RETURN 'ENGINEER'
    getRole() {
        return 'Engineer';
    }

    getDescription() {
        return `An ${this.name} developing an ${this.algorithm} has been assigned to your team!`
    }

    getContactInfo() {
        return `
            ${this.name};
            ${this.id};
            ${this.email};
            ${this.github}`
    }
}

module.exports = Engineer;

