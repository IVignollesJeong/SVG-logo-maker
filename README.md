# SVG Logo Maker

## Description

This project is a logo generating application that creates SVG files using the command-line interface. The criteria for this project were as follows: 

```
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```
```
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```

## Installation

Installation for this command line application is done by downloading this repository's code and running the code in your source code editor. </br> 
VSCode uses an integrated terminal through which this application is meant to be used. NPM libraries and dependencies must also be downloaded such as Inquirer and Jest. </br>
The commands "npm init -y", "npm i inquirer@8.2.4", and "npm i jest" must be ran in in the CLI to initialize the needed libraries. </br>

Source code for the portfolio page can be found here: [SVG-logo-maker index.js file](https://github.com/IVignollesJeong/SVG-logo-maker/blob/master/index.js).

## Usage



The command-line application functions as follows:

- Upon downloading the code and running in VSCode, the user will initialize the application by using the commands "npm init -y", "npm i inquirer@8.2.4", and "npm i jest".
- By running the command above, the required libraries will have been initialized and installed.
- TO RUN JEST TEST: run the command "npm test" in the command-line interface.
- TO RUN SVG GENERATOR/INQUIRER: run the command "node index.js" in the command-line interface.
- Upon running "node index.js", a series of prompts will appear asking the user to input 3 characters for the logo text, select a shape, and input logo and text colors.
- Once the prompts are completed, a .svg file will have been generated in the project directory.
- Right-click the newly generated .svg file and select "preview SVG" to view the .svg image.

## Credits

[Inquirer NPM page](https://www.npmjs.com/package/inquirer/v/8.2.4) </br>
[Jest NPM page](https://www.npmjs.com/package/jest) </br>
[MDN Web Docs on SVG basic shapes](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes) </br>
[MDN Web Docs help on async functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) </br>
OSU Bootcamp </br>

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) </br>

MIT License

Copyright (c) [2023] [Ian Vignolles-Jeong]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

