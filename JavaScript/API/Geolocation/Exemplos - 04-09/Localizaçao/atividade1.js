// ==============================
// LOCALIZAÇÃO
// ==============================

const btnLocalizacao = document.querySelector("#btnLocalizacao");

const latitude = document.querySelector("#latitude");
const longitude = document.querySelector("#longitude");
const precisao = document.querySelector("#precisao");


btnLocalizacao.addEventListener("click", function () {

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(

            function (posicao) {

                latitude.textContent =
                    posicao.coords.latitude;

                longitude.textContent =
                    posicao.coords.longitude;

                precisao.textContent =
                    posicao.coords.accuracy + " metros";

            },

            function (erro) {

                console.log("Erro ao obter localização:", erro);

                latitude.textContent = "Erro";
                longitude.textContent = "Erro";
                precisao.textContent = "Erro";

            }

        );

    } else {

        latitude.textContent = "Não disponível";
        longitude.textContent = "Não disponível";
        precisao.textContent = "Não disponível";

    }

});


// ==============================
// CÂMERA
// ==============================

const video = document.querySelector("#camera");

const btnCamera = document.querySelector("#btnCamera");

const btnFoto = document.querySelector("#btnFoto");

const canvas = document.querySelector("#canvas");

const foto = document.querySelector("#foto");

const mensagem = document.querySelector("#mensagem");


let cameraAtiva = false;


// ==============================
// ATIVAR CÂMERA
// ==============================

btnCamera.addEventListener("click", function () {

    if (!navigator.mediaDevices ||
        !navigator.mediaDevices.getUserMedia) {

        mensagem.textContent =
            "Seu navegador não permite acessar a câmera.";

        return;
    }


    navigator.mediaDevices.getUserMedia({

        video: true,

        audio: false

    })

    .then(function (stream) {

        video.srcObject = stream;

        cameraAtiva = true;

        mensagem.textContent =
            "Câmera ativada! Agora clique em Tirar Foto.";

    })

    .catch(function (erro) {

        console.log(
            "Erro ao acessar a câmera:",
            erro
        );

        mensagem.textContent =
            "Não foi possível acessar a câmera.";

    });

});


// ==============================
// TIRAR FOTO
// ==============================

btnFoto.addEventListener("click", function () {


    // Verifica se a câmera foi ativada

    if (!cameraAtiva) {

        mensagem.textContent =
            "Ative a câmera primeiro.";

        return;
    }


    // Verifica se a câmera terminou de carregar

    if (video.videoWidth === 0 ||
        video.videoHeight === 0) {

        mensagem.textContent =
            "Aguarde a câmera carregar.";

        return;
    }


    // Define o tamanho do canvas

    canvas.width = video.videoWidth;

    canvas.height = video.videoHeight;


    // Cria o contexto do canvas

    const contexto =
        canvas.getContext("2d");


    // Captura a imagem do vídeo

    contexto.drawImage(

        video,

        0,

        0,

        canvas.width,

        canvas.height

    );


    // Converte a imagem para PNG

    const imagem =
        canvas.toDataURL("image/png");


    // Coloca a imagem no elemento img

    foto.src = imagem;


    // Mostra a foto

    foto.style.display = "block";


    // Mensagem

    mensagem.textContent =
        "Foto tirada com sucesso!";

});