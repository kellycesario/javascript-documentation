//Nesse exercício usaremos as bibliotecas file system e path que sao do node
//para importar fazemos assim:
const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

function exibirConteudo(err,conteudo){
    console.log(conteudo.toString());
}

fs.readFile(caminho, {}, exibirConteudo)// os parametros do readFile sem sao respectivamente: path(obrigatorio),opções ou callback
//se vc nao quiser passar um callback e de forma sincrona pode ler o arquivo assim:
console.log('Inicio Sync...')
const conteudo = fs.readFileSync(caminho)
console.log(conteudo.toString())
console.log('Fim Sync')


