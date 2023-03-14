//const cadena=document.getElementById("cadena").value;
const areaRespuestas=document.getElementById("resultado");
console.log("en JS");

function revisar(cadena){
    let llave=0;
    let parentesis=0;
    let corchete=0;
    let respuesta="";

    for(let i=0; i<cadena.length ;i++){

        if(cadena[i]=="{") llave++;
        if(cadena[i]=="}") llave--;

        if(cadena[i]=="[") corchete++;
        if(cadena[i]=="]") corchete--;
        
        if(cadena[i]=="(") parentesis++;
        if(cadena[i]==")") parentesis--;
        
    }

    //frase completa
    if(llave==0 && corchete==0 && parentesis==0){
        respuesta="<br>la frase es correcta";
    }else{
        //chequeo de llaves
        if(llave>0)
            respuesta+="<br>faltan "+llave+" llaves de apertura ";
        
        if(llave<0)
            respuesta+="<br>faltan "+(llave * -1)+" llaves de cierre ";
        
        //chequeo de parentesis
        if(parentesis>0)
            respuesta+="<br>faltan "+parentesis+" parentesis de apertura ";
        
        if(parentesis<0)
            respuesta+="<br>faltan "+(parentesis * -1)+" parentesis de cierre ";
        
        //chequeo de corchetes
        if(corchete>0)
            respuesta+="<br>faltan "+corchete+" corchete de apertura ";
        
        if(corchete<0)
            respuesta+="<br>faltan "+(corchete * -1)+" corchete de cierre ";
        
    }
    
    areaRespuestas.innerHTML=respuesta;
    //console.log("RESPUESTA: "+respuesta);
}
