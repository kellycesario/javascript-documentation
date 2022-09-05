const carrinho = [
{nome: 'Caneta',
qtde:10,
preco: 7.99},
{nome: 'Impressora',
qtde:0,
preco:649.50},
{nome:'Caderno',
qtde: 4,
preco: 27.50},
{nome:'Lapis',
qtde: 3,
preco: 5.82},
{nome:'Tesoura',
qtde:1,
preco:19.20}
]

//funcao que peha o nome do item da array
//const getNome = item => item.nome
//console.log(carrinho.map(getNome))

const getTotal = item => item.qtde * item.preco
const totais = console.log(carrinho.map(getTotal))
