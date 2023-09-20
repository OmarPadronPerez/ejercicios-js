console.log("en JS");

function cambioColor() {
    let color="#"+colorAleatorio();
    console.log(color);
    document.getElementById("colorFondo").innerHTML=color;
    document.getElementById("body").style.backgroundColor=color;

}

function colorAleatorio() {
    var letras = ["a", "b", "c", "d", "e", "f", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    
    let color="";
    for(let i=0;i<6;i++){
        let numero = (Math.random() * 15).toFixed(0);
        color+=letras[numero]
    }
    return color;

}
