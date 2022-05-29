const inquirer = require('inquirer');
const fs = require('fs');

//RESEARCH FROM https://stackoverflow.com/questions/21617468/node-js-generate-html

// var http = require('http');

// http.createServer(function (req, res) {
//     var html = buildHtml(req);

//     res.writeHead(200, {
//         'Content-Type': 'text/html',
//         'Content-Length': html.length,
//         'Expires': new Date().toUTCString()
//     });
//     res.end(html);
// }).listen(8080);

// function buildHtml(req) {
//     var header = '';
//     var body = '';

//     // concatenate header string
//     // concatenate body string

//     return '<!DOCTYPE html>'
//         + '<html><head>' + header + '</head><body>' + body + '</body></html>';
// };

var fs = require('fs');

var fileName = 'path/to/file';
var stream = fs.createWriteStream(fileName);

stream.once('open', function(fd) {
  var html = buildHtml();

  stream.end(html);
});

//ADD NPM AND IMPORT FILES
const inquirer = require('inquirer');
const { writeFile, copyFile } = require('./utils/generate-site');
///THIS IS A DESTINATION FILE TO RECEIVE THE LOCAL MODULE PAGE-TEMPLATE
const generatePage = require('./src/page-template');
const fs = require('fs');
// const nodemailer = require('nodemailer');
const Employee = require('./lib/Employee')
const Engineer = require('./Engineer')
const Intern = require('./Intern')
const Manager = require('./Manager')

const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name? (Required)',
        validate: name => {
            if (!name) {
                console.log('Please enter your name!');
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        id: 'id',
        message: 'What is your Employee Rooster ID number? (Required)',
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
        name: 'confirmStartNewEmployee',
        message: 'Would you like to begin Rooster Employee?',
        default:

            //DESTRUCTURE NAME FROM PROMPT OBJECT
            (({ name }) => {
                this.manager = new Manager(name);
                // TEST THE OBJECT CREATION console.log(this.currentDeadline, this.manager);
                this.startNewEmployee();
            })
    }
]
    .then(usageData => {
        readmeData.examples.push(usageData);
        if (usageData.confirmAddUsage) {
            return promptUsage(htmlData);
        } else {
            return htmlData;
        }
    })

//WRITEFILE FUNCTION
function writeToFile(fileName, data) {
    console.log(writeToFile);
    return fs.writeFile(fileName, data)
}

//INITIALIZE FUNCTION
function init() {
    console.log(generatePage.html);
    inquirer.prompt(questions).then((answers) => {
        console.log(JSON.stringify(answers, null, '  '));
        fs.writeFileSync("index.html", html({ ...answers }))
    })
}

init();

//INITIALIZE FUNCTION
function init() {
    console.log(generatePage.html);
    inquirer.prompt(questions).then((answers) => {
        console.log(JSON.stringify(answers, null, '  '));
        fs.writeFileSync("index.html", html({ ...answers }))
    })
}

init();