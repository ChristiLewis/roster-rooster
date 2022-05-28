//IMPORT
const inquirer = require('inquirer');
const fs = require('fs');
const nodemailer = require('nodemailer');
// const Employee = require('./lib/Employee')
// const Engineer = require('./lib/Engineer')
// const Intern = require('./lib/Intern')
// const Manager = require('./lib/Manager')

function Roster() {
    //ADD Roster OBJECT PROPERTIES
    this.roundNumber = 0;
    this.isManagerTurn = false;
    this.deadlines = [];
    this.currentDeadline;
    this.manager;
}

//ADD INITIALIZERoster()METHOD
Roster.prototype.initializeRoster = function () {
    // this.deadlines.push(new Deadline('CEO', 'investor'));
    // this.deadlines.push(new Deadline('feature', 'tech'));
    // this.deadlines.push(new Deadline('schedule', 'budget'));

    // this.currentDeadline = this.deadlines[0];

    inquirer
        .prompt({
            type: 'text',
            name: 'name',
            message: 'What is your name?'
        })
        //DESTRUCTURE NAME FROM PROMPT OBJECT
        .then(({ name }) => {
            this.manager = new Manager(name);
            // TEST THE OBJECT CREATION console.log(this.currentDeadline, this.manager);
            this.startNewRoster();
        });

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

module.exports = Roster;