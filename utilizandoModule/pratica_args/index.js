const minimist = require("minimist");

//modulos externos
const args = minimist(process.argv.slice(2));

//modulos internos
const soma = require("./soma").soma;

const a = parseInt(args["a"]);
const b = parseInt(args["b"]);

soma(a, b);
