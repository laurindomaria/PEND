//Classe
class Carro {

    //construtor - metodo q execultaum objeto que atribui o this
    constructor(marca, modelo, ano, cor) {

        //atributos - this, "este objeto", guarda dados dentro do objeto.
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
    }

    //
    Ligar() {
        console.log("Carro ligado");
    }
    //
    acelerar() {
        console.log("Acelerando");
    }
    //
    frear() {
        console.log(`${this.modelo} freiou.`);
    }
}

//
const carro1 = new Carro("Volkswagem", "Gol", 2022, "Branco")
console.log("Carro 1: ", carro1);


const carro2 = new Carro("toyota", "Corolla", 2025, "Preto");
console.log("Carro 2: ", carro2);

//
const carro3 = new Carro("Volkswagem", "Polo", 2026, "Cinza");
console.log("Carro 3: ", carro3);

console.log("---------------------------------");
console.log("Atributos do carro 1: ");
console.log("-", carro1.marca);
console.log("-", carro1.modelo);
console.log("-", carro1.ano);
console.log("-", carro1.cor);

console.log("---------------------------------");
console.log("Atributos do carro 2: ");
console.log("-", carro2.marca);
console.log("-", carro2.modelo);
console.log("-", carro2.ano);
console.log("-", carro2.cor);

console.log("---------------------------------");
console.log("Atributos do carro 3: ");
console.log("-", carro3.marca);
console.log("-", carro3.modelo);
console.log("-", carro3.ano);
console.log("-", carro3.cor);

//
carro1.Ligar();
//
carro2.acelerar();
//
carro3.frear();