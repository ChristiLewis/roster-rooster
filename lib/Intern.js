//IMPORT PARENT
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(
        name,
        id,
        email,
        school = ''
    ) {
        super(
            name,
            id,
            email
        );
        this.school = school;
        this.types = ['repoHelp', 'commitHelp', 'issueHelp'];
        this.name = name || this.types[Math.floor(Math.random() * this.types.length)];

        if (this.name === 'issue') {
            this.value = Math.floor(Math.random() * 10 + 30);
        } else {
            this.value = Math.floor(Math.random() * 5 + 7);
        }
    }
    //SCHOOL
    getSchool() {
        return this.school;
    }
    //OVERRIDDEN TO RETURN 'INTERN'
    getRole() {
        return 'Intern';
    }

    getContactInfo() {
        return `
            ${this.name};
            ${this.id};
            ${this.email};
            ${this.school}`
    }
}

module.exports = Intern;

