function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(() => resolve(), tempo)
    })
}

function retornarValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 500)
    })
}

async function executar() {
    let valor = await retornarValor()

    await esperarPor(1500)
    console.log(`Async/Await ${valor}...`);

    await esperarPor(1500)
    console.log(`Async/Await 2 ${valor + 1}...`);

    await esperarPor(1500)
    console.log(`Async/Await 3 ${valor} + 2...`);

    return valor + 3;
}

executar().then(console.log)

function gerarNumerosEntre(min, max, numerosProibidos) {
    if(min > max) [max, min] = [min, max]
    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        if(numerosProibidos.includes(aleatorio)) {
            reject('Número repetido!')
        } else {
            resolve(aleatorio)
        }
    })
}

async function gerarMegaSena(qtdeNumeros, tentativas = 1) {
    try {
        const numeros = []
        for (let _ of Array(qtdeNumeros).fill()) {
        numeros.push(await gerarNumerosEntre(1, 60, numeros))
        }
        return numeros 
    } catch(e) {
        if (tentativas > 100) {
            throw "Não deu certo!"
        } else {
            return gerarMegaSena(qtdeNumeros, tentativas +1)
        }
    }
}  

gerarMegaSena(15)
    .then(console.log)
    .catch(console.log)
