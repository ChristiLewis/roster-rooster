//IMPORT
const Employee = require('./Employee');

class Manager extends Employee {

    constructor(name = '') {
        super(name);
        super(id);
        super(email);
    };

    getRole() {
        console.log(`You can skip this question ${this.name} , we know you are the Manager!`)
    };
};

module.exports = Manager