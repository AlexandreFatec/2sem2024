const entradaDados = require('readline-sync');

function solicitarIdade() {
    let idade;
    while (true) {
        idade = parseInt(entradaDados.question("Qual é a sua idade em anos? "));
        if (!isNaN(idade) && idade >= 0) {
            break;
        } else {
            console.log("Por favor, insira um número inteiro positivo para a idade.");
        }
    }
    return idade;
}

function classificarFaixaEtaria(idade) {
    const faixasEtarias = [
        { limiteInferior: 0, limiteSuperior: 14, descricao: "Criança" },
        { limiteInferior: 15, limiteSuperior: 29, descricao: "Jovem" },
        { limiteInferior: 30, limiteSuperior: 59, descricao: "Adulto" },
        { limiteInferior: 60, limiteSuperior: Infinity, descricao: "Idoso" }
    ];

    for (let faixa of faixasEtarias) {
        if (idade >= faixa.limiteInferior && idade <= faixa.limiteSuperior) {
            return faixa.descricao;
        }
    }
}

let nome = entradaDados.question("Qual é o seu nome? ");

let idade = solicitarIdade();

let faixaEtaria = classificarFaixaEtaria(idade);

console.log(`Olá, ${nome}! Você tem ${idade} anos e está na faixa etária: ${faixaEtaria}.`);
