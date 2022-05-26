const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: secure_configuration.EMAIL_USERNAME,
        pass: secure_configuration.PASSWORD
    }
});

class Email {
    constructor(name) {
        this.types = ['engineer', 'intern'];
        this.name = name || this.types[Math.floor(Math.random() * this.types.length)];

        if (this.name === 'engineer') {
            this.value = Math.floor(Math.random() * 10 + 30);
        } else {
            this.value = Math.floor(Math.random() * 5 + 7);
        }
    }
}

module.exports = Email;