const Rooster = require('./lib/Rooster.js');

new Rooster().initializeRooster();

//PLACEHOLDER FOR NODEMAILER FUNCTIONALITY

let configOptions = {
    host: "1.2.3.4",
    port: 465,
    secure: true,
    tls: {
        // must provide server name, otherwise TLS certificate check will fail
        servername: "example.com"
    }
}