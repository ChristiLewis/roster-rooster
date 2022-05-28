const Employee = require('./Employee');
//CONTACT DEFINED FIRST SIM TO DEADLINE CONSTRUCTOR EXCEPT ADDRESS 
const Contact = require('../lib/Contact');

class Deadline extends Employee {
    constructor(name, weapon) {
        super(name);
        //MOVED TO PARENT-CHARACTER
        this.weapon = weapon;
        this.potion = new Potion();    
    }

    getDescription() {
        return `A ${this.name} holding a ${this.weapon} has appeared!`;
    }
}

module.exports = Enemy;
