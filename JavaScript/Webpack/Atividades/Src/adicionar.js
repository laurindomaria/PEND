function adicionarTarefa(tarefas, tarefa) {
    if (tarefa.trim() === "") {
        return tarefas;
    }

    tarefas.push(tarefa.trim());

    return tarefas;
}

export default adicionarTarefa;