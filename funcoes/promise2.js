function gerarNumerosEntre(min, max) {
  if (min > max) {
    [max, min] = [min, max]; // inverte valor das variaveis se o minimo for maior que o maximo
  }

  return new Promise((resolve) => {
    const fator = max - min + 1
    const aleatorio = parseInt(Math.random() * fator) + min
    resolve(aleatorio); //guarda o valor aleatorio que vai ser um numero aleatorio entre o valor maximo e minimo
  })
}

gerarNumerosEntre(1, 60)
.then(num => num * 10)
.then(numx10 => `O numero gerado foi ${numx10}`)
.then(console.log)