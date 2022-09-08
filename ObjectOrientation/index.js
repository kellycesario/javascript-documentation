function Produto(nome, preco, desc = 0.15) {
    this.nome = nome
    this.preco = preco
    this.desc = desc

    this.precoFinal = function() {
        return this.preco * (1 - this.desc)
    }
}

const p1 = new Produto('Caneta', 109)
const p2 = new Produto('Geladeira', 2400)

console.log(p2.preco, p2.precoFinal())

class Produto1 {
    constructor(nome, preco, desc = 0.15) {
        this.nome = nome
        this.preco = preco
        this.desc = desc
    }

    precoFinal () {
        return this.preco * (1 - this.desc)
        }
    }

const p3 = new Produto('Lápis', 10)
const p4 = new Produto('Mesa', 250)

console.log(p3.preco, p3.precoFinal())
console.log(p4.preco, p4.precoFinal())
