const botao = document.querySelector("#btnConsultar");
const resultado = document.querySelector("#resultado");
const mensagem = document.querySelector("#mensagem");

async function consultarUsuarios() {

    resultado.innerHTML = "";
    mensagem.textContent = "Carregando usuários...";

    try {

        const resposta = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!resposta.ok) {
            throw new Error("Erro ao consultar a API.");
        }

        const usuarios = await resposta.json();

        mensagem.textContent = "Usuários carregados com sucesso!";

        usuarios.forEach(usuario => {

            const div = document.createElement("div");

            div.classList.add("usuario");

            div.innerHTML = `
                <h2>${usuario.name}</h2>

                <p><strong>Usuário:</strong> ${usuario.username}</p>

                <p><strong>E-mail:</strong> ${usuario.email}</p>

                <p><strong>Cidade:</strong> ${usuario.address.city}</p>
            `;

            resultado.appendChild(div);
        });

    } catch (erro) {

        mensagem.textContent =
            "Não foi possível carregar os usuários.";

        console.error(erro);
    }
}

botao.addEventListener("click", consultarUsuarios);