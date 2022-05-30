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
            interns: this.quarter.length,
            issue: this.issue,
            repo: this.repo,
            commit: this.commit
        };
    }

    getQuarter() {
        if (this.quarter.length) {
            return this.quarter;
        }
        return false;
    }

    addIntern(intern) {
        this.quarter.push(intern);
    }

    useIntern(index) {
        const intern = this.getInventory().splice(index, 1)[0];

        switch (intern.name) {
            case 'commit':
                this.commit += intern.value;
                break;
            case 'issue':
                this.issue += intern.value;
                break;
            case 'repo':
                this.repo += intern.value;
                break;

        }
    }


}

module.exports = Manager;

