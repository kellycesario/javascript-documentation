//Passando uma função como parâmetro para outra função

//function executarQualquerCoisa(fn){
   // fn()
//}

//executarQualquerCoisa(3) // nao dara certo pois a funcao executarQualquerCoisa pede outra funcao como parametro
//e 3 nao é uma funcao

//outro exemplo:
function executarQualquerCoisa2(fn){
    if(typeof fn === 'function'){ // se o parametro fn for uma funcao execute essa funcao
     fn()
    }
    
}

executarQualquerCoisa2(3)

//outro exemplo:
function bomDia(){
    console.log('bom dia!')
}

const boaTarde = function(){
     console.log('Boa tarde')
}

executarQualquerCoisa2(bomDia);//sera execuatada a funcao bom dia pois fn(bomDia) é uma funcao

//exemplo mais prático de função que recebe função de parametro:
function potencia(base){
    return function(exp){
        return Math.pow(base,exp)
    }
}

const potenciaDe2 = potencia(2)//no caso essa constante declararia a potencia  com a base 2 
console.log(potenciaDe2(8)); //aqui a potencia com base 2 ganha um expoente como parametro que é 8, resultando em 2 elevado a 8 = 256.
//Isso é equivalente a fazer (potencia(2)(8)) pois a const guarda a funcao e o valor da base e depois foi dado o valor do expoente.
console.log(potencia(3)(4));

//outros exemplos:
//somar a + b + c
function somar(a){
    return function(b){
        return function(c){
            return a + b + c
        }
    }
}

const somarAB = somar(3)(4)
console.log(somarAB(5))
