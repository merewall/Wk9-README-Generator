// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
      validate: (titleInput) => {
          if (titleInput) {
              return true;
          } else {
              console.log("You must enter a title for your project.");
              return false;
          }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a brief description of your project.',
      validate: (descriptionInput) => {
        if (descriptionInput) {
            return true;
        } else {
            console.log("You must enter a description for your project.");
            return false;
        }
    }
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the installation instructions?',
      validate: (installationInput) => {
        if (installationInput) {
            return true;
        } else {
            console.log("You must enter installation instructions for your project.");
            return false;
        }
    }
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Describe how to use your project.',
      validate: (usageInput) => {
        if (usageInput) {
            return true;
        } else {
            console.log("You must enter usage instructions for your project.");
            return false;
        }
    }
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Please list instructions for contributing to the project.',
      validate: (contributingInput) => {
        if (contributingInput) {
            return true;
        } else {
            console.log("You must enter instructions for contributing to your project.");
            return false;
        }
    }
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Please describe how to test your project.',
      validate: (testsInput) => {
        if (testsInput) {
            return true;
        } else {
            console.log("You must enter instructions for testing your project.");
            return false;
        }
    }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license for the project.',
        choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense', 'None'],
        validate: (licenseInput) => {
            if (licenseInput) {
                return true;
            } else {
                console.log("You must choose a license for your project.");
                return false;
            }
        }
      },
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Successfully created README.md!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            const readmeContent = generateMarkdown(answers);
            writeToFile('README.md', readmeContent);
        });
}

// Function call to initialize app
init();
