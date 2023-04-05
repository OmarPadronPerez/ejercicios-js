function ocultar() {
    const lista = document.getElementsByClassName("mostrar");

    for (let i = 0; i < lista.length; i++) {
        //const esconder = document.getElementsByClassName("mostrar");
        lista[i].classList.add("d-none");

    }
}