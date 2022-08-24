# Async/Await

A declaração async function define uma função assíncrona, que retorna um objeto AsyncFunction.

Sintaxe: async function nome([param[, param[, ... param]]]) {
   instruções
}

Exemplo do developer.mozilla:
    async function pegarDadosProcessados(url) {
    let v;
    try {
        v = await baixarDados(url);
    } catch(e) {
        v = await baixarDadosReservas(url);
    }
    return processarDadosNoWorker(v);
    }
