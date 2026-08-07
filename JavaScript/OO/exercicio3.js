//Classe
class Produto {
     //construtor - metodo q execultaum objeto que atribui o this
     constructor(vender, repor, alterarPreco) {

    //atributos - this, "este objeto", guarda dados dentro do objeto.
    this.vender = vender;
    this.repor = repor;
    this.alterarPreco = alterarPreco;
     }
     //metodo
     vender() {
        console.Produto.log("Produto vendido");
    }
    //metodo
    repor() {
        console.Produto.log("Produto reposto");
    }
    //metodo
    alterarPreco(novoPreco) {
        this.preco = novoPreco;
        console.Produto.log("Preço alterado");
    }
}

    //
    const produto1 = new Produto("Produto A", 10, 20);
        console.log("Produto 1: ", produto1);
    
    //
    const produto2 = new Produto("Produto B", 5, 15);
        console.log("Produto 2: ", produto2);   
    
    //
    const produto3 = new Produto("Produto C", 8, 12);
        console.log("Produto 3: ", produto3);
    
    
    console.log("---------------------------------");
    console.log("Atributos do produto 1: ");
    console.log("-", produto1.vender);
    console.log("-", produto1.repor);
    console.log("-", produto1.alterarPreco);


    console.log("---------------------------------");
    console.log("Atributos do produto 2: ");
    console.log("-", produto2.vender);
    console.log("-", produto2.repor);         
    console.log("-", produto2.alterarPreco);



    console.log("---------------------------------");
    console.log("Atributos do produto 3: ");
    console.log("-", produto3.vender);
    console.log("-", produto3.repor);
    console.log("-", produto3.alterarPreco);    

    //aluno.vender();
    //aluno.repor();
    //aluno.alterarPreco();