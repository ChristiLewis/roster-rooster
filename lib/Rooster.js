//ADD NPM AND IMPORT FILES
const inquirer = require('inquirer');
const { writeFile, copyFile } = require('../utils/generate-site.js');
///THIS IS A DESTINATION FILE TO RECEIVE THE LOCAL MODULE PAGE-TEMPLATE
const generatePage = require('../src/page-template.js');
const fs = require('fs');
// const nodemailer = require('nodemailer');
const Employee = require('./Employee')
const Engineer = require('./Engineer')
const Intern = require('./Intern')
const Manager = require('./Manager')

function Rooster() {
    //ADD ROSTER OBJECT PROPERTIES
    this.roundNumber = 0;
    this.isManagerTurn = false;
    this.engineers = [];
    this.currentEngineer;
    this.manager = 'name';
    this.anything.issue = Number
    this.anything.repo = Number
    this.anything.commit = Number

    this.engineers.push(new Engineer(`${this.name}, ${this.id}, ${this.email}, ${this.github}, ${this.algorithm}, ${this.Intern}`));
    // this.engineers.push(new Engineer('Latoya', 'virtualChaos'));
    // this.engineers.push(new Engineer('Luigi', 'fibonacciFrequencies'));

    this.currentEngineer = this.engineers[0];

    inquirer
        .prompt(
            {
                type: 'input',
                name: 'name',
                message: 'What is your name? (Required)',
                validate: nameInput => {
                    if (nameInput === ' ') {
                        console.log('You need to enter your name or Manager password! Please see the README file for your password.');
                    } else {
                        return Rooster.prototype.startMenu();
                    }
                }
            });

    Rooster.prototype.startMenu = function () {
        if (this.manager.commit.length > this.currentEngineer.commit.length) {
            this.isManagerTurn = true;
        } else {
            this.isManagerTurn = false;
        }

        console.log('Your stats are as follows:');
        console.table(this.manager.getStats());
        console.log(this.currentEngineer.getDescription());

        this.contact();
    };

    Rooster.prototype.contact = function () {
        if (this.isManagerTurn) {
            //PROMPT USER TO CHOOSE CONTACT OR ADD AN INTERN
            inquirer
                .prompt({
                    type: 'list',
                    message: 'What would you like to do?',
                    name: 'action',
                    choices: ['Contact', 'Assign Intern']
                })
                .then(({ action }) => {
                    if (action === 'Use Intern') {
                        //TBD-SEE BELOW
                        if (!this.Manager.getQuarter()) {
                            console.log("You don't have any Interns!");
                            return this.checkEndOfContact();
                        }
                        // IF INTERN THEN DISPLAY THE ARRAY LIST OF INTERNS
                        inquirer
                            .prompt({
                                type: 'list',
                                message: 'Which intern would you like to use?',
                                name: 'action',
                                //TBD SEE BELOW .MAP CALLBACK
                                choices: this.manager.getQuarter().map((item, index) => `${index + 1}: ${item.name}`)
                            })
                            // APPLY SELECTED INTERN EFFECT TO THE MANAGER
                            .then(({ action }) => {
                                const internDetails = action.split(': ');

                                this.manager.useIntern(internDetails[0] - 1);
                                console.log(`You used a ${internDetails[1]} intern.`);

                                this.checkEndOfContact();
                            });

                    } else {
                        const success = this.Manager.getContactValue();
                        this.currentEngineer.reduceIssue(success);

                        console.log(`You need to contact the ${this.currentEngineer.name}`);
                        console.log(this.currentEngineer.getIssue());

                        this.checkEndOfContact();
                    }
                });
            // ELSE CONTACTING THEN SUBTRACT ISSUES FROM THE MANGER BASED ON ENGINEER'S CONTACT VALUE
        } else {
            const success = this.currentEngineer.getContactValue();
            this.manager.reduceIssue(success);

            console.log(`You were contacted by the ${this.currentEngineer.name} please respond.`);
            console.log(this.manager.getIssue());

            this.checkEndOfContact();
        }
    };

    Rooster.prototype.checkEndOfContact = function () {
        if (this.manager.needsMoreWork() && this.currentEngineer.needsMoreWork()) {
            this.isManagerTurn = !this.isManagerTurn;
            this.contact();
        }
        else if (this.manager.needsMoreWork() && !this.currentEngineer.needsMoreWork()) {
            console.log(`You need to contact and help the ${this.currentEngineer.name}`);

            this.manager.addIntern(this.currentEngineer.intern);
            console.log(`${this.manager.name} found a ${this.currentEngineer.intern.name} intern`);

            this.roundNumber++;

            if (this.roundNumber < this.engineers.length) {
                this.currentEngineer = this.engineers[this.roundNumber];
                this.startNewContact();
            } else {
                console.log('You need to help your team, see the contact html generated in the dist directory, and open it in your browser to quickly reach out to them ASAP!');
            }
        }
        else {
            console.log("You need to contact your team for a job well done! See the contact html generated in the dist directory, and open it in your browser to quickly give them kudos today!");
        }
    };
}

module.exports = Rooster;