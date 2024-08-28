export default class Somador {
    public somar(numero1: number, numero2: number) {
        return numero1 + numero2
    } 

    public subtrair(numero1: number, numero2: number) {
        return numero1 - numero2;
    }

    public multiplicar(numero1: number, numero2: number) {
        return numero1 * numero2;
    }

    public dividir(numero1: number, numero2: number) {
        if (numero2 === 0) {
            throw new Error("Não é possível dividir por zero");
        }
        return numero1 / numero2;
    }
}

let somador = new Somador()

console.log(somador.somar(102,5))
console.log(somador.subtrair(102, 5));   
console.log(somador.multiplicar(102, 5));  
console.log(somador.dividir(102, 5));      