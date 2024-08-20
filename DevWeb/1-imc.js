const entradaDados = require('readline-sync');

let nome = entradaDados.question("Digite o seu nome: ");

let alturaCm = parseFloat(entradaDados.question("Qual é a sua altura em centímetros: "));

let alturaM = alturaCm / 100;

let pesoKg = parseFloat(entradaDados.question("Qual é o seu peso em quilogramas: "));

let imc = pesoKg / (alturaM * alturaM);

let categoria;
if (imc < 16) {
    categoria = "Baixo peso muito grave";
} else if (imc >= 16 && imc <= 16.99) {
    categoria = "Baixo peso grave";
} else if (imc >= 17 && imc <= 18.49) {
    categoria = "Baixo peso";
} else if (imc >= 18.5 && imc <= 24.99) {
    categoria = "Peso normal";
} else if (imc >= 25 && imc <= 29.99) {
    categoria = "Sobrepeso";
} else if (imc >= 30 && imc <= 34.99) {
    categoria = "Obesidade grau I";
} else if (imc >= 35 && imc <= 39.99) {
    categoria = "Obesidade grau II";
} else {
    categoria = "Obesidade grau III";
}

console.log(`Olá, ${nome}! Seu IMC é ${imc.toFixed(2)} e você está na categoria: ${categoria}.`);
