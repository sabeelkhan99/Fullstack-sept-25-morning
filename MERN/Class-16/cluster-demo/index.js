const { execFile } = require('node:child_process');
const path = require('node:path');

// const child = execFile('node', ['--version'], (error, stdout, stderr) => {
//   if (error) {
//     throw error;
//   }
//   console.log(stdout);
// });

// node --version

const pythonFilePath = path.join(__dirname, 'test.py')

const child = execFile('python3', [pythonFilePath], (error, stdout, stderr) => {
  if (error) {
    throw error;
  }
  console.log(stdout);
});