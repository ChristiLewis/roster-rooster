class Employee {
    constructor(
        name,
        id,
        email = ''
    ) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.issue = Math.floor(Math.random() * 10 + 95);
        this.repo = Math.floor(Math.random() * 5 + 7);
        this.commit = Math.floor(Math.random() * 5 + 7);
    }

    getName() {
        if (this.name !== (String) || "") {
            throw new Error("A name is required");
        }
        return this.name;
    }

    getId() {
        if (this.id !== (Number) || isNaN(id) || id < 0) {
            throw new Error("A natural number is required");
        }
        return this.id
    }

    getEmail() {
        if (this.email !== ('/.+@.+\..+/')) {
            throw new Error("A valid email is required");
        }
        return this.email
    }

    getRole() {
        return "Employee"
    }

    isActive() {
        if (this.commit === 0) {
            return false;
        }
        return true;
    }

    needsMoreWork() {
        if (this.issue > 10) {
            return false;
        }
        return true;
    }

    getContactValue() {
        const min = this.repo - 1;
        const max = this.repo + 5;

        return Math.floor(Math.random() * (max - min) + min);
    }

    reduceIssue(issue) {
        this.issue -= issue;

        if (this.issue < 0) {
            this.issue = 0;
        }
    }

    getIssue() {
        return `${this.name}'s issues are now${this.issue}!`;
    }
}

module.exports = Employee;