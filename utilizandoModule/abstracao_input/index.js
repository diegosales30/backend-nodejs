const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      name: "p1",
      message: "qual a primeira nota?",
    },
    {
      name: "p2",
      message: "qual a segunda nota?",
    },
  ])
  .then((res) => {
    console.log(res);
    const nota1 = parseInt(res.p1);
    const nota2 = parseInt(res.p2);
    const media = (nota1 + nota2) / 2;
    if (media >= 7) {
      console.log(`Parabens voce passou: ${media} pontos`);
    } else {
      console.log(`infelizmente voce não passou: ${media} pontos`);
    }
  })
  .catch((err) => console.log(err));
