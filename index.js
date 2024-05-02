const inquirer = require("inquirer");
const { Square, Triangle, Circle } = require('./lib/shapes');
const fs = require("fs");

function init() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: "Enter text for the logo. (Must not be more than 3 characters)",
        },
        {
            type: 'input',
            name: 'tcolor',
            message: "Enter the color of your text",
        },
        {
            type: 'list',
            name: 'shape',
            message: "Select a shape for your logo",
            choices: [
                'Circle',
                'Triangle',
                'Square',
            ]
        },
        {
            type: 'input',
            name: 'scolor',
            message: "Enter the color for your shape.",
        },
    ])
    .then(function(answers) {
        let shape;
        if (answers.shape == 'Circle') {
            shape = new Circle(answers.scolor, answers.tcolor, answers.text);
        } else if (answers.shape == 'Triangle') {
            shape = new Triangle(answers.scolor, answers.tcolor, answers.text);
        } else if (answers.shape == 'Square') {
            shape = new Square(answers.scolor, answers.tcolor, answers.text);
        }

        const template = generateLogo(shape.render());

        fs.writeFile('logo.svg', template, function(err) {
            if (err) {
                console.log(err);
            } else {
                console.log('Generated logo.svg');
            }
        });
    });
}

function generateLogo(shape) {
    return `${shape}`;
}

init();
