// filesystem import, shapes.js import, and inquirer prompts import:
const fs = require('fs');
const { Circle, Square, Triangle } = require('./lib/shapes');
const { prompt } = require('./lib/prompts');


// prompt() will retrieve answers from prompts.js inquirer prompts, determine which shape was selected,
// then generate the svg shape, text parameters, and svg file name.
prompt()
  .then(answers => {
    const { shape, text, shapeColor, textColor } = answers;

    let chosenShapeText = "";
    let chosenShape = shape;
    let svgFileName = "";
    if (shape === 'Circle') {
      chosenShape = new Circle();
      chosenShape.setColor(shapeColor);
      chosenShapeText = `x="100" y="115" font-size="50"`;
      svgFileName = 'circle';
    } else if (shape === 'Square') {
      chosenShape = new Square();
      chosenShape.setColor(shapeColor);
      chosenShapeText = `x="65" y="75" font-size="50"`;
      svgFileName = 'square';
    } else if (shape === 'Triangle') {
      chosenShape = new Triangle();
      chosenShape.setColor(shapeColor);
      chosenShapeText = `x="70" y="85" font-size="40"`;
      svgFileName = 'triangle';
    } else if (shape === '') {
      console.log('you must select a shape');
    }


    console.log(`SHAPE:${shape}-> COLORED ${shapeColor}`);
    console.log(`TEXT:${text}-> COLORED ${textColor}`);
    console.log('.');
    console.log('.');
    console.log('.');



// const svgGen is the code for the svg file which jqueries the inputs from shapes and inquirer.

    const svgGen =

      `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
        ${chosenShape.render()}
        <text ${chosenShapeText} text-anchor="middle" fill="${textColor}">${text}</text>
        </svg>`;


// WriteFile function to create the svg file from the svgGen variable above and console log "Generated <name-of-svg-file>" if successful, and log an error if not.
    fs.writeFile(`${svgFileName}-${text}.svg`, svgGen, (err) =>
      err ? console.error(err) : console.log(`Generated ${svgFileName}-${text}.svg!`)
    );
  });