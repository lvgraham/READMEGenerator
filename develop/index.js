const inquirer = require('inquirer');
const fs = require('fs');
const { error } = require('console');

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
        message: "Write a table of contents (separated by commas)",
        name: "tableOfContents"
    },
    {
        type: "input",
        message: "What are the installation guidelines",
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
            'Mozzila Public License 2.0',
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
        message: "enter contact information for any questions. ",
        name: "questions"
    }

];

inquirer 
    .prompt(questions).then(response => {
        //creating readme file
        const filename = 'README.md'
        // function to add title write README file
        fs.appendFileSync(filename, '# ' + response.title + '\n', function(err){
            if (err) {
                return console.log(err);
            }
            console.log('Success!');
        });

        //function to add description to README.md 
        fs.appendFileSync(filename, '## Description' + '\n' + response.description + '\n', function(err){
            if (err) {
                return console.log(err);
            }
            console.log('Success!');
        });

        //table of contents
        fs.appendFileSync(filename, ('## Table of Contents:' + '\n' + ' - ' + response.tableOfContents.split(', ').join('\n' + ' - ')) + '\n', function(err){
            if (err) {
                return console.log(err);
            }
            console.log('Success!');
        });

        //installation guide
        fs.appendFileSync(filename, '## Installation' + '\n' + response.install + '\n', function(err){
            if (err) {
                return console.log(err);
            }
            console.log('Success!');
        });

        //use-case
        fs.appendFileSync(filename, '## Use Case' + '\n' + response.usage + '\n', function(err){
            if (err) {
                return console.log(err);
            }
            console.log('Success!');
        });

        //license
        fs.appendFileSync(filename, '## License' + '\n' + response.license + '\n', function(err){
            if (err) {
                return console.log(err);
            }
            console.log('Success!');
        });

        //authors & contributors
        fs.appendFileSync(filename, '## Authors & Contributors' + '\n' + response.author + '\n', function(err){
            if (err) {
                return console.log(err);
            }
            console.log('Success!');
        });

        //contribution
        fs.appendFileSync(filename, '## Contribution rules' + '\n' + response.contribute + '\n', function(err){
            if (err) {
                return console.log(err);
            }
            console.log('Success!');
        });

        //tests
        fs.appendFileSync(filename, '## Tests' + '\n' + response.test + '\n', function(err){
            if (err) {
                return console.log(err);
            }
            console.log('Success!');
        });

        //questions
        fs.appendFileSync(filename, '## Questions' + '\n' + response.questions + '\n', function(err){
            if (err) {
                return console.log(err);
            }
            console.log('Success!');
        });

        // // function to initialize program
        // function init() {

        // }
    




    })

// function call to initialize program
// init();