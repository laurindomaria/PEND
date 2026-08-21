class Produtos {
    constructor(nome, preco, categoria, desconto) {
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
        this.desconto = desconto;
    }

    aplicarDesconto() {
        this.preco = this.preco - (this.preco * (this.desconto / 100));
    }
}

class Estoque {
    constructor() {
        this.produtos = [];
    }

    // Adicionar produto
    adicionarProduto(produto) {
        this.produtos.push(produto);
        this.salvarProdutos();
        this.exibirNaTela();
    }

    // Excluir produto
    excluirProduto(indice) {
        this.produtos.splice(indice, 1);
        this.salvarProdutos();
        this.exibirNaTela();
    }

    // Salvar produtos no localStorage
    salvarProdutos() {
        localStorage.setItem("produtos", JSON.stringify(this.produtos));
    }

    // Carregar produtos do localStorage
    carregarProdutos() {
        const produtosSalvos = localStorage.getItem("produtos");

        if (produtosSalvos) {
            this.produtos = JSON.parse(produtosSalvos);
        }

        this.exibirNaTela();
    }

    // Exibir produtos na tela
    exibirNaTela() {
        const resultado = document.querySelector("#resultado");

        resultado.innerHTML = "";

        this.produtos.forEach((produto, indice) => {

            resultado.innerHTML += `
                <div class="produto">

                    <p>
                        <strong>Nome:</strong> 
                        ${produto.nome}
                    </p>

                    <p>
                        <strong>Preço:</strong> 
                        R$ ${Number(produto.preco).toFixed(2)}
                    </p>

                    <p>
                        <strong>Categoria:</strong> 
                        ${produto.categoria}
                    </p>

                    <p>
                        <strong>Desconto:</strong> 
                        ${produto.desconto}%
                    </p>

                    <button 
                        class="button" 
                        onclick="estoque.excluirProduto(${indice})">
                        Excluir
                    </button>

                    <hr>

                </div>
            `;
        });
    }
}

// Criar estoque
const estoque = new Estoque();

// Pegar elementos do HTML
const nome = document.querySelector("#nome");
const preco = document.querySelector("#preco");
const categoria = document.querySelector("#categoria");
const desconto = document.querySelector("#desconto");

const botaoCadastrar = document.querySelector("#botaoCadastrar");

// Botão cadastrar
botaoCadastrar.addEventListener("click", function () {

    // Verificar campos vazios
    if (
        nome.value.trim() === "" ||
        preco.value === "" ||
        categoria.value.trim() === "" ||
        desconto.value === ""
    ) {
        alert("Preencha todos os campos!");
        return;
    }

    // Criar produto
    const produto = new Produtos(
        nome.value.trim(),
        Number(preco.value),
        categoria.value.trim(),
        Number(desconto.value)
    );

    // Adicionar produto ao estoque
    estoque.adicionarProduto(produto);

    // Limpar campos
    nome.value = "";
    preco.value = "";
    categoria.value = "";
    desconto.value = "";

    // Voltar para o campo nome
    nome.focus();
});

// Carregar produtos salvos quando abrir a página
estoque.carregarProdutos();