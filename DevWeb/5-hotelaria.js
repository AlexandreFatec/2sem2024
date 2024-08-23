const readline = require('readline-sync');

const codigoFuncionario = readline.question("Digite o código do funcionário: ");
const horasTrabalhadas = parseFloat(readline.question("Digite o número de horas trabalhadas no mês: "));
const turnoTrabalho = readline.question("Digite o turno de trabalho (M para matutino, V para vespertino, N para noturno): ").toUpperCase();
const categoriaFuncionario = readline.question("Digite a categoria do funcionário (F para funcionário, G para gerente): ").toUpperCase();
const salarioMinimo = parseFloat(readline.question("Digite o valor do salário-mínimo: "));

let valorHora;

if (categoriaFuncionario === "F") {
    switch (turnoTrabalho) {
        case "M":
            valorHora = 0.1 * salarioMinimo;
            break;
        case "V":
            valorHora = 0.12 * salarioMinimo;
            break;
        case "N":
            valorHora = 0.15 * salarioMinimo;
            break;
        default:
            console.log("Turno de trabalho inválido.");
            return;
    }
} else if (categoriaFuncionario === "G") {
    switch (turnoTrabalho) {
        case "M":
            valorHora = 0.2 * salarioMinimo;
            break;
        case "V":
            valorHora = 0.25 * salarioMinimo;
            break;
        case "N":
            valorHora = 0.3 * salarioMinimo;
            break;
        default:
            console.log("Turno de trabalho inválido.");
            return;
    }
} else {
    console.log("Categoria do funcionário inválida.");
    return;
}

const salarioInicial = valorHora * horasTrabalhadas;

const auxilioAlimentacao = 200.00;
const salarioFinal = salarioInicial + auxilioAlimentacao;

console.log("Código do funcionário: ", codigoFuncionario);
console.log("Número de horas trabalhadas: ", horasTrabalhadas);
console.log("Valor da hora trabalhada: R$ ", valorHora.toFixed(2));
console.log("Salário inicial: R$ ", salarioInicial.toFixed(2));
console.log("Salário final: R$ ", salarioFinal.toFixed(2));
