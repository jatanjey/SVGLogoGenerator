class Shape {
  constructor() {
    this.color = 'black'; // Default color
  }

  setColor(color) {
    // Validate color
    if (!isValidColor(color)) {
      throw new Error('Invalid color');
    }
    this.color = color;
  }
}

// Helper function to validate color
function isValidColor(color) {
  // List of valid color keywords
  const validColorKeywords = ['red', 'green', 'blue', 'yellow', 'purple', 'orange'];

  // Regular expression to match hexadecimal color codes (e.g., #RRGGBB)
  const hexColorRegex = /^#[0-9A-Fa-f]{6}$/;

  // Check if the color is a valid keyword or a valid hexadecimal color code
  return validColorKeywords.includes(color.toLowerCase()) || hexColorRegex.test(color);
}


class Circle extends Shape {
  render() {
    return `<circle cx="100" cy="100" r="80" fill="${this.color}" />`;
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon points="100,20 40,180 160,180" fill="${this.color}" />`;
  }
}

class Square extends Shape {
  render() {
    return `<rect x="40" y="40" width="120" height="120" fill="${this.color}" />`;
  }
}

module.exports = { Circle, Triangle, Square };
