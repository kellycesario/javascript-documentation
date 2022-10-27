# Funções

## Diferenças entre funções declarativas (declaration) e funções expressivas (expression)

- Declaration = direta | this. ✅

function name() {}

- Expressiva = + flexível, guarda uma função dentro de uma constante.

const name = function() {}

- Arrow Function (também é uma função expressiva, com sintaxe mais curta e guardada em uma variável) | this. ❌

const name = () => {}

É possível:
(i) passar uma função como parâmetro de outra função (callback);
(ii) retornar função a partir de outra;

## First Class Function & Higher Order Function

'First Class Function' é um recurso que uma linguagem de programação possui ou não. Tudo o que isso significa é que todas as funções são valores. Essas funções podem ser passadas como argumentos para 'Higher Order Functions'.

Uma função que recebe outra função como argumento, que retorna uma nova função, ou ambas, é uma 'Higher Order Functions'.
