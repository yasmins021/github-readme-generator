// TODO: Include packages needed for this application
const inquirer = require( 'inquirer');
const fs= require('fs');
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [

    {
        type: 'input',
        message: 'what is your project title ?',
        name:'title',

    },
    {
       type:'input' ,
       message:'Provide a short description explaining the what , why, and how of ',
       name: 'description',
    },
   
    { type: 'input' ,
        message: 'what are the steps required to install your project? provide a step-by step description of how to get the development environment',
        name: 'installation',

    },
    {
        type: 'input',
        message: 'Provide instructions and examples for use. Include screenshots as needed',
        name: 'usage',
    },
    {
       type: 'input',
       message: 'what are the projects contributing guidelines for other developers? ',
       name: 'contribute',
    },

    {
        type:  'input',
       message: ' Any instructions/ examples on how to run tests? ',
       name: 'testing' ,
    },

    {
        type: 'list',
        message:'do you have a screenshot for your project usage?',
        name: 'license',
        choices: [ "MIT", "IBM", "APACHE"]
    },

    {
        type: 'input',
       message:' Almost there what is your GitHub username? ',
       name: 'github',
    },
    {
        type: 'input',
       message:' Lastly what is your email?',
       name: 'email',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers =>{
writeToFile("README.md", generateMarkdown(answers))
    })
}

// Function call to initialize app
init();
