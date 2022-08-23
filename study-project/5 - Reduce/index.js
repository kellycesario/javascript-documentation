let arr = [1, 2, 3, -3, 7, -14];
let total = arr.reduce((acumulador, valorAtual) => {
  return (acumulador += valorAtual);
}, 0);
console.log(total);

arr = [4, 5, -8, 1, 6, 25, 32];
total = arr.reduce((acumulador, valorAtual) => {
  return (acumulador += valorAtual);
}, 15);
console.log(total);

const trolley = [
  { name: "Pen", amount: 10, priceTag: 7.99 },
  { name: "Printer", amount: 0, priceTag: 649.5 },
  { name: "Notebook", amount: 4, priceTag: 27.1 },
  { name: "Pencil", amount: 3, priceTag: 5.82 },
  { name: "Scissors", amount: 1, priceTag: 19.2 },
];

const getTotal = (item) => item.amount * item.priceTag;

const sum = (acumulador, elemento) => {
  console.log(acumulador, elemento);
  return acumulador + elemento;
};

const totalGeral = trolley
    .map(getTotal)
    .reduce(sum);

console.log(`O valor total de sua compra é R$${totalGeral}.`);

const animals = [
  {
    name: "Kiara",
    age: 3,
    type: "dog",
  },
  {
    name: "Bowie",
    age: 1,
    type: "dog",
  },
  {
    name: "Bilbo",
    age: 7,
    type: "dog",
  },
  {
    name: "Francis",
    age: 4,
    type: "cat",
  },
];

let dogsAgeSum = animals
  .filter((animal) => animal.type === "dog") // considera apenas os cachorros
  .map((dog) => (dog.age *= 7)) // calcula a idade dos cachorros * 7 (para considerar a idade humana)
  .reduce((total, dog) => (total += dog));
console.log(dogsAgeSum);


Array.prototype.myReduce = function (fn, initial) {
    let acc = initial;
    for(let i = 0; i < this.length; i++) {
        if(!acc && i === 0) {
            acc = this[i]
        } else {
            acc = fn (acc, this[i], i, this)
        }
    }
    return acc;
}