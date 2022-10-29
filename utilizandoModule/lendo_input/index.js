const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
readline.question("Qual sua linguagem favorita?", (language) => {
  console.log(`my favorite language is:${language}`);
  readline.close();
});
