console.log("en JS");

function colorAleatorio() {
    cambiarFondo(seleccioncolor());
}

function seleccioncolor() {
    var letras = ["a", "b", "c", "d", "e", "f", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let color="";
    for(let i=0;i<6;i++){
        let numero = (Math.random() * 15).toFixed(0);
        color+=letras[numero]
    }
    return color;
}

function cambiarFondo(color){
    if(color.charAt(0)!='#'){
        console.log(color);
        color="#"+color;
    }
    document.getElementById("colorFondo").innerHTML=color;
    document.getElementById("body").style.backgroundColor=color;
}