const path = require('path')
const fn = require('./functions')

const caminho = path.join(__dirname, 'dados', 'legendas')

const simbolos = [
    '.', '?', '-', ',', '"', 
    '♪', '_', '<i>', '</i>',
    '\r', '[', ']', '(', ')'
]

fn.lerDiretorio(caminho)
    .then(fn.elementosTerminadosCom('.srt'))
    .then(fn.lerArquivos)
    .then(fn.mesclarConteudos)
    .then(fn.separarTextoPor('\n'))
    .then(fn.removerSeVazio)
    .then(fn.removerSeIncluir('-->'))
    .then(fn.removerSeApenasNumero)
    .then(fn.removerSimbolos(simbolos))
    .then(fn.mesclarConteudos)
    .then(fn.separarTextoPor(' '))
    .then(fn.removerSeVazio)
    .then(fn.removerSeApenasNumero)
    .then(fn.agruparPalavras)
    .then(fn.ordenarAtributoNumerico('qtde', 'desc'))
    .then(console.log)