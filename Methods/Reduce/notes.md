# O método reduce()

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

Sintaxe: array.reduce(callback(acumulador, valorAtual, index, array) {
    return acumulador + valorAtual;
});

array.reduce((acumulador, valorAtual) => acumulador + valorAtual);

Map -> retorna um array com valores modificados
Filter -> retorna um array com os valores true
Reduce -> retorna um único valor (o tipo depende do que está dentro do array e a orientação da função callback)
