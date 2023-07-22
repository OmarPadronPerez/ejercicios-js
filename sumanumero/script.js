console.log("en js")

function correr() {
    let secuencia = leer();
    let numero = numeroASumar();

    console.log(secuencia);
    console.log(numero);
    let final = twoSum(secuencia, numero)

    resultados(final);

}

function leer() {
    let original = document.getElementById("secuencia").value += " ";
    let secuencia = [];
    let numero = "";
    for (let i = 0; original.length > i; i++) {
        if (original[i] == "," || original[i] == " ") {
            if (numero.length > 0) {
                secuencia.push(parseInt(numero));
                numero = "";
            }

        } else {
            numero += original[i];
        }
    }
    return secuencia;
}

function numeroASumar() {
    return numero = parseInt(document.getElementById("asumar").value);
}

function twoSum(secuencia, resultado) {
    let final = [];

    for (let i = 0; secuencia.length - 1 > i; i++) {
        for (let j = i; secuencia.length > j; j++) {
            if ((secuencia[i] + secuencia[j]) == resultado) {
                final.push([secuencia[i], secuencia[j]]);
            }
        }
    }
    return final;
}

function resultados(secuencia) {
    let mostrar = "<ul>";
    const div = document.getElementById("resultados");

    for (let i = 0; secuencia.length > i; i++) {
        mostrar += "<li>";
        mostrar += secuencia[i][0] + " + " + secuencia[i][1];
        mostrar += "</li>";
    }
    mostrar += "</ul>";

    div.innerHTML = mostrar;
}