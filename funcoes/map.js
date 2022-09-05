//O que o map faz é transformar os dados de um array para outro array, a funcao map transforma
//a array conforme uma funcao de callback que nos damos
//ex:
let arr = [3, 4, 5, 6];

let modifiedArr = arr.map(function(element){
    return element *3;
});

console.log(modifiedArr); // [9, 12, 15, 18]
// o element é cada item da array, entao definimos que todos os itens da array serao multiplicados por 3
//transformando a array [3, 4, 5, 6] em [9, 12, 15, 18]
//obs: o resultado de uma função map sempre terá o valor da array original

//outro exemplo:
//Colocar de sobrenome "velozo " para todos na array lista
let lista = ['Ana', 'Bia', 'Lia', 'Gui', 'Rafa', 'Bete'];
const modificaLista = lista.map(function(){
   return nome + ' Velozo'
});
console.log(modificaLista);
//outro exemplo:
//pegar apenas a primeira letra de cada indice do array
const primeiraLetra = lista.map(function(nome){
   return nome[0];
});
console.log(primeiraLetra);
//(para rodar pode ser possivel que deva comentar os códigos acima)
//eu posso remover o return se usar arrow function e se for só uma sentença
const segundaLetra = lista.map(nome => nome[1]);
console.log(segundaLetra)
//note que só é possivel remover o return quando a única sentença em uma arrow function é `return' se tivessemos outras sentenças precisariamos incluir chaves e nao poderiamos remover retun


