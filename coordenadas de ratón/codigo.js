console.log("dentro de js");
const campo = document.getElementById("campo");
const campoCoordenadas=document.getElementById("coordenadas");
let inicioX=campo.getBoundingClientRect().x;
let inicioY=campo.getBoundingClientRect().y;

addEventListener("resize",function(){//si la pantalla cambia de tamaño
    inicioX=campo.getBoundingClientRect().x;
    inicioY=campo.getBoundingClientRect().y;
    console.log("cambio de tamaño");
});

campo.addEventListener("click", function (event) {//obtener coordenadas de click dentro de la figura
    console.log(inicioX +","+inicioY);
    let texto="X:"+(event.x-inicioX) +" Y:"+(event.y-inicioY);
    campoCoordenadas.innerHTML=texto;
});




