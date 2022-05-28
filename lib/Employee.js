class Employee {
    constructor(
        name,
        id,
        email
    ) {
        if (typeof name !== (String) || "") {
            throw new Error("Expected input to be a non-empty string");
        }
        if (typeof id !== (Number) || isNaN(id) || id < 0) {
            throw new Error("Expected input to be a natural non-negative number");
        }
        if (typeof email !== ('/.+@.+\..+/')) {
            throw new Error("Expected input to be a valid email");
        }
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name
    }

    getId() {
        return anyNumber = this.id
    }

    getEmail() {
        return this.email
    }

    getRole() {
        return "Employee"
    }
}

module.exports = Employee;