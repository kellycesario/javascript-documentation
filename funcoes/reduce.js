//A sintaxe do reduce é igual ao mao e filter
//ex:
//array.reduce(funcao que sera executada, valor inicial)
//A função reduce do JavaScript serve para iterar sobre um array e utilizar o valor de cada item para criar um objeto final com base em alguma regra. Como o próprio nome da função sugere, ela “reduz” os itens de um vetor a um valor único. Por exemplo, podemos utilizá-la para obter a soma ou produto dos itens de um vetor numérico.
//valor inicial:  É o valor inicial do resultado da operação que será passado para a função de callback na primeira iteração.
// Em um cenário no qual desejamos somar os itens de um vetor, por exemplo, esse argumento representa o valor inicial da soma, que apesar de ser zero na maioria dos casos, pode variar de acordo com a situação.
// Por exemplo, podemos desejar somar os elementos de mais de um array. Nesse caso, o resultado da soma do primeiro poderia ser passado como initialValue para o segundo, e então a nova soma seria acumulada na segunda função.
// Esse argumento, no entanto, é opcional.

const euros = [29.76, 41.85, 46.5];

const soma = euros.reduce((total, quantidade) => total + quantidade); 

console.log(soma) // 118.11
/*Nesse exemplo, reduce aceita dois parâmetros, o total e o valor atual.
O método reduce passa por cada número do array como se fosse um laço for.
Quando o laço começa, o valor de total é o número na extrema esquerda (29.76) e o valor atual é o número ao seu lado (41.85).
No exemplo específico, queremos adicionar o valor atual ao total.
O cálculo é repetido para cada valor no array, mas, a cada momento. o valor atual passa a ser o próximo número no array, indo em direção à direita.
Quando não houver mais números para se ler no array, o método retorna o valor total.*/


//Encontrar uma média com o método reduce em JavaScript​:
/*Em vez de registrar a soma, é possível dividir a soma pelo comprimento do array antes de retornar um valor final.
A maneira de fazer isso é tirar vantagem dos outros parâmetros do método reduce. O primeiro desses argumentos é o índice. Assim como em um laço for, o índice se refere ao número de vezes que o redutor fez o laço percorrendo o array. O último argumento é o próprio array.*/
//ex:
const euros2 = [29.76, 41.85, 46.5];

const media = euros.reduce((total, valor, índice, array) => {
  total += valor;
  if( índice === array.length-1) { 
    return total/array.length;
  } else { 
    return total;
  }
});

console.log(media) // 39.37

//Para mais infos: https://www.freecodecamp.org/portuguese/news/um-guia-para-o-metodo-reduce-em-javascript/