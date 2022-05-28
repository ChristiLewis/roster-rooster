//ADD NPM AND IMPORT FILES
const inquirer = require('inquirer');
const { writeFile, copyFile } = require('../utils/generate-site.js');
///THIS IS A DESTINATION FILE TO RECEIVE THE LOCAL MODULE PAGE-TEMPLATE
const generatePage = require('../src/page-template.js');
const fs = require('fs');
const nodemailer = require('nodemailer');
const Employee = require('./Employee')
// const Engineer = require('./Engineer')
// const Intern = require('./Intern')
// const Manager = require('./Manager')

function Roster() {
    //ADD Roster OBJECT PROPERTIES
    // this.roundNumber = 0;
    // this.isManagerTurn = false;
    // this.deadlines = [];
    // this.currentDeadline;
    this.manager;

    //ADD INITIALIZEROSTER()METHOD
    Roster.prototype.initializeRoster = function () {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is your name? (Required)',
                validate: nameInput => {
                    if (!nameInput) {
                        console.log('Please enter your name!');
                    } else {
                        return true;
                    }
                }
            },
            {
                type: 'input',
                id: 'id',
                message: 'What is your Roster Rooster ID number? (Required)',
                validate: id => {
                    if (id) {
                        return true;
                    } else {
                        console.log('Please enter your id!');
                        return false;
                    }

                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your email address? (Required)',
                validate: email => {
                    if (email) {
                        return true;
                    } else {
                        console.log('Please enter your email!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                officeNumber: 'officeNumber',
                message: 'What is your office number? (Required)',
                validate: officeNumber => {
                    if (officeNumber) {
                        return true;
                    } else {
                        console.log('Please enter your office number!');
                        return false;
                    }
                }
            },
            {
                type: 'confirm',
                name: 'confirmStartNewRoster',
                message: 'Would you like to begin Rooster Roster?',
                default:
                    //DESTRUCTURE NAME FROM PROMPT OBJECT
                    (({ name }) => {
                        this.manager = new Manager(name);
                        // TEST THE OBJECT CREATION console.log(this.currentDeadline, this.manager);
                        this.startNewRoster();
                    })
            },
        ]
        );

        Roster.prototype.startNewRoster = function () {
            // if (this.manager.agility > this.currentDeadline.agility) {
            //     this.isManagerTurn = true;
            // } else {
            //     this.isManagerTurn = false;
            // }

            console.log('Your stats are as follows:');
            console.table(this.manager.getStats());
            console.log(this.currentDeadline.getDescription());

            this.battle();
        };

    }

    // var stream = fs.createWriteStream(Roster);

    // stream.once('open', function(fd) {
    //   const html = buildHtml();

    //   stream.end(html);
    // });
}

module.exports = Roster;