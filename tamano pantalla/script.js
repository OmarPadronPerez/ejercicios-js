console.log("en js");

const div_tamano = document.getElementById("tamano");
let texto = "";

window.addEventListener("resize",actualizar_texto);

function actualizar_texto() {
    
    if (screen.width <= 575.98) texto = "Extra small";
    if ( (screen.width >= 575.99) && (screen.width <= 767.98) ) texto = "celular / small";
    if ( (screen.width >= 767.98) && (screen.width <= 991.98) ) texto = "Medium devices tablets";
    if ( (screen.width >= 991.98) && (screen.width <= 1199.98) ) texto = "Large devices escritorio";
    if ( (screen.width >= 1199.98) && (screen.width <= 1200) ) texto = "ex Large devices escritorio";
    if ( (screen.width >= 1400) ) texto = "maximo";

    div_tamano.innerHTML = texto+" "+screen.width+" / "+screen.height;
}

actualizar_texto();