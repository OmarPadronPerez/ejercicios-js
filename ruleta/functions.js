let anterior = 0;
let actual = 1;
let activo = false;
var bucle;
const boton = document.getElementById('boton');
var modalId = document.getElementById('modalId');


function getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
}

boton.addEventListener("click", function () { cambioEstado() });


function cambioEstado() {
    let mensaje = "";
    if (activo) {
        activo = false;
        mensaje = "INICIAR";
        clearInterval(bucle);
        activarModal();

    } else {
        activo = true;
        mensaje = "DETENER";
            document.getElementById("img" + actual).classList.remove("active");
        iniciar();
    }
}
function activarModal() {
    let agregar = document.getElementById("img" + actual).src;
    agregar = "<img src=" + agregar + ' style="width: 100%";></img>';
    //console.log(agregar);
    let htmlmodal = document.getElementById("imagenModal");
    htmlmodal.innerHTML = agregar;
    timeout = setTimeout(function () {
        document.getElementById('botonModal').click();
    }, 300);
}

function cambiodeicono() {
    let anterior=actual-1;
    if(anterior<1){
        anterior=12;
    }
    document.getElementById("img" + anterior).classList.remove("active");
    
    document.getElementById("img" + actual).classList.add("active");
}


function iniciar() {
    bucle = setInterval(() => {
        actual++;
        if(actual>12){
            actual=1;
        }
        cambiodeicono();
    }, 30);
}




