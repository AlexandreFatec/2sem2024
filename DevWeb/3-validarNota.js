const entradaDados = require('readline-sync');

function solicitarNota(numero) {
    let nota;
    while (true) {
        nota = parseFloat(entradaDados.question(`Insira a nota ${numero} (entre 0 e 10):`));
        if (!isNaN(nota) && nota >= 0 && nota <= 10) {
            break;
        } else {
            console.log("Por favor, insira um valor válido para a nota (entre 0 e 10).");
        }
    }
    return nota;
}

function solicitarPeso(numero) {
    let peso;
    while (true) {
        peso = parseInt(entradaDados.question(`Insira o peso ${numero} (número inteiro positivo):`));
        if (!isNaN(peso) && peso > 0) {
            break;
        } else {
            console.log("Por favor, insira um valor válido para o peso (número inteiro positivo).");
        }
    }
    return peso;
}

let nota1 = solicitarNota(1);
let nota2 = solicitarNota(2);
let nota3 = solicitarNota(3);

let peso1 = solicitarPeso(1);
let peso2 = solicitarPeso(2);
let peso3 = solicitarPeso(3);

let somaPesos = peso1 + peso2 + peso3;
let mediaPonderada = ((peso1 * nota1) + (peso2 * nota2) + (peso3 * nota3)) / somaPesos;

let classificacao;
if (mediaPonderada >= 9 && mediaPonderada <= 10) {
    classificacao = "A";
} else if (mediaPonderada >= 8 && mediaPonderada < 9) {
    classificacao = "B";
} else if (mediaPonderada >= 7 && mediaPonderada < 8) {
    classificacao = "C";
} else if (mediaPonderada >= 6 && mediaPonderada < 7) {
    classificacao = "D";
} else if (mediaPonderada >= 5 && mediaPonderada < 6) {
    classificacao = "E";
} else {
    classificacao = "F";
}
console.log(`A média ponderada é ${mediaPonderada.toFixed(2)} e a classificação final é: ${classificacao}.`);
