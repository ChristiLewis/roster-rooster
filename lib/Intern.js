//IMPORT PARENT
const Employee = require("../lib/Employee");

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
    }
    //SCHOOL
    getSchool() {
        return this.school;
    }
    //OVERRIDDEN TO RETURN 'ENGINEER'
    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;

