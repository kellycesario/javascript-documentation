const trolley = [
    { name: "Pen", amount: 10, priceTag: 7.99, fragile: true },
    { name: "Printer", amount: 1, priceTag: 649.5, fragile: true },
    { name: "Notebook", amount: 4, priceTag: 27.1, fragile: false },
    { name: "Pencil", amount: 3, priceTag: 5.82, fragile: false },
    { name: "Scissors", amount: 1, priceTag: 19.2, fragile: true },
];

// 1. Consolar os elementos frágeis
const isFragile = (item) => item.fragile;

// 2. Consolar a quantidade e o preço de todos os itens 
const getTotal = (item) => item.amount * item.priceTag;

// 3. Consolar a média
const getAverage = (accumulator, element) => {
    const newAmount = accumulator.amount +1;
    const newTotal = accumulator.total + element;
    console.log(accumulator, element);
    return {
        amount: newAmount,
        total: newTotal,
        average: newTotal / newAmount
    }
}

const initialAverage = {amount : 0, total: 0, average: 0}

const average = trolley
.filter(isFragile)
.map(getTotal)
.reduce(getAverage, initialAverage)
.average;

console.log(average);
console.log(`A média é ${average}`)