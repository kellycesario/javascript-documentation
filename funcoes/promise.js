/*Promise é um objeto usado para processamento assíncrono. Uma Promise (de "promessa") representa um valor que pode estar disponível agora, no futuro ou nunca.*/
/*
Uma Promise representa um proxy para um valor que não é necessariamente conhecido quando a promessa é criada. Isso permite a associação de métodos de tratamento para eventos da ação assíncrona num caso eventual de sucesso ou de falha. Isto permite que métodos assíncronos retornem valores como métodos síncronos: ao invés do valor final, o método assíncrono retorna uma promessa ao valor em algum momento no futuro.

Uma Promise está em um destes estados:

pending (pendente): Estado inicial, que não foi realizada nem rejeitada.
fulfilled (realizada): sucesso na operação.
rejected (rejeitado): falha na operação.
Uma promessa pendente pode se tornar realizada com um valor ou rejeitada por um motivo (erro). Quando um desses estados ocorre, o método then do Promise é chamado, e ele chama o método de tratamento associado ao estado (rejected ou resolved). Se a promessa foi realizada ou rejeitada quando o método de tratamento correspondente for associado, o método será chamado, desta forma não há uma condição de competição entre uma operação assíncrona e seus manipuladores que estão sendo associados.

Como os métodos Promise.prototype.then e Promise.prototype.catch retornam promises, eles podem ser encadeados — uma operação chamada composição.

*/
/* Sintaxe promise:
new Promise((resolve: Function, reject: Function) => void)
resolve: função para retornar o resultado da promise.
reject: função para retornar o erro da promise.

A lista a seguir descreve as propriedades do objeto.

constructor - função construtora que recebe um callback criando uma função assíncrona.

Métodos
A lista a seguir descreve os métodos do objeto.

then - permite definir o bloco executado mediante o cumprimento de uma promise
catch - permite definir o bloco executado mediante a rejeição de uma promise

Funções
A lista a seguir descreve os métodos estáticos do objeto.

resolve - cria uma promise resolvida.
reject - cria uma promise rejeitada com o resultado igual ao argumento recebido.
all - une varias promises em um Array e retorna o valor quando todas tiverem sido resolvidas.

obs: uma promessa consegue gerar apenas um valor, logo só será considerado o primeiro parametro
se vc quiser devolver mais de um valor isso deverá ser feito dentro de um objeto ou lista . ex { x : 3, y : 4} ou ["ana", "maria"]
*/
//exemplo:
let a = 1
console.log(a)

//cria promessa que fica alocada na let p essa promessa diz que quando chamarmos ela a funcao a ser executada é a 
//cumprirPromessa que guarda o valor 3
let p = new Promise(function(cumprirPromessa){
    cumprirPromessa(3)
})
//aqui estamos chamando a promessa(guardada em p) para ser executada, executando entao o valor nela que é o 3 em cumprirPromessa
p.then(function(valor){
 console.log(valor)
})

// no lugar de function pode tbm usar a arrow function
//ex:
p.then(valor => console.log(valor))
//é possivel tbm chamar o then mais de uma vez
//ex:
let lista = new Promise(function(cumprirPromessa){
    cumprirPromessa(["Ana", "Bia", "Carlos", "Daniel"])
})
lista
    .then(valor => valor[0])//pega primeiro valor da array
    .then(primeiro => primeiro[0])//mostra primeiro valor da lista e pega apenas a primeira letra dela que no caso é A
    .then(letra => letra.toLowercase())//coloca a em letra minuscula
    .then(letraMinuscula => console.log(letraMinuscula))//mostraa a letra
    // o valor é passado sempre para o proximo then e deve-se mudar o nome da var dela para colocar outra instrução nela para ser executada para conseguir gerar outro valor que será passado para o próxumo then

 /* É possivel tbm fazer a mesma coisa dessa forma:*/
let lista = new Promise(function(cumprirPromessa){
    cumprirPromessa(["Ana", "Bia", "Carlos", "Daniel"])

function primeiroElemento(array){
    return array[0]
}

function primeiraLetra(string){
    return string[0]
}

const letraMinuscula = letra => letra.toLowercase()

p
    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(letraMinuscula)
    .then(console.log)

//Tbm da pra abreviar oq foi feito acima usando arrow function!
//ex:

const primeiroElemento = string => string[0]
const primeiraLetra = string => string[0]
const letraMinuscula = letra => letra.toLowercase()

new Promise(function(resolve){
    resolve(["Ana", "Bia", "Carlos", "Daniel"])
})
    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(letraMinuscula)
    .then(console.log)
  
