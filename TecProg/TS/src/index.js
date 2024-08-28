"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const somador_1 = __importDefault(require("./somador"));
let somado = new somador_1.default();
console.log(somado.somar(102, 5));
