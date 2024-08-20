const express = require("express")
const path = require('path');
const app = express()

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, 'exemplo', '/index.html'));
});

app.get("/blog", function(requisicao, resposta){
    resposta.send("Bem vindo ao blog")
})

app.get("/", function(requisicao, resposta){
    resposta.sendFile(path.join(__dirname, "public", "index.html"))
})

app.listen(3000, function(erro){
    if (erro){
        console.log('erro')
    }else {
        console.log ('Server')
    }
})