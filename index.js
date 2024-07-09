// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown')
// the above code makes variables for me yo be able to use the needed packages

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Write a description for your project."
    },
    {
        type: "input",
        name: "install",
        message: "Include any installation instructions that your project requires."
    },
    {
        type: "input",
        name: "use",
        message: "List any needed information about how to use this project."
    },
    {
        type: "list",
        name: "license",
        message: "Please select a license type.",
        choices: [
            'none',
            'MIT',
            'Eclipse',
            'Apache-2.0',
        ]
    },
    {
        type: "input",
        name: "contribution",
        message: "List any contribution guidelines."
    },
    {
        type: "input",
        name: "testing",
        message: "List any test instructions."
    },
    {
        type: "input",
        name: "github",
        message: "What's your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What's your email?"
    }
];
// The above code is a list of promps that inquirer will be using a few lines down

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
        error ? console.error(error) : console.log("Success!")
    });
}

//writes a new file with the inputted argument for the file name and data, logs error if file wasn't written and logs success if it was

// TODO: Create a function to initialize app
function init() {
    console.log('starting CLI app...');
    inquirer.prompt(questions).then((responses) => {
        writeToFile('README.md', generateMarkdown(responses))
    });
}
// Lets user know the app is starting, then uses prompt with the array to go over questions. When it gets a response, it runs write to file to a file named README and uses generate markdown for the content of the file

// Function call to initialize app
init();
