console.log("en js");

function revisar() {
    let frase = document.getElementById("cadena").value;
    let fraseFinal="";
    let inicio=0;

    for(let i=0;i<frase.length;i++){
        console.log("for "+i);
        if(frase[i]==" "|| i==frase.length-1){
            console.log("entra<----"+inicio);

            for(let j=i;j!=inicio-1;j--){
                console.log("j "+j);
                fraseFinal+=frase[j];
            }

            //fraseFinal+=" ";
            inicio=i;
        }
    }
    document.getElementById("resultado").innerHTML=fraseFinal;

    console.log(frase);
    console.log("final //" + fraseFinal);

}


