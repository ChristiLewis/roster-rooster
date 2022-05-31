//ADD NPM AND IMPORT FILES
const inquirer = require('inquirer');
const { writeFile, copyFile } = require('./utils/generate-site');
///THIS IS A DESTINATION FILE TO RECEIVE THE LOCAL MODULE PAGE-TEMPLATE
const generatePage = require('./src/page-template');
const fs = require('fs');
// const nodemailer = require('nodemailer');
const Employee = require('./lib/Employee')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager');
const { isNumberObject } = require('util/types');

const Roster = () => {

    //ADD ROSTER OBJECT PROPERTIES
    let roundNumber = 0;
    console.log(roundNumber);
    let isManagerTurn = false;
    console.log(isManagerTurn);
    let engineers = [];
    console.log(engineers);
    let currentEngineer;
    console.log(currentEngineer);
    let manager = 'name';
    console.log(manager);
    let issue = Math.random(isNumberObject);
    console.log(issue);
    let repo = Math.random(isNumberObject);
    console.log(repo);
    const commit = Math.random(isNumberObject);
    console.log(commit);


    return inquirer

        .prompt(
            {
                type: 'input',
                name: 'name',
                message: 'What is your name? (Required)',
                validate: nameInput => {
                    if (nameInput === ' ') {
                        console.log('You need to enter your name!');

                    } else {
                        return true;
                    }
                }
            },
            {
                type: 'confirm',
                name: 'confirmRoster',
                message: 'Would you like to enter some information about your team? ',
                default: true
            },
            {
                type: 'checkbox',
                name: 'employee',
                message: 'What employee position are we making contact information for today?',
                choices: ['Engineer', 'Intern'],
                validate: internInput => {
                    if (!internInput) {
                        return inquirer.prompt([
                            {
                                type: 'input',
                                name: 'name',
                                message: 'What is the name of the engineer? (Required)',
                                validate: nameInput => {
                                    if (nameInput) {
                                        return true;
                                    } else {
                                        console.log('Please enter their name!');
                                        return false;
                                    }
                                }
                            },
                            {
                                type: 'input',
                                name: 'id',
                                message: 'What is their employee id number? (Required)',
                                validate: numberInput => {
                                    if (numberInput) {
                                        return true;
                                    } else {
                                        console.log('Please enter their id number!');
                                        return false;
                                    }
                                }
                            },
                            {
                                type: 'input',
                                name: 'email',
                                message: 'What is their email? (Required)',
                                validate: emailInput => {
                                    if (emailInput) {
                                        return true;
                                    } else {
                                        console.log('Please enter their email!');
                                        return false;
                                    }
                                }
                            },
                            {
                                type: 'input',
                                name: 'github',
                                message: 'What is their GitHub username? (Required)',
                                validate: numberInput => {
                                    if (numberInput) {
                                        return true;
                                    } else {
                                        console.log('Please enter their GitHub username!');
                                        return false;
                                    }
                                }
                            },
                            {
                                type: 'confirm',
                                name: 'confirmAddEngineer',
                                message: 'Would you like to enter another engineer?',
                                default: false
                            }
                        ])

                            .then(engineerData => {
                                contactData.engineers.push(engineerData);
                                if (engineerData.confirmAddEngineer) {
                                    return promptEngineer(contactData);
                                } else {
                                    return contactData;
                                }
                            });

                    } else {

                        return inquirer.prompt([
                            {
                                type: 'input',
                                name: 'name',
                                message: 'What is the name of the intern? (Required)',
                                validate: nameInput => {
                                    if (nameInput) {
                                        return true;
                                    } else {
                                        console.log('Please enter their name!');
                                        return false;
                                    }
                                }
                            },
                            {
                                type: 'input',
                                name: 'id',
                                message: 'What is their employee id number? (Required)',
                                validate: numberInput => {
                                    if (numberInput) {
                                        return true;
                                    } else {
                                        console.log('Please enter their id number!');
                                        return false;
                                    }
                                }
                            },
                            {
                                type: 'input',
                                name: 'email',
                                message: 'What is their email? (Required)',
                                validate: emailInput => {
                                    if (emailInput) {
                                        return true;
                                    } else {
                                        console.log('Please enter their email!');
                                        return false;
                                    }
                                }
                            },
                            {
                                type: 'input',
                                name: 'github',
                                message: 'What is the name of their school? (Required)',
                                validate: numberInput => {
                                    if (numberInput) {
                                        return true;
                                    } else {
                                        console.log('Please enter their school!');
                                        return false;
                                    }
                                }
                            },
                            {
                                type: 'confirm',
                                name: 'confirmAddIntern',
                                message: 'Would you like to enter another intern?',
                                default: false
                            }
                        ])
                            .then(internData => {
                                contactData.interns.push(internData);
                                if (internData.confirmAddIntern) {
                                    return promptIntern(contactData);
                                } else {
                                    return contactData;
                                }
                            });
                    };
                }
            })

        .then(contactData => {
            return generatePage(contactData);
            //REFACTORED USING GENERATE-SITE.JS        
        })
        .then(pageHTML => {
            return writeFile(pageHTML);
        })
        .then(writeFileResponse => {
            console.log(writeFileResponse);
            return copyFile();
        })
        .then(copyFileResponse => {
            console.log(copyFileResponse);
        })
        .catch(err => {
            console.log(err);

        });

}


const Rooster = () => {
    if (this.isManagerTurn) {

        inquirer
            .prompt({
                type: 'list',
                message: 'What role does your employee play on your team?',
                name: 'action',
                choices: ['Engineer', 'Intern']
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
                            message: 'What is the name of your intern?',
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

        console.log(`You need to input the contact info for ${this.currentEngineer.name} please respond.`);
        console.log(this.manager.getIssue());

        this.checkEndOfContact();
    }

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



Roster();
Rooster();

