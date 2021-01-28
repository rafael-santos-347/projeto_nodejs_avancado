const express = require('express');
const server = express();
const bodyparser = require('body-parser');
const buscaCep = require('./src/functions/buscaCep');

server.use(bodyparser.json());
server.use(bodyparser.urlencoded({extended:true})); // necessário para codificar senão fica com valores undefined

server.set('view engine', 'ejs');
server.set('views', './src/views');

server.get('/', (req,res) => {
    res.render('app');
});

server.post('/form', async (req,res) => { // depois fazer função assincrona e awaeit nor rsultado
    let { cep } = req.body;
    let resultado = await buscaCep(cep);
    // falta estudar ejs para enviar para a pagina e renderizar  na pagina resultado
    res.render('resultado', {dados:resultado});  
});


server.listen(2020, console.log('ONLINE'));