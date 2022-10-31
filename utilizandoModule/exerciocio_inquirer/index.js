const inquirer = require("inquirer");
const chalk = require("chalk");

inquirer
  .prompt([
    {
      name: "p1",
      message: "Qual o seu nome? ",
    },
    {
      name: "p2",
      message: "Qual sua idade? ",
    },
  ])
  .then((res) => {
    const nome = String(res.p1);
    const idade = parseInt(res.p2);
    if (!nome || !idade) {
      throw new Error("O nome e a idade são obrigatórios!");
    }
    console.log(
      chalk.bgYellow.bold(`seu nome é ${nome} e você tem ${idade} anos!`)
    );
  })
  .catch((err) => console.log(chalk.bgRed("ERRO", err)));
