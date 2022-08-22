
let a = 4
console.log(a)

//Function declaration:
function bomDia(){
    console.log('Bom dia!')
}

bomDia()

//Function expression : quando a função fica dentro de uma variavel
//é usado uma funcao anonima geralmente:
const boaTarde = function (){
    console.log('Boa tarde')
}

 boaTarde()//undefined pois nao é retornado nada

//é bem benéfico usar function expression

function somar(a,b){
    return a + b
}

const resultado = somar(3, 4, 5, 6, 7, 8)
console.log(resultado)
//o resultado sempre sera 7 pois no somar aceita e retorna dois parametros para a operação de soma

resultado = somar(3)
console.log(resultado)//o resultado sera Nan pois a funcao precisa de minimo 2 parametros pra realizar o calculo

resultado = somar()
console.log(resultado)
//quando a funcao pede parametros e nao passamos nenhum ele passa automaticamente o calor de zero como parametro
//entao nesse caso o resultado seria 0(0+0)