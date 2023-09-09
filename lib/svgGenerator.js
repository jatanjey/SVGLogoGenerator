const { Circle, Triangle, Square } = require('./shapes');

function generateSVG(text, textColor, shapeType, shapeColor) {
  let shape;

  switch (shapeType.toLowerCase()) {
    case 'circle':
      shape = new Circle();
      break;
    case 'triangle':
      shape = new Triangle();
      break;
    case 'square':
      shape = new Square();
      break;
    default:
      throw new Error('Invalid shape type.');
  }

  shape.setColor(shapeColor);

  const svgContent = `
    <svg width="300" height="200">
      ${shape.render()}
      <text x="100" y="150" fill="${textColor}">${text}</text>
    </svg>
  `;

  return svgContent;
}

module.exports = { generateSVG };
