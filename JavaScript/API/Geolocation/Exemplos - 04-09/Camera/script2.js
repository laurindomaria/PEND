const video = document.querySelector("#camera");
const canvas = document.querySelector("#canvas");
const botao = document.querySelector("#btnFoto");
const foto = document.querySelector("#foto");
const btnCamera = document.querySelector("#btnCamera");
const mensagem = document.querySelector("#mensagem");

let stream;

// ATIVAR CÂMERA
btnCamera.addEventListener("click", function() {

    navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false
    })

    .then(function(streamCamera) {

        stream = streamCamera;

        video.srcObject = stream;

        mensagem.textContent = "Câmera ativada com sucesso!";

    })

    .catch(function(erro) {

        console.log("Erro ao acessar a câmera:", erro);

        mensagem.textContent =
            "Não foi possível acessar a câmera.";
    });

});


// TIRAR FOTO
botao.addEventListener("click", function() {

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const contexto = canvas.getContext("2d");

    contexto.drawImage(
        video,
        0,
        0,
        canvas.width,
        canvas.height
    );

    foto.src = canvas.toDataURL("image/png");

    mensagem.textContent = "Foto tirada com sucesso!";

});

