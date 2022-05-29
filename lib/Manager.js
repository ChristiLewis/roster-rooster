//IMPORT PARENT
const Employee = require("./Employee");

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
    //OVERRIDDEN TO RETURN 'MANAGER'
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;

