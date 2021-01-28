const fetch = require('node-fetch');

async function buscaCep(cep) {
    let request = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    let dados =  await request.json();
    return dados;
}

module.exports = buscaCep;