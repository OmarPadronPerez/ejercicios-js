console.log("en js");

let htmlOriginal = document.getElementById("original");
let htmlEdad = document.getElementById("edad");
let htmlNombre = document.getElementById("nombre");

let original = [
    ["Alejandro", "H", 30],
    ["Alvaro", "H", 15],
    ["Ana", "M", 23],
    ["Emma", "M", 61],
    ["Lucas", "H", 13],
    ["Lucía", "M", 25],
    ["Manuel", "H", 16],
    ["NAPOLEÓN", "H", 36],
    ["NARCISO", "H", 18],
    ["NATALIA", "M", 10]
];

function imprimir(lista, divH) {
    let imprimir = "<table>"
    for (let i = 0; i < lista.length; i++) {
        imprimir += "<tr>";
        imprimir += "<td>" + lista[i][0] + "</td>";
        imprimir += "<td>" + lista[i][1] + "</td>";
        imprimir += "<td>" + lista[i][2] + "</td>";
        imprimir += "</tr>";
    }
    imprimir += "</table>";
    divH.innerHTML = imprimir;
}

/*function imprimirConsola(lista) {
    let texto = "";
    for (let i = 0; i < lista.length; i++) {
        texto += lista[i][2] + " ";
    }
    console.log(texto);
}

function ordenarEdad(lista) {
    let nuevo = lista;
    for (let i = 0; i < nuevo.length; i++) {
        for (let j = 0; j < (nuevo.length - 1); j++) {
            if (nuevo[j][2] > nuevo[j + 1][2]) {
                //console.log(nuevo[j][2] + " <--"+ nuevo[j+1][2]);
                let temp = nuevo[j];
                nuevo[j] = nuevo[j + 1];
                nuevo[j + 1] = temp;
                imprimirConsola(nuevo)
            }
        }
    }
    return nuevo;
}

function ordenarNombre(lista) {
    let nuevo = lista;
    for (let i = 0; i < nuevo.length; i++) {
        for (let j = 0; j < (nuevo.length - 1); j++) {
            if (nuevo[j][0] > nuevo[j + 1][0]) {
                //console.log(nuevo[j][2] + " <--"+ nuevo[j+1][2]);
                let temp = nuevo[j];
                nuevo[j] = nuevo[j + 1];
                nuevo[j + 1] = temp;
                //imprimirConsola(nuevo)
            }
        }
    }
    return nuevo;
}*/

/*imprimir(original, htmlOriginal);
imprimir(ordenarEdad(original), htmlEdad);
imprimir(ordenarNombre(original), htmlNombre);*/

function ordenar(lista, tipo) {
    //0-nombre 2-edad
    let nuevo = lista;
    for (let i = 0; i < nuevo.length; i++) {
        for (let j = 0; j < (nuevo.length - 1); j++) {
            if (nuevo[j][tipo] > nuevo[j + 1][tipo]) {
                let temp = nuevo[j];
                nuevo[j] = nuevo[j + 1];
                nuevo[j + 1] = temp;
            }
        }
    }
    return nuevo;
}

imprimir(original, htmlOriginal);
imprimir(ordenar(original, 2), htmlEdad);
imprimir(ordenar(original, 0), htmlNombre);

