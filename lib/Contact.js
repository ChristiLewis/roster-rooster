//THIS IS FOR AN ADD-ON FUTURE DEV
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport(transport['', defaults]);

class Contact {
    constructor(name) {
        this.types = ['email', 'call', 'meeting'];
        this.name = name || this.types[Math.floor(Math.random() * this.types.length)];

        if (this.name === 'email') {
            this.function = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: secure_configuration.EMAIL_USERNAME,
                    pass: secure_configuration.PASSWORD
                }
            });

        } else {
            this.value = Math.floor(Math.random() * 5 + 7);
            console.log(`You have ${this.value} hours remaining to finish the project in budget`)
        }
    }
}

module.exports = Contact;