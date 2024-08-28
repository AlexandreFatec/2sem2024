"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import Somador from "./somador" //aqui só esta importando, dividindo o codigo
var v_1 = __importDefault(require("./v"));
//let somado = new Somador()       //uma instancia da classe somador
//console.log(somado.somar(102,5))
var vl = new v_1.default('Corsa'); //uma instancia da classe veiculo
console.log(vl.nome);
