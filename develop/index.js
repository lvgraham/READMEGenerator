const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "Enter a description.",
        name: "description"
    },
    {
        type: "input",
        message: "What are the installation guidelines?",
        name: "install"
    },
    {
        type: "input",
        message: "What is your application used for?",
        name: "usage"
    },
    {
        type: "checkbox",
        message: "Select a license",
        name: "license",
        choices: [
            'Apache License 2.0', 
            'GNU General Public License v3.0', 
            'MIT license', 
            'BSD 2-Clause "Simplified" License', 
            'Boost Software License 1.0', 
            'Creative Commons Zero v1.0 Universal', 
            'Eclipse Public License 2.0', 
            'GNU Affero General Public License v3.0', 
            'GNU General Public License v2.0', 
            'GNU Lesser General Public License v2.1', 
            'Mozzila Public License 2.0',
            'The Unilicense',
        ]
    },
    {
        type: "input",
        message: "Who is(are) the author(s)?",
        name: "author"
    },
    {
        type: "input",
        message: "What are the rules for contributing?",
        name: "contribute"
    },
    {
        type: "input",
        message: "Tests",
        name: "test"
    },
    {
        type: "input",
        message: "enter github user name",
        name: "githubUserName"
    },
    {
        type: "input",
        message: "enter contact e-mail address.",
        name: "email"
    },
    {
        type: "input",
        message: "Enter instructions on how to reach you for any questions",
        name: "questions"
    }

];


// function call to initialize program
function init() {
    
    try{
        inquirer.prompt(questions).then(data => {
            const filename = 'README.md'
            fs.writeFile(filename, generateMarkdown(data), err => {
                if (err) {
                    console.log('ERROR: Could not write README'); 
                } else {
                    console.log('Success! You now have an awesome README')
                }
            });

        });

    }
    catch(error){
        console.log(error);
    }
    finally{
        return `You've created an awesome README! Thanks for using the README Generator.`
    }
};

init();

