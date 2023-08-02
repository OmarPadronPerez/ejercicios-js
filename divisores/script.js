console.log("en js");

function division(numero){
    let resultados=[];
    for(let i=0;i<=100;i++){
        if(i%numero==0){
            //console.log(i)
            resultados.push(i);
        }
    }
    
    imprimir(resultados);
    return resultados;
}

function imprimir(lista){
    console.log(lista);
    let mostrar="<table><tr>";
    for(let i=0;i<lista.length;i++){
        if(i%4==0){
            mostrar+='</tr><tr>'
        }
        mostrar+='<td>'+lista[i]+'</td>'
        
    }
    mostrar+="</tr></table>";
    document.getElementById("resultado").innerHTML=mostrar;
}