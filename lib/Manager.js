//IMPORT PARENT
const Employee = require("./Employee");
const Intern = require("./Intern")

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
        this.quarter = [new Intern('issue'), new Intern()];
    }

    //OFFICE NUMBER
    getOfficeNumber() {
        return this.officeNumber;
    }
    //OVERRIDDEN TO RETURN 'MANAGER'
    getRole() {
        return 'Manager';
    }

    getStats() {
        return {
            potions: this.inventory.length,
            health: this.health,
            strength: this.strength,
            agility: this.agility
        };
    }
}

module.exports = Manager;

