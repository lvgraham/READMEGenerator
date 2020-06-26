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
    // {
    //     type: "input",
    //     message: "Write a table of contents (separated by commas)",
    //     name: "tableOfContents"
    // },
    // {
    //     type: "input",
    //     message: "What are the installation guidelines",
    //     name: "install"
    // },
    // {
    //     type: "input",
    //     message: "What is your application used for?",
    //     name: "usage"
    // },
    // {
    //     type: "checkbox",
    //     message: "Select a license",
    //     name: "license",
    //     choices: [
    //         'Apache License 2.0', 
    //         'GNU General Public License v3.0', 
    //         'MIT license', 
    //         'Mozzila Public License 2.0',
    //     ]
    // },
    // {
    //     type: "input",
    //     message: "Who is(are) the author(s)?",
    //     name: "author"
    // },
    // {
    //     type: "input",
    //     message: "What are the rules for contributing?",
    //     name: "contribute"
    // },
    // {
    //     type: "input",
    //     message: "Tests",
    //     name: "test"
    // },
    // {
    //     type: "input",
    //     message: "enter contact information for any questions. ",
    //     name: "questions"
    // }

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
        fs.appendFileSync(filename, '## Description \n' + response.description + '\n', function(err){
            if (err) {
                return console.log(err);
            }
            console.log('Success!');
        });

        // fs.appendFileSync(filename, '#' + response.title + '\n', function(err){
        //     if (err) {
        //         return console.log(err);
        //     }
        //     console.log('Success!');
        // });

        // fs.appendFileSync(filename, '#' + response.title + '\n', function(err){
        //     if (err) {
        //         return console.log(err);
        //     }
        //     console.log('Success!');
        // });

        // fs.appendFileSync(filename, '#' + response.title + '\n', function(err){
        //     if (err) {
        //         return console.log(err);
        //     }
        //     console.log('Success!');
        // });

        // // function to initialize program
        // function init() {

        // }
    




    })

// function call to initialize program
// init();