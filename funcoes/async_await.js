function esperarPor(tempo = 2000){
    return new Promise(function(resolve){
       setTimeout(()=> resolve(), tempo)
    })
}

/*esperarPor(2000)
    .then(() => console.log('Executando promise...1'))
    .then(esperarPor)
    .then(() => console.log('Executando promise...2'))
    .then(esperarPor)
    .then(() => console.log('Executando promise...3'))*/
    
async function executar(){
    await esperarPor(2000)
    console.log('Async/await 1...')

    await esperarPor(2000)
    console.log('Async/await 2...')

    await esperarPor(2000)
    console.log('Async/await 3...')
}

executar()

/* oq é um código sincrono? 
um código síncrono é aquele de ocorre em sequência, uma instrução após a outra.*/
/*Mas o que acontece quando, por exemplo, nosso código precisa receber alguns dados de uma API?
 Ao mesmo tempo que é preciso aguardar a requisição e resposta da API, não podemos bloquear o funcionamento de todo o nosso programa;
 seria a mesma coisa que enviar uma mensagem pelo WhatsApp e ficar esperando a resposta sem fazer mais nada nesse meio tempo.
É para esse tipo de situação, que requer processamento assíncrono que existem as Promises, ou, literalmente, promessas.
O sentido de Promise em JavaScript é similar ao literal: Uma pessoa te passa o contato do Telegram e pede para que você mande uma mensagem pra ela, prometendo que vai responder... O que não temos como saber se vai acontecer.
Quando enviamos uma requisição de dados a uma API, temos uma promessa de que estes dados irão chegar, mas enquanto isso não acontece, o sistema deve continuar rodando. Se, por exemplo, o servidor estiver caído, essa promessa de dados pode não se cumprir, e temos que lidar com isso.
As Promises trabalham neste contexto - elas são a ferramenta que o JavaScript utiliza para lidar com código assíncrono.
Existem algumas formas de se trabalhar com processamento assíncrono (ou seja, Promises) em JavaScript: utilizando o método .then(), as palavras-chave async e await ou o objeto Promise e seus métodos. Aqui, vamos focar no uso de .then(), async/await e no uso do método Promise.all.*/
