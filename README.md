# Title
## roster-rooster
Input employees' contact information to quickly access your team.

## Overview 
>As a CLI (Command Line Interface) tool, roster rooster walks a Manager through gathering their team's contact information to be handy in the browser at a moment's notice. Specifically, emails and GitHub profiles.
>

## Contents
* [Title](#title),
* [Overview](#overview),
* [Table of Contents](#contents),
* [Description](#description),
* [Installation](#installation),
* [Notes](#notes),
* [Usage](#usage),
* [Credits](#credits),
* [License](#license),
* [Badges](#badges),
* [Features](#features),
* [Contribute](#contribute),
* [Tests](#tests)

## Description of Use and Criteria
* A CLI app that accepts the Manger/user's input and prompts them to gather all the same information for each teammate.
* The rooster's result is an HTML file that displays a roster formatted in the browser.
* Immediately ready for use, the Manager can click a member's email and it populates in the browser of the Manager, ready to write and send.
* The Manager can also click on the GitHub username and it opens a GitHub profile in a new tab.

* Launching the application prompts the Manager to sign in an verify their credentials of name, employee ID, email address, and office number.

* Once the Manger signs-in, they are prompted to enter team members either as an engineer or an intern.

* Upon selection of "engineer". the Manager is required to input the engineer's name. ID, email, and GitHub username.  Once completed, the Manager is returned to the main menu to add another teammate, this time perhaps, an intern.  The required field for the intern is their name, ID, email, and school.  Once completed, the Manager/user always has two options to add an additional team member or finish building the team.  Once the Manager signifies exiting by building the team, an HTML file is generated that may be opened on the local browser.

## Installation
1) In your root directory clone the <project directory name> repository: git clone git@github.com:<userName>/<project directory name>.git ,
2) Make sure you are in the root directory of the project you just cloned: cd <project directory name>,Check your version of node.js: node -v,
3) Check your version of npm included in node.js: npm -v,
4) Install a node package manager or npm named inquirer: npm i inquirer,
5) Install another npm asset for testing this Test Driven Development (TTD) software:npm install --save-dev jest.  You can verify all functions in the software: npm run test.
6) If the package.json file is missing run initiate npm: npm init -y,
7) Verify your npm packages are installed: ls node_modules.  If nodemailer is missing run the command npm install nodemailer.
8) Add a .gitignore file to spare your GitHub repository uploading all npm modules with each commit: touch .gitignore,
9) Open the .gitignore file and add on line 1: node_modules/,
10) On line 2 .gitignore file add for mac users: .DS_Store/,
11) From the command line, run the node.js app: node index.js,
12) Follow the command line instructions, and after you are happy with your result, uninstall the npm packages to not clog your computer: npm uninstall inquirer,
13) Unistall the fs package too: npm uninstall fs,
14) See below for additional notes or alternate installation instructions.

## Usage

* **Start the application by typing node index.js**
* ![Preview Image](./assets/images/roster-rooster.jpg)
* [![Watch the video]( https://img.video.jpg)]( https://youtu.be/TBD)

* [GitHub Repo for roster-rooster](https://github.com/ChristiLewis/roster-rooster)


## Credits
* [UM Coding Bootcamp](https://bootcamp.miami.edu/coding/)
* [ChristiLewis](https://github.com/ChristiLewis)

## License
* All projects administered by the UM Bootcamp are to be considered under a general MIT license umbrella.
  
## Badges
* There are no badges at this time.

## Features
* node.js practice & README file expediting

## Contribute
* We are open to contributions, please contact the student, ChristiLewis.

## Tests
* JEST based TTD project.

## Contact
* [Contact Me](clc@xxxxxxx.com)