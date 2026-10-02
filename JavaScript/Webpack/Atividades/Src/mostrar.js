function mostrarTarefas(tarefas, lista) {
    lista.innerHTML = "";

    tarefas.forEach((tarefa, indice) => {
        const item = document.createElement("li");

        item.innerHTML = `
            <span>${tarefa}</span>
            <button class="btn-remover" data-indice="${indice}">
                Remover
            </button>
        `;

        lista.appendChild(item);
    });
}

export default mostrarTarefas;