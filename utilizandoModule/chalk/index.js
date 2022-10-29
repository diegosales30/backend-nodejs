const chalk = require("chalk");

const nota = 6;

if (nota >= 7) {
  console.log(chalk.green("parabens aprovado!"));
} else {
  console.log(chalk.bgRed.white("estude mais!"));
}

//utilizando chalk
