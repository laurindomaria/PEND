//Classe
class Aluno {

    //construtor - metodo q execultaum objeto que atribui o this
    constructor(nome, idade, curso, matricula) {

    //atributos - this, "este objeto", guarda dados dentro do objeto.
    this.nome = nome;
    this.idade = idade;
    this.curso = curso;
    this.matricula = matricula;

    }
    //metodo
    aprender() {
        console.Aluno.log("Aluno aprendendo");
    }
    //metodo
    estudar() {
        console.Aluno.log("Aluno estudando");
    }
    //metodo
    apresentar() {
        console.Aluno.log("Aluno apresentando");
    }
}
    //
    const aluno1 = new Aluno("João", 20, "Engenharia", "12345");
        console.log("Aluno 1: ", aluno1);

    //
    const aluno2 = new Aluno("Maria", 22, "Medicina", "67890");
        console.log("Aluno 2: ", aluno2);   
    //

    const aluno3 = new Aluno("Pedro", 21, "Direito", "54321");
        console.log("Aluno 3: ", aluno3);
    

    
    console.log("---------------------------------");
    console.log("Atributos do aluno 1: ");
    console.log("-", aluno1.nome);
    console.log("-", aluno1.idade);
    console.log("-", aluno1.curso);
    console.log("-", aluno1.matricula);


    console.log("---------------------------------");
    console.log("Atributos do aluno 2: ");
    console.log("-", aluno2.nome);
    console.log("-", aluno2.idade);         
    console.log("-", aluno2.curso);
    console.log("-", aluno2.matricula);

    console.log("---------------------------------");
    console.log("Atributos do aluno 3: ");
    console.log("-", aluno3.nome);
    console.log("-", aluno3.idade);
    console.log("-", aluno3.curso);
    console.log("-", aluno3.matricula);


    //aluno1.apresentar();
    //aluno2.estudar();
    //aluno3.aprender();
    
