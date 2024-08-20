const express = require("express");
const app = express();
const path = require("path");

// Configura o EJS como engine de visualização
app.set("view engine", "ejs");

// Configura o diretório para os templates EJS
app.set("views", path.join(__dirname, "views"));

// Rota principal que renderiza a página inicial
app.get("/", function(req, res){
    res.render("index", { title: "Home", message: "Bem-vindo à Página Inicial!" });
});

// Rota do blog
app.get("/blog", function(req, res){
    res.render("blog", { title: "Blog", message: "Bem-vindo ao Blog!" });
});

// Rota sobre
app.get("/sobre", function(req, res){
    res.render("sobre", { title: "Sobre", message: "Sobre Nós" });
});

// Servidor ouvindo na porta 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
    console.log(`Servidor rodando na porta ${PORT}`);
});
