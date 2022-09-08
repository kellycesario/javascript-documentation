const exec = function (fn, a, b) {
  return fn(a, b);
};

const somarNoTerminal = (x, y) => console.log(x + y);
console.log(exec(somarNoTerminal, 56, 38));

const subtrairNoTerminal = (w, z) => console.log(w - z);
console.log(exec(subtrairNoTerminal, 182, 27));

const join = setInterval(() => {
  console.log("Join Cobra Kai!");
}, 1000);

clearInterval(join);

const fs = require('fs');
const path = require('path');

const caminho = path.join(__dirname, 'dados.txt');

function exibirConteudo(_, conteudo) {
  console.log(conteudo.toString())
}

fs.readFile(caminho, exibirConteudo);
fs.readFile(caminho, (_, conteudo) => console.log(conteudo.toString()));
const conteudo = readFileSync(caminho);
console.log(conteudo.toString());