const paoBranco = document.querySelector("#pao-branco");
const paoIntegral = document.querySelector("#pao-integral");

const frango = document.querySelector("#frango");
const carne = document.querySelector("#carne");
const presunto = document.querySelector("#presunto");

const mussarela = document.querySelector("#mussarela");
const cheddar = document.querySelector("#cheddar");

const alface = document.querySelector("#alface");
const tomate = document.querySelector("#tomate");
const bacon = document.querySelector("#bacon");

const maionese = document.querySelector("#maionese");
const barbecue = document.querySelector("#barbecue");

const sanduiche = document.querySelector("#sanduiche");

const valor = document.querySelector("#valor");

const botaoTotal = document.querySelector("#finalizar");

const telaPreparando = document.querySelector("#telaPreparando");

let total = 0;


// ============================
// ARRASTAR INGREDIENTES
// ============================

paoBranco.addEventListener("dragstart", function (event) {
    event.dataTransfer.setData("text", event.target.id);
});

paoIntegral.addEventListener("dragstart", function (event) {
    event.dataTransfer.setData("text", event.target.id);
});

frango.addEventListener("dragstart", function (event) {
    event.dataTransfer.setData("text", event.target.id);
});

carne.addEventListener("dragstart", function (event) {
    event.dataTransfer.setData("text", event.target.id);
});

presunto.addEventListener("dragstart", function (event) {
    event.dataTransfer.setData("text", event.target.id);
});

mussarela.addEventListener("dragstart", function (event) {
    event.dataTransfer.setData("text", event.target.id);
});

cheddar.addEventListener("dragstart", function (event) {
    event.dataTransfer.setData("text", event.target.id);
});

alface.addEventListener("dragstart", function (event) {
    event.dataTransfer.setData("text", event.target.id);
});

tomate.addEventListener("dragstart", function (event) {
    event.dataTransfer.setData("text", event.target.id);
});

bacon.addEventListener("dragstart", function (event) {
    event.dataTransfer.setData("text", event.target.id);
});

maionese.addEventListener("dragstart", function (event) {
    event.dataTransfer.setData("text", event.target.id);
});

barbecue.addEventListener("dragstart", function (event) {
    event.dataTransfer.setData("text", event.target.id);
});


// ============================
// PERMITIR SOLTAR
// ============================

sanduiche.addEventListener("dragover", function (event) {

    event.preventDefault();

    console.log("Pode soltar aqui no sanduíche");

});


// ============================
// SOLTAR INGREDIENTE
// ============================

sanduiche.addEventListener("drop", function (event) {

    event.preventDefault();

    // Pega o ID do ingrediente
    const id = event.dataTransfer.getData("text");

    // Encontra o ingrediente
    const elemento = document.querySelector("#" + id);

    if (!elemento) {
        return;
    }

    // Cria uma cópia do ingrediente
    const copia = elemento.cloneNode(true);

    // A cópia não poderá ser arrastada novamente
    copia.setAttribute("draggable", "false");

    // Coloca a cópia dentro do sanduíche
    sanduiche.appendChild(copia);

    // Pega o preço do ingrediente
    const preco = Number(elemento.dataset.preco);

    // Soma o preço
    total = total + preco;

    // Mostra o valor
    valor.textContent = "R$ " + total.toFixed(2).replace(".", ",");

    // Remove a mensagem "Arraste os ingredientes para cá!"
    const mensagem = sanduiche.querySelector("p");

    if (mensagem) {
        mensagem.remove();
    }

});


// ============================
// CLICAR EM FINALIZAR PEDIDO
// ============================

botaoTotal.addEventListener("click", function () {

    // Verifica se algum ingrediente foi escolhido
    if (total === 0) {

        alert("Monte seu lanche antes de continuar!");

        return;
    }

    // Esconde o cabeçalho
    document.querySelector("header").style.display = "none";

    // Esconde a tela de montagem
    document.querySelector("main").style.display = "none";

    // Mostra a tela de preparação
    telaPreparando.style.display = "flex";

});