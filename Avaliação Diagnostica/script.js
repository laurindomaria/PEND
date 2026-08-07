const formulario = document.getElementById("formContato");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();


    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();

    const mensagem = document.getElementById("mensagem");


    if (nome === "" || email === "") {

        mensagem.style.color = "#d9534f";

        mensagem.innerHTML = 
        "Por favor, preencha todos os campos.";


    } else {


        mensagem.style.color = "#5cb85c";

        mensagem.innerHTML = 
        `Obrigada pelo contato, ${nome}! 
        Em breve retornarei para o e-mail ${email}.`;


        formulario.reset();

    }

});