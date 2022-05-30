//ADD NPM AND IMPORT FILES
const inquirer = require('inquirer');
const { writeFile, copyFile } = require('../utils/generate-site.js');
///THIS IS A DESTINATION FILE TO RECEIVE THE LOCAL MODULE PAGE-TEMPLATE
const generatePage = require('../src/page-template.js');
const fs = require('fs');
// const nodemailer = require('nodemailer');
// const Employee = require('./Employee')
const Engineer = require('./Engineer')
const Intern = require('./Intern')
const Manager = require('./Manager')

function Roster() {
    //ADD ROSTER OBJECT PROPERTIES
    this.dayNumber = 0;
    this.isManagerTurn = false;
    this.engineers = [];
    this.currentEngineer;
    this.manager;
}

//ADD INITIALIZEROSTER()METHOD
Roster.prototype.initializeRoster = function () {
    this.engineers.push(new Engineer('backend', 'budget'));
    this.engineers.push(new Engineer('frontend', 'revision'));
    this.engineers.push(new Engineer('fullstack', 'schedule'));

    this.currentEngineer = this.engineers[0];

    inquirer
        .prompt({
            type: 'text',
            name: 'name',
            message: 'What is your name?'
        })
        //DESTRUCTURE NAME FROM PROMPT OBJECT
        .then(({ name }) => {
            this.manager = new Manager(name);
            // TEST THE OBJECT CREATION 
            console.log(this.currentEngineer, this.manager);
            this.startNewRoster();
        });

    Roster.prototype.startNewRoster = function () {
        if (this.manager.commit > this.currentEngineer.commit) {
            this.isManagerTurn = true;
        } else {
            this.isManagerTurn = false;
        }

        console.log('Your stats are as follows:');
        console.table(this.manager.getStats());
        console.log(this.currentEngineer.getDescription());

        this.contact();
    };

    Roster.prototype.contact = function () {
        if (this.isManagerTurn) {
            //PROMPT USER TO CHOOSE ATTACK OR TAKE A Intern
            inquirer
                .prompt({
                    type: 'list',
                    message: 'What would you like to do?',
                    name: 'action',
                    choices: ['Attack', 'Use Intern']
                })
                .then(({ action }) => {
                    if (action === 'Use Intern') {
                        //TBD-SEE BELOW
                        if (!this.Manager.getInventory()) {
                            console.log("You don't have any Interns!");
                            return this.checkEndOfContact();
                        }
                        // IF Intern THEN DISPLAY THE ARRAY LIST OF Interns
                        inquirer
                            .prompt({
                                type: 'list',
                                message: 'Which intern would you like to use?',
                                name: 'action',
                                //TBD SEE BELOW .MAP CALLBACK
                                choices: this.manager.getInventory().map((item, index) => `${index + 1}: ${item.name}`)
                            })
                            // APPLY SELECTED intern EFFECT TO THE Manager
                            .then(({ action }) => {
                                const internDetails = action.split(': ');

                                this.manager.useIntern(internDetails[0] - 1);
                                console.log(`You used a ${internDetails[1]} intern.`);

                                this.checkEndOfContact();
                            });

                    } else {
                        const damage = this.Manager.getAttackValue();
                        this.currentEngineer.reduceHealth(damage);

                        console.log(`You attacked the ${this.currentEngineer.name}`);
                        console.log(this.currentEngineer.getHealth());

                        this.checkEndOfContact();
                    }
                });
            // ELSE ATTACKING THEN SUBTRACT HEALTH FROM THE manager BASED ON Engineer'S ATTACK VALUE
        } else {
            const damage = this.currentEngineer.getAttackValue();
            this.manager.reduceHealth(damage);

            console.log(`You were attacked by the ${this.currentEngineer.name}`);
            console.log(this.manager.getHealth());

            this.checkEndOfContact();
        }
    };

    Roster.prototype.checkEndOfContact = function () {
        if (this.manager.isAlive() && this.currentEngineer.isAlive()) {
            this.isManagerTurn = !this.isManagerTurn;
            this.contact();
        }
        else if (this.manager.isAlive() && !this.currentEngineer.isAlive()) {
            console.log(`You've defeated the ${this.currentEngineer.name}`);

            this.manager.addIntern(this.currentEngineer.intern);
            console.log(`${this.manager.name} found a ${this.currentEngineer.intern.name} intern`);

            this.roundNumber++;

            if (this.roundNumber < this.enemies.length) {
                this.currentEngineer = this.enemies[this.roundNumber];
                this.startNewContact();
            } else {
                console.log('You win!');
            }
        }
        else {
            console.log("You've been defeated!");
        }
    };
}

module.exports = Roster;