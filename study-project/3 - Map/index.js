const numbers = [1, 2, 3, 4, 5];
const double = (n, i, a) => n * 2 + i + a.length;
console.log(numbers.map(double))

const names = ['Ana', 'Bia', 'Gui', 'Lia', 'Rafa'];
const firstLetter = text => text[0];
const letters = names.map(firstLetter)
console.log(names, letters);

const trolley = [
    {name: 'Pen', amount: 10, priceTag: 7.99},
    {name: 'Printer', amount: 0, priceTag: 649.50},
    {name: 'Notebook', amount: 4, priceTag: 27.10},
    {name: 'Pencil', amount: 3, priceTag: 5.82},
    {name: 'Scissors', amount: 1, priceTag: 19.20},
]

const getItems = item => item.name;
console.log(trolley.map(getItems));

const getPrice = item => item.amount * item.priceTag;
const total = trolley.map(getPrice);
console.log(total);

Array.prototype.myMap = function(fn) {
    const mapped = [];
    for(let i = 0; i < this.length; i++) {
        const result = fn(this[i], i, this);
        mapped.push(result);
    }
    return mapped;
}

const senseis = [
    {firstName: "Johnny", lastName: "Lawrence"},
    {firstName: "Daniel", lastName: "LaRusso"},
    {firstName: "John", lastName: "Kreese"},
    {firstName: "Nariyoshi", lastName: "Miyagi"},
    {firstName: "Terry", lastName: "Silver"},
];

const fullName = senseis.map(function(element){
    return `${element.firstName} ${element.lastName}`;
})

console.log(fullName);