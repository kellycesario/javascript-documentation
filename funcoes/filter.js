/* Seleciona itens apartir de uma array e gera uma nova array baseada nos item e condições que vc mandou
//sintaxe:  array.filter(funcao que vai filtrar elementos do jeito que vc quer)*/
const carrinho = [
    {nome:'Caneta', qtde:10, preco:7.99},
    {nome:'Impressora', qtde:0, preco:694.50},
    {nome:'Caderno', qtde:4, preco:27.59 },
    {nome:'Lapis', qtde: 3, preco: 5.82},
    {nome:'Tesoura', qtde:1, preco: 19.20},
]
const getNome = item => item.nome//vai mostrar só os nomes dos itens no carrinho
const qtdeMaiorQueUm = item => item.qtde > 1 //vai mostrar só os itens que a quantidade é maior que um 

//essa funcao vai mostrar o nome dos items apenas(porcacusa do map getNome) que sao maiores que 1(por causa da funcao qtMaiorqueUm)
const nomeitensValidos = carrinho.filter(qtdeMaiorQueUm)
                             .map(getNome)
                

console.log(nomeitensValidos)