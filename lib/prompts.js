// Inquirer prompts
const inquirer = require('inquirer');
async function prompt () {
const answers = await inquirer.prompt([
    {
      type: 'input',
      message: 'Please enter your logo text (up to 3 characters)',
      name: 'text',
    },

    {
      type: 'list',
      message: 'Please select a logo shape:',
      name: 'shape',
      choices: ['Circle', 'Square', 'Triangle'],
    },

    {
        type: 'input',
        message: 'What color will your logo TEXT be? (Hexadecimal code OK)',
        name: 'textColor',
    },

    {
        type: 'input',
        message: 'What color will your logo SHAPE be? (Hexadecimal code OK)',
        name: 'shapeColor',
    }
  ])
    return answers;
};


module.exports = {prompt};