const { Circle, Square, Triangle } = require('./shapes');

// CIRCLE() RENDER TEST
describe('Circle', () => {
    test('renders shape info correctly', () => {
        const shape = new Circle();
        var color =('gold')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx="100" cy="100" r="80" fill="${color}" />`);
    });
});

// SQUARE() RENDER TEST
describe('Square', () => {
    test('renders shape info correctly', () => {
        const shape = new Square();
        var color =('blue')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect width="130" height="130" fill="${color}" />`);
    });
});

// TRIANGLE() RENDER TEST
describe('Triangle', () => {
    test('renders shape info correctly', () => {
        const shape = new Triangle();
        var color =('blue')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon points="70, 0 0, 110 150, 110" fill="${color}" />`);
    });
});

