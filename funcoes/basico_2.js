//Arrow function
//Nao tem como chamar uma função anonima sem armazenar em uma variavel
//ex: 
const felizNatal = () => console.log('Feliz natal')
//assim é possivel chamar a funcao anonima pelo nome da variavel felizNatal
//se eu por exemplo criasse assim:
// () => console.log('Feliz natal')
//desse jeito eu nunca ia conseguir chamar a funcao para ser executada
//como criar arrow function com parametro:
//ex:
const saudacao = (nome) => console.log(` Ola ${nome}`)
saudacao('joao')
//nesse caso o paramtro ;e o nome entre parenteses