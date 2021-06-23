// Include packages and files needed for this application: inquirer, fs, and the generateMarkdown.js file
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

// An array of questions that will render in the command line for the user's input
const questions = [
    // Prompt for title
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
    // Prompt for project description
    {
      type: 'input',
      name: 'description',
      message: 'Please write a brief description of your project.',
      validate: (descriptionInput) => {
        if (descriptionInput) {
            return true;
        } else {
            console.log("You must enter a description for your project.");
            return false;
        }
    }
    },
    // Prompt for installation instructions
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
    // Prompt for project usage
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
    // Prompt for how to contribute to project
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
    // Prompt for how to test your project
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
    // Prompt for project license
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
      // Prompt for GitHub user name
      {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub user name.',
        validate: (githubInput) => {
            if (githubInput) {
                return true;
            } else {
                console.log("You must enter your GitHub user name.");
                return false;
            }
        }
      },
      // Prompt for email address
      {
        type: 'input',
        name: 'email',
        message: 'Please enter your contact email address.',
        validate: (emailInput) => {
            if (emailInput) {
                return true;
            } else {
                console.log("You must enter a contact email for your project.");
                return false;
            }
        }
      },
  ];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Successfully created README.md!')
    );
}

// Function to initialize app
function init() {
    // Use the questions to prompt the user in command line
    inquirer.prompt(questions)
        // Use the user's answers to generate the markdown for the README.md and output it to a new directory
        .then((answers) => {
            const readmeContent = generateMarkdown(answers);
            writeToFile('./sample-readme/README.md', readmeContent);
        });
}

// Function call to initialize app
init();
