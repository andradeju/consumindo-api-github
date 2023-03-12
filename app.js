const express = require('express'); //p/ chamar o express
const app = express(); //criar variavel e chamar o express p/ utulizar as propriedades
const router = require('./router/router')

app.use(router); //usando o router

app.listen(8080, function(req, res){//servidor local
console.log("Servidor rodando na porta 8080");
});