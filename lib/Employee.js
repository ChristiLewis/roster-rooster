class Employee {
    constructor(
        name,
        id,
        email = ''
    ) {
        this.name = name;
        this.id = id;
        this.email = email;
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
}

module.exports = Employee;