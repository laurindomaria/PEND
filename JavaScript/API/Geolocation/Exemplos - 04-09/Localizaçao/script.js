navigator.geolocation.getCurrentPosition(
    function (position) {
        document.getElementById("localizacaoPermitida").style.display = "block";
        document.getElementById("localizacaoNegada").style.display = "none";
        
        console.log("Latitude:", position.coords.latitude);
        console.log("Longitude:", position.coords.longitude);
    },
    function (erro) {
        document.getElementById("localizacaoPermitida").style.display = "none";
        document.getElementById("localizacaoNegada").style.display = "block";
        
        console.log("Não foi possível obter a localização.", erro);
    },
);