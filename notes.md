# Título

## Object.values()

Método que acessa as propriedades de um objeto e retorna seus valores, na ordem apresentada, em um array.

const person = {
    firstName: 'Kelly',
    lastName: 'Oliveira',
    age: 27
};

Object.values(person)

Output: ['Kelly', 'Oliveira', 27]

## Object.entries()

Método que retorna um array cujos elementos são também arrays correspondentes aos pares de propriedades [key, value] enumeráveis encontrados diretamente sobre o objeto. A ordem das propriedades é a mesma que seria se fossem iteradas as propriedades do objeto manualmente.

Output: [Array(2), Array(2), Array(2)]
Output: [['firstName', 'Kelly'], ['lastName', 'Oliveira'], ['age', 27]]
