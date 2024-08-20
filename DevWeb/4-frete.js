const entradaDados = require('readline-sync');

function solicitarNumeroDePecas() {
    let pecas;
    while (true) {
        pecas = parseInt(entradaDados.question("Qual é o número total de peças a serem transportadas? "));
        if (!isNaN(pecas) && pecas > 0) {
            break;
        } else {
            console.log("Por favor, insira um número inteiro positivo para o número de peças.");
        }
    }
    return pecas;
}

function solicitarRastreamento() {
    let rastreamento;
    while (true) {
        rastreamento = entradaDados.question("Deseja rastreamento na entrega? (S-Sim ou N-Não) ").toUpperCase();
        if (rastreamento === "S" || rastreamento === "N") {
            break;
        } else {
            console.log("Por favor, responda com 'S' para Sim ou 'N' para Não.");
        }
    }
    return rastreamento === "S";
}

function solicitarRegiao() {
    let regiao;
    while (true) {
        regiao = parseInt(entradaDados.question("Qual é a região de entrega? (1-Sudeste, 2-Sul, 3-Centro-Oeste) "));
        if (!isNaN(regiao) && (regiao === 1 || regiao === 2 || regiao === 3)) {
            break;
        } else {
            console.log("Por favor, insira um valor válido para a região (1, 2 ou 3).");
        }
    }
    return regiao;
}

function solicitarDistancia() {
    let distancia;
    while (true) {
        distancia = parseFloat(entradaDados.question("Qual é a distância total em quilômetros até o destino? "));
        if (!isNaN(distancia) && distancia > 0) {
            break;
        } else {
            console.log("Por favor, insira um valor válido para a distância (número positivo).");
        }
    }
    return distancia;
}

function calcularFrete(pecas, regiao, rastreamento) {
    const precosPorRegiao = { 1: 1.20, 2: 1.10, 3: 1.15 };
    const descontosPorRegiao = { 1: 0.12, 2: 0.10, 3: 0.08 };

    let precoPorPeca = precosPorRegiao[regiao];
    let desconto = descontosPorRegiao[regiao];

    let custoFrete;
    if (pecas <= 1000) {
        custoFrete = pecas * precoPorPeca;
    } else {
        let pecasExcedentes = pecas - 1000;
        let precoComDesconto = precoPorPeca * (1 - desconto);
        custoFrete = (1000 * precoPorPeca) + (pecasExcedentes * precoComDesconto);
    }

    if (rastreamento) {
        custoFrete += 200;
    }

    return custoFrete;
}


function calcularConsumoCombustivel(distancia) {
    return distancia;
}

let pecas = solicitarNumeroDePecas();
let rastreamento = solicitarRastreamento();
let regiao = solicitarRegiao();
let distancia = solicitarDistancia();

let custoFrete = calcularFrete(pecas, regiao, rastreamento);
let consumoCombustivel = calcularConsumoCombustivel(distancia);

console.log(`O custo total do frete é R$ ${custoFrete.toFixed(2)} e o consumo de combustível será de ${consumoCombustivel} litros.`);
