// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the name of the project?',
    },
    {
      type: 'input',
      message: 'describe your project?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What is your preferred method of installation?',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'What is your preferred method of usage?',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'What license are you using?',
      name: 'license',
    },
    {
      type: 'input',
      message: 'Who are contributed to the project?',
      name: 'contributing',
    },
    {
      type: 'input',
      message: 'What tests are you using for this project?',
      name: 'tests',
    },
    {
      type: 'input',
      message: 'What questions do you have for this project?',
      name: 'questions',
    },
  ])
  .then((data) => {
    console.log(data);
    // generateMarkdown(data);
    // // const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

    // fs.writeFile('README.md', JSON.stringify(data, null, '\t'), (err) =>
    //   err ? console.log(err) : console.log('Success!')
    // );
    fs.writeFileSync("./dist/README.md", `
# ${data.title}

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

## Description
${data.description}
## Installation
${data.installation}
## Usage
${data.usage}
## License
${data.license}
## Test
${data.test}
## Questions
${data.questions}
    `)
  });

// TODO: Create a function to write README file

// function writeToFile(fileName, data) {
//   fs.writeFile(fileName, data, (err) =>
//     err ? console.log(err) : console.log('Success!')
//   );

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app

