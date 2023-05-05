// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer= require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        message:'What is the title of your project?',
        name:'title',
    },
    {
        type:'input',
        message:'Give a brief description of your project:',
        name:'description',
    },
    {
        type:'confirm',
        message:'Would you like for your README to have a Table of Contents?',
        name:'tableOfContents',
        default:false,
    },
    {
        type:'input',
        message:'Enter steps for installation:',
        name:'installation',
    },
    {
        type:'input',
        message:'Describe the functionality of your project with steps for usage',
        name:'usage',
    },
    {
        type:'input',
        message:'List any necessary credits. This includes contributors, third-party assets, or any tutorials.',
        name:'credits',
    },
    {
        type:'list',
        message:'What license does your project use?',
        name:'license',
        choices: ['MIT', 'Creative Commons Attribution-NonCommercial 4.0 International', 'GPLv3', 'Apache', 'N/A']
    },
    {
        type:'input',
        message:'Give a link to your deployed application(hit enter to skip if your application is not live!):',
        name:'link',
    },
    {
        type:'input',
        message:'List any information about contributing to your project:',
        name:'contribute',
        default:'N/A',
    },
    {
        type:'input',
        message:'List any testing information:',
        name:'test',
        default:'N/A',
    },
    {
        type:'input',
        message:'List your github profile:',
        name:'github',
    },
    {
        type:'input',
        message:'List your email:',
        name:'email',
    }
    

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err =>{
        if(err) {
            return console.log(err);
        }
        console.log('success');
      })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
.then(data => {
    writeToFile('README.md', generateMarkdown(data))
})
}

// Function call to initialize app
init();
