const generateMarkdown = require("./utils/generateMarkdown");

const inquirer = require("inquirer");

var fs = require("fs");
// array of questions for user
const questions = [
    {
        message: "What is your Github username?",
        name: "username",
        type: "input",
    },
    {
        message: "What is your email address?",
        name: "email",
        type: "input",
    },
    {
        message: "What is the Title of this project?",
        name: "title",
        type: "input",
    },
    {
        message: "Provide a brief description.",
        name: "description",
        type: "input",
    },
    {
        message: "Installation instructions for this project.",
        name: "installation",
        type: "input",
    },

];

// // function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), err => err ? console.log(err) : console.log(`Successfully created ${fn}`));
};

// // function to initialize program
function init() {
inquirer.prompt(questions).then(function(response) {
    writeToFile(response);
});
}

// // function call to initialize program
init();
