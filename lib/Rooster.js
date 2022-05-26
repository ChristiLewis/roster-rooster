const inquirer = require('inquirer')
// const Employee = require('./lib/Employee')
// const Engineer = require('./lib/Engineer')
// const Intern = require('./lib/Intern')
// const Manager = require('./lib/Manager')

function Rooster() {
    //ADD ROOSTER OBJECT PROPERTIES
    this.roundNumber = 0;
    this.isManagerTurn = false;
    this.deadlines = [];
    this.currentDeadline;
    this.manager;
}

//ADD INITIALIZEROOSTER()METHOD
Rooster.prototype.initializeRooster =
    // function () {
    //     this.deadlines.push(new Deadline('CEO', 'investor'));
    //     this.deadlines.push(new Deadline('new feature', 'new tech'));
    //     this.deadlines.push(new Deadline('schedule change', 'over budget'));

    //     this.currentDeadline = this.deadlines[0];

    function startMenu() {
        console.log('Build your team!');
        inquirer.prompt([].then(answers => {
            inquirer.prompt[
                {
                    type: "input",
                    name: "Please provide a test question to verify your identity",
                    message: "Please provide an answer for the authorization question.",
                    validate: answer => {
                        if (!true) {
                            return ('Please provide a valid answer');
                        } else {
                            return true;
                        }
                    }

                }

            ]
        },
        ));

    }

module.exports = Rooster;