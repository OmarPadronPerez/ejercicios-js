function randomN(i) {
    return Math.trunc(Math.random() * i);
}

function limpiar(cadena) {
    cadena.trimStart();
    cadena.trimEnd();
    return cadena;
}
function convertir() {
    let cadena = limpiar(document.getElementById("cadena").value);
    let cadenaNueva = "";
    let signo = 0;

    for (let i = 0; cadena.length > i; i++) {
        let nuevo = cadena[i];
        let cambio = false;


        if (cadena[i] == "o" || cadena[i] == "O") {//evalua O
            switch (randomN(3)) {
                case 0://lo deja como está
                    break;
                case 1://lo pasa a mayuscula
                    nuevo = cadena[i].toUpperCase();
                    break;
                case 2://lo cambia a numero
                    nuevo = "0";
                    break;
            }
            cambio = true;
        }

        if (cadena[i] == "a" || cadena[i] == "A") {//evalua A
            switch (randomN(4)) {
                case 0://lo deja como está
                    break;
                case 1://lo pasa a mayuscula
                    nuevo = cadena[i].toUpperCase();
                    break;
                case 2://lo cambia a numero
                    nuevo = "4";
                    break;
                case 3:
                    nuevo = "@";
                    break;
            }
            cambio = true;
        }

        if (cadena[i] == "g" || cadena[i] == "G") {//evalua G
            switch (randomN(3)) {
                case 0://lo deja como está
                    break;
                case 1://lo pasa a mayuscula
                    nuevo = cadena[i].toUpperCase();
                    break;
                case 2://lo cambia a numero
                    nuevo = "6";
                    break;
            }
            cambio = true;
        }

        if (cadena[i] == "S" || cadena[i] == "s") {//evalua S
            switch (randomN(3)) {
                case 0://lo deja como está
                    break;
                case 1://lo pasa a mayuscula
                    nuevo = cadena[i].toUpperCase();
                    break;
                case 2://lo cambia a numero
                    nuevo = "$";
                    break;
            }
            cambio = true;
        }

        if (cadena[i] == "i" || cadena[i] == "I") {//evalua I
            switch (randomN(4)) {
                case 0://lo deja como está
                    break;
                case 1://lo pasa a mayuscula
                    nuevo = cadena[i].toUpperCase();
                    break;
                case 2://lo cambia a numero
                    nuevo = "1";
                    break;
                case 3:
                    nuevo = "/";
                    break;
            }
            cambio = true;
        }

        if (cadena[i] == " ") {//evalua espacio
            switch (randomN(4)) {
                case 0://lo deja como está
                    break;
                case 1://lo pasa a mayuscula
                    nuevo = ".";
                    break;
                case 2://lo cambia a numero
                    nuevo = "-";
                    break;
                case 3:
                    nuevo = "_";
                    break;
            }
            cambio = true;
        }

        if (signo < 2 && randomN(10) == 5) {//agrega un signo 
            switch (randomN(6)) {
                case 0:
                    nuevo += "=";
                    break;
                case 1:
                    nuevo += "#";
                    break;
                case 2:
                    nuevo += "%";
                    break;
                case 3:
                    nuevo += "&";
                    break;
                case 4:
                    nuevo += "*";
                    break;
            }
            signo++;
            cambio = true;
        }

        if (cambio == false && randomN(5) == 2) {
            nuevo = cadena[i].toUpperCase();
        }

        cadenaNueva += nuevo;
    }
    document.getElementById("resultado1").innerHTML = "<h2>" + cadenaNueva + "</h2>";

}

