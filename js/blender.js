var estadoLicualdora = "apagada";
var sonidoLicuadora = document.getElementById("blender-sound");
var botonLicuadora = document.getElementById("blender-button-sound");
var licuadora = document.getElementById("blender");


function controlarLicuadora(){
    if(estadoLicualdora == "apagada") {
        estadoLicualdora = "encendido";
        hacerruido();
        licuadora.classList.add("active");
       // console.log("me prendiste");
    } else {
        estadoLicualdora = "apagada"
        hacerruido();
        licuadora.classList.remove("active");
        //console.log("me apagaste");
    }
}

function hacerruido(){
    if(sonidoLicuadora.paused) {
        botonLicuadora.play();
        sonidoLicuadora.play();
    } else{
        botonLicuadora.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0;
    }
}