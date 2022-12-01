var elemento1 = null;
var elemento2 = null;
var operacion = null;//1+ 2- 3* 4/

/*agregar eventos a elementos en uso*/
var boton0 = document.getElementById("btn0").addEventListener("click", function(event){agregar(0);});
var boton1 = document.getElementById("btn1").addEventListener("click", function(event){agregar(1);});
var boton2 = document.getElementById("btn2").addEventListener("click", function(event){agregar(2);});
var boton3 = document.getElementById("btn3").addEventListener("click", function(event){agregar(3);});
var boton4 = document.getElementById("btn4").addEventListener("click", function(event){agregar(4);});
var boton5 = document.getElementById("btn5").addEventListener("click", function(event){agregar(5);});
var boton6 = document.getElementById("btn6").addEventListener("click", function(event){agregar(6);});
var boton7 = document.getElementById("btn7").addEventListener("click", function(event){agregar(7);});
var boton8 = document.getElementById("btn8").addEventListener("click", function(event){agregar(8);});
var boton9 = document.getElementById("btn9").addEventListener("click", function(event){agregar(9);});
var botonMas = document.getElementById("mas").addEventListener("click", function(event){agregarOperacion(1);});
var botonMenos = document.getElementById("menos").addEventListener("click", function(event){agregarOperacion(2)});
var botonPor = document.getElementById("por").addEventListener("click", function(event){agregarOperacion(3)});
var botonEntre = document.getElementById("entre").addEventListener("click", function(event){agregarOperacion(4)});;
var botonIgual = document.getElementById("igual").addEventListener("click", function(event){calcularIgual()});
var botonlimpiar = document.getElementById("limpiar").addEventListener("click", function(event){limpiar()});
var divpan = document.getElementById("pantalla");


function imprimirPantalla(total){//imprimir en pantalla de calculadora, el valor que llega es el total
    var texto="0 <br> 0";
    if(elemento1){  
        texto=elemento1;
        if(operacion){//seleccion del signo de operacion segun lo insertado
            switch(operacion){
                case 1:
                    texto+="+";
                break;
                case 2:
                    texto+="-";
                break;
                case 3:
                    texto+="*";
                break;
                case 4:
                    texto+="/";
                break;
            }}
        if(elemento2){//si existen elementos en la segunda variable los prepara para mostrar en pantalla
            texto+=elemento2;
        }
        if(total){//si se recibe un total lo imprime en segunda linea de la panalla
            texto+="<br> "+total;
        }else{
            texto+="<br> "+0;
        }
    }

    divpan.innerHTML =texto;//incerta el texto en la pantalla de la calculadora
}

function agregarOperacion(numero){//señala la operacion que se va a hacer 
    operacion=numero;
    imprimirPantalla(null);
}
function calcularIgual(){//calcula el total
    var total=0;
    var a=parseFloat(elemento1.trim()); //quita espacios en el texto y lo convierte en flotante 
    var b=parseFloat( elemento2.trim());
    if(operacion){//calcula el total de la operacion solicitada
        switch(operacion){
            case 1:
                total=a+b;
            break;
            case 2:
                total=a-b;
            break;
            case 3:
                total=a*b;
            break;
            case 4:
                total=a/b;
            break;
        }}
    return imprimirPantalla(total);
}

function agregar(numero){
    if(!operacion){//si no se a seleccionado una operacion agrega los elementos a la primera variable 
        if(!elemento1){
                elemento1 =" "+numero; 
            }else{
                elemento1=elemento1+numero;
            }
    }else{  //si ya se selecciono una operacion se agregan a la segunda variable 
        if(!elemento2){
            elemento2 =" "+numero; 
        }else{
            elemento2=elemento2+numero;
        }
    }
    imprimirPantalla();
}

function limpiar(){ // limpia las variables para su proximo uso
    elemento1 = null;
    elemento2 = null;
    operacion = null;
    imprimirPantalla(null);
}
