const fs = require("fs"); //file systen, sempre botar o mesmo nome da variavel

fs.readFile("texto.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});
