import adicionarTarefa from "./adicionar.js";
import removerTarefa from "./remover.js";
import mostrarTarefas from "./mostrar.js";

const tarefas = [];

const formulario = document.getElementById("formulario");
const campoTarefa = document.getElementById("tarefa");
const listaTarefas = document.getElementById("lista-tarefas");
const mensagem = document.getElementById("mensagem");

function atualizarLista() {
    mostrarTarefas(tarefas, listaTarefas);

    if (tarefas.length === 0) {
        mensagem.textContent = "Nenhuma tarefa adicionada.";
    } else {
        mensagem.textContent = `${tarefas.length} tarefa(s) na lista.`;
    }
}

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const tarefa = campoTarefa.value;

    if (tarefa.trim() === "") {
        alert("Digite uma tarefa!");
        return;
    }

    adicionarTarefa(tarefas, tarefa);

    campoTarefa.value = "";

    atualizarLista();
});

listaTarefas.addEventListener("click", function (evento) {
    if (evento.target.classList.contains("btn-remover")) {
        const indice = evento.target.dataset.indice;

        removerTarefa(tarefas, indice);

        atualizarLista();
    }
});

atualizarLista();