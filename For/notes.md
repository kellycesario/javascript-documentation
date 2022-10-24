# For

## For...of

O for...of executa um loop que opera em uma sequência de valores originados de um item iterável, que são: Array, String, TypedArray, Map, Set, NodeList, argumentos de objetos, etc.

Retorna valores de keys, de variáveis.

const trueQueen = {
    firstName: "Rhaenyra",
    lastName: "Targaryen",
    age: 28,
    locations: ["Dragonstone", "Kingslanding"]
}

const fullName = [`${trueQueen.firstName} ${trueQueen.lastName}`]
const allLocations = [...trueQueen.locations]

for (const item of allLocations)
    console.log(item)

Output:
Dragonstone
Kingslanding

## For...in

Retorna as keys listadas em um objeto, por exemplo.

const trueQueen = {
    name: "Rhaenyra Targaryen",
    age: 28,
    location: "Dragonstone"
}

for (const item in trueQueen)
    console.log(item)

Output:
name
age
location

for (const item in trueQueen.name)
    console.log(item)

Output: 0 1 2 3 ... 17 (quantidade de letras em name)
