//create class 'Shape' which will be parent class to specific shapes. Extensions of 'Shape' will define the actual shape. class Shape defines color.
class Shape{
        constructor() {
            this.color = '';
        }
            setColor(color) {
                this.color = color;
            }
    };
    // extensions of 'Shape' will be 'Circle', 'Square', and 'Triangle' which will use the render() method to render the svg code for the actual shape.
    // 'Circle' class will be a circle logo, 'Square' will be a square logo, and 'Triangle' will be a triangle logo.
    class Circle extends Shape{
        render() {
            return `<circle cx="100" cy="100" r="80" fill="${this.color}" />`
        }
    };
    class Square extends Shape{
        render() {
            return `<rect width="130" height="130" fill="${this.color}" />`
        }
    };
    class Triangle extends Shape{
        render() {
            return `<polygon points="70, 0 0, 110 150, 110" fill="${this.color}" />`
        }
    };
    
    // exports these classes to be used in the index.js
    module.exports = {Circle, Square, Triangle};
    