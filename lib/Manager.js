//IMPORT PARENT
const Employee = require("../lib/Employee");

class Manager extends Employee {
    constructor(
        name,
        id,
        email,
        officeNumber = ''
    ) {
        super(
            name,
            id,
            email
        );
        this.officeNumber = officeNumber;
    }
    //OFFICE NUMBER
    getOfficeNumber() {
        return this.officeNumber;
    }
    //OVERRIDDEN TO RETURN 'ENGINEER'
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;

