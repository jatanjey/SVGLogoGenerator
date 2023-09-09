const fs = require('fs');
const { generateSVG } = require('./lib/svgGenerator');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function promptUser(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

function createHTMLFile(svgContent, userText, userTextColor) {
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>SVG Logo Viewer</title>
    </head>
    <body>
      <h1>Your Logo</h1>
      <a href="logo.svg" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
          ${svgContent}
          <text x="100" y="150" fill="${userTextColor}">${userText}</text>
        </svg>
      </a>
    </body>
    </html>
    `;

  fs.writeFileSync('logo_viewer.html', htmlContent);
  console.log('Generated logo_viewer.html');
}

async function main() {
  const userText = await promptUser('Enter up to three characters: ');
  const userTextColor = await promptUser('Enter text color: ');
  const shapeOptions = ['circle', 'triangle', 'square'];
  const userShape = await promptUser(`Choose a shape (${shapeOptions.join(', ')}): `);
  const userShapeColor = await promptUser('Enter shape color: ');

  const svgContent = generateSVG(userText, userTextColor, userShape, userShapeColor);

  fs.writeFileSync('logo.svg', svgContent);
  createHTMLFile(svgContent, userText, userTextColor);

  rl.close();
}

main();



