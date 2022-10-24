# Título

## Object.values()

Método que acessa as propriedades de um objeto e retorna seus valores, na ordem apresentada, em um array.

const person = {
    firstName: 'Kelly',
    lastName: 'Oliveira',
    age: 27
};

console.log(Object.values(person))

Output: ['Kelly', 'Oliveira', 27]

## Object.entries()

Método que retorna um array cujos elementos também são arrays correspondentes aos pares de propriedades [key, value] enumeráveis encontrados. A ordem das propriedades é a mesma que seria se fossem iteradas as propriedades do objeto manualmente.

const person = {
    firstName: 'Kelly',
    lastName: 'Oliveira',
    age: 27
};

console.log(Object.entries(person))

Output: [ [ 'firstName', 'Kelly' ], [ 'lastName', 'Oliveira' ], [ 'age', 27 ] ]

## Object.keys()

Método que retorna uma matriz dos próprios nomes de propriedades enumeráveis ​​de um determinado objeto, iterados na mesma ordem que um loop normal faria.

const person = {
    firstName: 'Kelly',
    lastName: 'Oliveira',
    age: 27
};

console.log(Object.keys(person))

Output: [ 'firstName', 'lastName', 'age' ]
