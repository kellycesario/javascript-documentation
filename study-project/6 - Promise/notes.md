# Promise

Promises são objetos
Uma promessa de 'resolução' no futuro.
Uma promesa trabalha com comportamentos assíncronos.

Sintaxe (w3schools): let myPromise = new Promise(function(myResolve, myReject){
    myResolve();
    myReject();
})

myPromise.then(
    function(value) {}
    function(error) {}
);
