const { Circle, Triangle, Square } = require('./shapes');

describe('Circle', () => {
  it('should render a circle with the specified color', () => {
    const circle = new Circle();
    circle.setColor('blue');
    const svg = circle.render();
    expect(svg).toEqual('<circle cx="100" cy="100" r="80" fill="blue" />');
  });

  it('should render a circle with the default color (black)', () => {
    const circle = new Circle();
    const svg = circle.render();
    expect(svg).toEqual('<circle cx="100" cy="100" r="80" fill="black" />');
  });

  it('should not allow setting an invalid color', () => {
    const circle = new Circle();
    expect(() => circle.setColor('invalid-color')).toThrow();
  });
});

describe('Triangle', () => {
  it('should render a triangle with the specified color', () => {
    const triangle = new Triangle();
    triangle.setColor('green');
    const svg = triangle.render();
    expect(svg).toEqual('<polygon points="100,20 40,180 160,180" fill="green" />');
  });

  it('should render a triangle with the default color (black)', () => {
    const triangle = new Triangle();
    const svg = triangle.render();
    expect(svg).toEqual('<polygon points="100,20 40,180 160,180" fill="black" />');
  });

  it('should not allow setting an invalid color', () => {
    const triangle = new Triangle();
    expect(() => triangle.setColor('invalid-color')).toThrow();
  });
});

describe('Square', () => {
  it('should render a square with the specified color', () => {
    const square = new Square();
    square.setColor('red');
    const svg = square.render();
    expect(svg).toEqual('<rect x="40" y="40" width="120" height="120" fill="red" />');
  });

  it('should render a square with the default color (black)', () => {
    const square = new Square();
    const svg = square.render();
    expect(svg).toEqual('<rect x="40" y="40" width="120" height="120" fill="black" />');
  });

  it('should not allow setting an invalid color', () => {
    const square = new Square();
    expect(() => square.setColor('invalid-color')).toThrow();
  });
});

