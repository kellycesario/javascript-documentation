const nums = [1,2,3,4,5]
//const dobro = n => n*2 //arrow function
//console.log(nums.map(dobro))
//a funcao dobro multiplicar por 2 cada item da array nums
//outro exemplo:
//const dobro = (n, i) => n * 2 + i
//console.log(nums.map(dobro))
//foi adicionado também o parametro i, que é o indice de cada item
//ou seja cada item da array nums será multiplicada por 2 e somada pelo valor do próprio indice
//como é possível observar o segundo item de parametro da função callback é o indice
//temos como convenção esse padrão do que cada parametro das funções callback significam:
//function(valorItem, indice, array)
//link útil: https://www.devmedia.com.br/javascript-map-mapeando-elementos-de-um-array/40648#:~:text=Como%20funciona%20o%20map()%3F,n%C3%BAmero%20original%20elevado%20ao%20quadrado.
//outro exemplo usando tbm o parametro array:
const dobro = (n,i,a) => n*2 + i + a.length
console.log(nums.map(dobro))
//ou seja foi feito: item multiplicado por 2 somado pelo numero de quantidade de items da array(5)
