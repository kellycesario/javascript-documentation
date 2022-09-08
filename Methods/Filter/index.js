const notes = [6, 5, 7, 3, 9, 10];

function approved(element) {
  return element >= 6;
}

const notes2 = notes.filter(approved);
console.log(notes, notes2);

const trolley = [
  { name: "Pen", amount: 10, priceTag: 7.99 },
  { name: "Printer", amount: 0, priceTag: 649.5 },
  { name: "Notebook", amount: 4, priceTag: 27.1 },
  { name: "Pencil", amount: 3, priceTag: 5.82 },
  { name: "Scissors", amount: 1, priceTag: 19.2 },
];

const getName = (item) => item.name;
const isBiggerThan0 = (item) => item.amount > 0;
const amountTooBig = (item) => item.amount >= 1000;

const validItems = trolley
.filter(isBiggerThan0)
.map(getName);

console.log(validItems);

Array.prototype.myFilter = function(fn){
    const newArr = [];
    for(let i = 0; i < this.length; i++) {
        if(fn(this[i], i, this)) {
            newArr.push(this[i]);
        }
    }
    return newArr;
}