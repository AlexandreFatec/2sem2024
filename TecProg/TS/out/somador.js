"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Somador = /** @class */ (function () {
    function Somador() {
    }
    Somador.prototype.somar = function (numero1, numero2) {
        return numero1 + numero2;
    };
    Somador.prototype.subtrair = function (numero1, numero2) {
        return numero1 - numero2;
    };
    Somador.prototype.multiplicar = function (numero1, numero2) {
        return numero1 * numero2;
    };
    Somador.prototype.dividir = function (numero1, numero2) {
        if (numero2 === 0) {
            throw new Error("Não é possível dividir por zero");
        }
        return numero1 / numero2;
    };
    return Somador;
}());
exports.default = Somador;
var somador = new Somador();
console.log(somador.somar(102, 5));
console.log(somador.subtrair(102, 5));
console.log(somador.multiplicar(102, 5));
console.log(somador.dividir(102, 5));
