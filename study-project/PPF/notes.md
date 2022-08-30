# Princípios e Conceitos da Programação Funcional

## Função Pura

Uma função pura é uma função em que o valor de retorno é determinado apenas por seus valores de entrada, isto é, a função não utiliza variáveis e constantes que estão fora de seu escopo de declaração. A função pura não tem efeitos colaterais observáveis (não modifica algo fora da função).

## Higher-Order Function

Funções que operam em outras funções, tomando-as como argumentos ou retornando-as, são chamadas de higher-order functions.

## First Class Function

Diz-se que uma linguagem de programação possui funções de primeira classe quando as funções nessa linguagem são tratadas como qualquer outra variável.

## Imutabilidade

Imutabilidade, de forma geral, é a característica ou qualidade de algo não se alterar. Em programação orientada a objetos, por exemplo, uma vez que um objeto imutável é criado/instanciado, este não poderá sofrer alterações no seu estado até o final da sua vida.

## Closure

Closure é quando uma função "lembra" seu escopo léxico, mesmo quando a função é executada fora desse escopo léxico.

## Currying

Currying é o processo de transformar uma função que espera vários argumentos em uma função que espera um único argumento e retorna outra função curried.

## Composição de Funções

É quando podemos reunir várias funções em uma que recebe um número variado de funções por parâmetro. Dentro dela é usado o resultado de uma como entrada da outra.

## Functor / Wrapper

Functors são objetos que implementam o .map(), que também é um "wrapper" de um valor. Um wrapper é uma função destinada a chamar uma ou mais funções, às vezes diretamente por conveniência, e às vezes adaptá-las para fazer uma tarefa ligeiramente diferente no processo.

## Flat Map

É a combinação de um .map() e .flat(). Isso significa que você primeiro aplica uma função aos seus elementos e depois a nivela.

O método .flat() cria um novo array com todos elementos sub-arrays concatenados nele de forma recursiva até a profundidade especificada.
