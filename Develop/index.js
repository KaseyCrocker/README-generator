// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
        default: 'KaseyCrocker',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log('A valid GitHub username is required.');
            }
            return true;
        }
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
        default: 'kasey_crocker@yahoo.com',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log('A valid email is required.')
            }
            return true;
        }
    },
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
        default: 'Project Title',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log('A valid project title is required.');
            }
            return true;
        }
    },
    {
        type: 'input',
        message: 'Please write a short description of your project.',
        name: 'description',
        default: 'Project Description',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log('A valid project description is required.');
            }
            return true;
        }
    },
    {
        type: 'list',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None'],
        name: 'license'
    },
    {
        type: 'input',
        message: 'What command should be run to install dependencies?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'What command should be run to run tests?',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'What does the user need to know about using the repo?',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'What does the user need to know about contributing to the repo?',
        name: 'contributing'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
async function init() {
    try {
        const userResponses = await inquirer.prompt(questions)
        console.log('Your responses: ', userResponses)
        console.log("Thank you for your responses! Fetching your GitHub data next...");
    } catch (error) {
        console.log(error)
    }
};

// Function call to initialize app
init();

//questions().then(answers => console.log(answers));
