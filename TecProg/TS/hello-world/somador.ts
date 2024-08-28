


//estrutura de uma classe, independente de TUDO
//public é um modificador de acesso


class Somador {
    public somar(numero1: number, numero2: number) {
        return numero1 + numero2
    } //método é uma funcao dentro da classe
}

//criando um objeto a partir de uma classe, qualquer coisa é objeto basicamente
let somador = new Somador()

console.log(somador.somar(102,5))