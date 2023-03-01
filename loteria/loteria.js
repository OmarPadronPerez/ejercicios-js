let resultado = [];
let aux = 0;
const divRespuesta=document.getElementById("HResultado");
let respuesta="";

function numeroazar(max) {
    return Math.floor(Math.random() * max);
}


while (resultado.length < 7) {
    let agregar = numeroazar(21);

    if (!resultado.includes(agregar)){
        resultado.push(agregar);
    }

}
console.log(resultado);


for(let i=0;i<resultado.length;i++){
    respuesta+=resultado[i]+" | ";
}

divRespuesta.innerHTML=respuesta;
