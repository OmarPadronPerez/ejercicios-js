function hacerPista(){
    let pista="";
    for(let i=0;i<5;i++){
        if(Math.floor(Math.random() * 2)==0){
            pista+="_";
        }else{
            pista+="|";
        }
    }
    return pista;
}

function tabla(titulo,resultado){
    let regreso="<tr><td>"+titulo+"</td>";
    for(let i=0;i<resultado.length;i++){
        regreso+="<td>"+resultado[i]+"</td>";
    }
    return regreso;
}

function correr(){
let pista=hacerPista();
let jugador1=document.getElementById("jugador1").value;
let jugador2=document.getElementById("jugador2").value;

let jugador1N="";
let j1Malas=0;
let jugador2N="";
let j2Malas=0;
for(let i=0;i<pista.length;i++){
    if(jugador1[i]==pista[i]){
        jugador1N+=pista[i];
    }else{
        jugador1N+="X";
        j1Malas++;
    }

    if(jugador2[i]==pista[i]){
        jugador2N+=pista[i];
    }else{
        jugador2N+="X";
        j2Malas++;
    }

}
const tablaResultados=document.getElementById("resultado");
let mostrar="<table> "
mostrar+=tabla("Pista",pista);
mostrar+=tabla("Jugador 1",jugador1N);
mostrar+=tabla("Jugador 2",jugador2N);
mostrar+="</table> <br> <h2>"
if(j2Malas==j1Malas){
    mostrar+="EMPATE";
}else if(j2Malas>j1Malas){  
    mostrar+="Jugador 1 GANA";
}else{
    mostrar+="Jugador 2 GANA";
}
mostrar+="</h2>";
tablaResultados.innerHTML=mostrar;


console.log("pista     "+pista);
console.log("jugador 1 "+jugador1N+ " "+j1Malas);
console.log("jugador 2 "+jugador2N+ " "+j2Malas);
console.log("mostrar     "+mostrar);
}