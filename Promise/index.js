const firstElement = arrayOuString => arrayOuString[0]
const lowerCase = letter => letter.toLowerCase()

new Promise(function(resolve) {
    resolve(['Johnny', 'Daniel', 'Terry', 'Chozen'])
})
    .then(firstElement)
    .then(firstElement)
    .then(lowerCase)
    .then(console.log)

setTimeout(function() {
    console.log('Executando callback...')

    setTimeout(function() {
        console.log('Executando callback 2...')

        setTimeout(function() {
            console.log('Executando callback 3...')
        }, 2000)
    }, 2000)
}, 2000)

function waitingFor(time = 2000) {
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log('Executando promise..')
            resolve()
        }, time)
    })
}

waitingFor()
    .then(() => waitingFor())
    .then(waitingFor)

function getNumbers(min, max, time) {
    if(min > max) [max, min] = [min, max]
    return new Promise(resolve => {
        setTimeout(function() {
            const factor = max - min + 1
            const random = parseInt(Math.random() * (max - min + 1)) + min
            resolve(random)
        }, time)
    })
}

/* getNumbers(1, 60)
    .then(num => num * 10)
    .then(numX10 => `O número gerado foi ${numX10}`)
    .then(console.log) */

function getRandomNumbers() {
    return Promise.all([
        getNumbers(1, 60, 4000),
        getNumbers(1, 60, 1000),
        getNumbers(1, 60, 500),
        getNumbers(1, 60, 3000),
        getNumbers(1, 60, 100),
        getNumbers(1, 60, 1500),
    ])
}

getRandomNumbers()
.then(numeros => console.log(numeros))

function workOrNot(value, chanceError) {
    return new Promise((resolve, reject) => {
        try {
            con.log('temp') // não existe, então vai cair no catch e chamar o reject
            if(Math.random() < chanceError) {
                reject('Ocorreu um erro!')
            } else {
                resolve(value)
            } 
        } catch(e) {
            reject(e)
        }
    })
}

workOrNot('Testando...', 0.5)
    .then(v => console.log(`Valor: ${v}`))
    .then(
        v => consol.log(v), //consol mesmo
        err => console.log(`Erro Esp.: ${err}`)
    )
    .then(()=> console.log('Quase Fim!'))
    .catch(err => console.log(`Erro: ${err}`))
    .then(() => console.log('Fim!'))