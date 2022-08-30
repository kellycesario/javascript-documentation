const PI = 3.14;

// impura - PI é um valor externo à função areaCirc

function areaCirc(raio) {
  return raio * raio * PI;
}

console.log(areaCirc(10));

//pura

function areaCircPura(raio, pi) {
  return raio * raio * pi;
}

console.log(areaCircPura(10, 3.14));

// impura (você não controla os dados de saída por causa do Math.random())

function gerarNumeroAleatorio(min, max) {
  const fator = max - min + 1;
  return parseInt(Math.random() * fator) + min;
}

console.log(gerarNumeroAleatorio(1, 1500));
console.log(gerarNumeroAleatorio(1, 1500));
console.log(gerarNumeroAleatorio(1, 1500));
console.log(gerarNumeroAleatorio(1, 1500));
console.log(gerarNumeroAleatorio(1, 1500));
console.log(gerarNumeroAleatorio(1, 1500));

// pura

function somar(a, b) {
  return a + b;
}

console.log(somar(545, 1541));

let qtdeDeExecucoes = 0;

// impura

function soma(a, b) {
  qtdeDeExecucoes++; // efeito colaterál observável
  return a + b;
}

console.log(qtdeDeExecucoes);
console.log(soma(45, 15));
console.log(soma(12, 25));
console.log(soma(54, 11));
console.log(soma(45, 11));
console.log(soma(55, 14));
console.log(qtdeDeExecucoes);

// Higher-Order Function
function executar(fn, ...params) {
  return fn(...params);
}

function sum(a, b, c) {
  return a + b + c;
}

function multi(a, b) {
  return a * b;
}

const r1 = executar(sum, 4, 5, 6);
const r2 = executar(multi, 5, 5);

console.log(r1, r2);

// First Class Function

const x = 3;
const y = function (txt) {
  return `Esse é o texto: ${txt}`;
};

console.log(x);
console.log(y("Olá"));

// Imutabilidade

let nums = [3, 1, 7, 9, 4, 6];
nums.sort();
console.log(nums);

function ordenar(array) {
  return array.sort();
}

nums = [4, 8, 9, 2, 1, 3];
ordenar(nums);
console.log(nums);

function ordenar2(array) {
  return [...array].sort();
}

nums = [8, 9, 7, 4, 2, 6];
const numsOrdenados = ordenar2(nums);
console.log(`array: ${nums}, array ordenado: ${numsOrdenados}`);

const numeros = [3, 1, 7, 9, 4, 6];
numeros[0] = 1000;
numeros.sort((a, b) => a - b); // função inserida para a leitura dos números não seguir a tabela ASCII
console.log(numeros);

const numbers = [4, 8, 3, 2, 9, 1, 9, 3];

// Dados mutáveis
let total = 0;
for (let i = 0; i < numbers.length; i++) {
  total += numbers[i];
}
console.log(total);

// Reduce
const s0mar = (a, b) => a + b;
const total2 = numbers.reduce(s0mar);
console.log(total2);

// Recursividade
/* function somarArray(array, total = 0) {
    if(array.length === 0) {
        return total
    }
    return somarArray(array.slice(1), total + array[0])
}
somarArray() */

//

const pessoa = {
  nome: "Maria",
  altura: 1.76,
  cidade: "São Paulo",
};

//Atribuição por referência
const novaPessoa = pessoa;

novaPessoa.nome = "João";
novaPessoa.cidade = "Fortaleza";
console.log(novaPessoa, pessoa);

//Closure

//const somarXMais3 = require('./closure_escopo')

function textoComTamanhoEntre(min) {
  return function (max) {
    return function (erro) {
      return function (texto) {
        const tamanho = (texto || "").trim().length;

        if (tamanho < min || tamanho > max) {
          throw erro;
        }
      };
    };
  };
}
const forcarTamanhoPadrao = textoComTamanhoEntre(4)(255);
const forcarnomeProdutoValido = forcarTamanhoPadrao("Nome produto inválido!");
const p1 = { nome: "A", preco: 14.99, desc: 0.25 };
textoComTamanhoEntre(p1.nome);
console.log(p1.nome);

// Functor

const nums1 = [1, 2, 3, 4, 5, 6];
const novosNums = nums1.map((el) => el + 10).map((el) => el * 2);
console.log(nums1, novosNums);

function TipoSeguro(valor) {
  return {
    valor,
    invalido() {
      return this.valor === null || this.valor === undefined;
    },
    map(fn) {
      if (this.invalido()) {
        return TipoSeguro(null);
      } else {
        const novoValor = fn(this.valor);
        return TipoSeguro(novoValor);
      }
    },
  };
}

const resultado = TipoSeguro("Esse é um texto")
  .map((t) => t.toUpperCase())
  //.map((t) => null)
  .map((t) => `${t}!!!`)
  .map((t) => t.split("").join(" "));

console.log(resultado.valor);

// Flat Map

const letrasAninhadas = [
  ['O', ['l'], 'á'], 
  [' '], 
  ['m', ['u', ['n']], 'd', 'o'], 
  ['!']
]

const letras = letrasAninhadas.flat(Infinity)
const result = letras
  .flatMap(l => [l, ','])

console.log(result)



/* const result = letras
  .map(letra => letra.toUpperCase())
  .reduce((a, b) => a + b)
console.log(result) */