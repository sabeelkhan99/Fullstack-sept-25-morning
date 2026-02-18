const figlet = require('figlet');

async function main() {
  const text = await figlet.text("Hello NodeJS");
  console.log(text);
}

main();