// =============================
// GEOLOCATION
// =============================

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

                alert("Não foi possível obter sua localização.");

            }

        );

    } else {

        alert("Seu navegador não suporta Geolocation.");

    }

});


// =============================
// CÂMERA
// =============================

const btnCamera = document.querySelector("#btnCamera");
const camera = document.querySelector("#camera");
const mensagem = document.querySelector("#mensagem");


btnCamera.addEventListener("click", function () {

    navigator.mediaDevices.getUserMedia({

        video: true,
        audio: true

    })

    .then(function (stream) {

        camera.srcObject = stream;

        mensagem.textContent =
            "Câmera ativada com sucesso!";

    })

    .catch(function (erro) {

        console.log("Erro ao acessar a câmera:", erro);

        mensagem.textContent =
            "Não foi possível acessar a câmera.";

    });

});