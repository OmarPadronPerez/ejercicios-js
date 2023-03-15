console.log("en js");
const pokemonContainer = document.querySelector(".contenedor-pokemon");
const spinner = document.getElementById("spinner");
const tiposArray = [
    ["flying", "Volador", "#c8f1f4"],
    ["poison", "Veneno", "#4e0041"],
    ["bug", "Bicho", "#c0e9d6"],
    ["fire", "Fuego", "#fa0000"],
    ["ice", "Hielo", "#b0f0f7"],
    ["grass", "Planta", "#057100"],
    ["ground", "Tierra", "#ffb900"],
    ["rock", "Roca", "#c28d00"],
    ["normal", "Normal", "#ffffff"],
    ["fighting", "Lucha", "#f5d8a1"],
    ["ghost", "Fantasma", "#e2cdff"],
    ["steel", "Acero", "#d3d3d3"],
    ["water", "Agua", "#0023ff"],
    ["electric", "Electrico", "#fbff00"],
    ["psychic", "Psiquico", "#a261d2"],
    ["dragon", "Dragon", "#8b0000"],
    ["dark", "Obscuro", "#000000"],
    ["fairy", "Hada", "#fadef7"]

]

function buscarpokemon(id) {
    fetch('https://pokeapi.co/api/v2/pokemon/' + id)
        .then((res) => res.json())
        .then((data) => {
            crearPokemon(data);
            spinner.style.display = "none";
        });
}

function multiplespokemons(cantidad) {
    spinner.style.display = "block";
    for (let i = 1; i <= cantidad; i++) {

        buscarpokemon(i);
    }

}
function buscarTipos(tipoIngles) {
    for (let i = 0; i < tiposArray.length; i++) {
        if (tiposArray[i][0] == tipoIngles) {
            return tiposArray[i][1];
        }
    }
}
function buscartiposcolor(tipoIngles) {
    for (let i = 0; i < tiposArray.length; i++) {
        if (tiposArray[i][0] == tipoIngles) {
            return tiposArray[i][2];
        }
    }
}



function crearPokemon(pokemon) {

    const tarjeta = document.createElement('div');
    tarjeta.classList.add('col-11', 'col-sm-5', 'col-lg-3', 'tarjeta');

    //crear imagen
    const sprite = document.createElement('div');
    sprite.classList.add('img-sprite', 'justify-content-center', 'col-5', 'col-md-12');
    const spriteImg = document.createElement('img');
    spriteImg.src = pokemon.sprites.front_default;
    sprite.appendChild(spriteImg);

    //crear nombre
    const nombre = document.createElement('div');
    nombre.classList.add('col-12');
    nombre.textContent = "#" + pokemon.id.toString().padStart(3, 0) + " " + pokemon.species.name;
    //tarjeta.style.backgroundColor(pokemon.)

    //tipos
    const tipos = document.createElement('div');
    tipos.classList.add('col-12');
    let txtTipos = buscarTipos(pokemon.types[0].type.name);

    if (pokemon.types[1]) {
        txtTipos += " / " + buscarTipos(pokemon.types[1].type.name);
        let estilo = "-webkit-linear-gradient(45deg,"
            + buscartiposcolor(pokemon.types[0].type.name) + " 50%,"
            + buscartiposcolor(pokemon.types[1].type.name) + " 50%)";
        tarjeta.style.setProperty("background", estilo);
    } else {
        tarjeta.style.backgroundColor = buscartiposcolor(pokemon.types[0].type.name);
    }

    tipos.textContent = txtTipos;

    const row = document.createElement('div');
    row.classList.add('row');

    const datos = document.createElement('div');
    datos.classList.add('datos', 'col-6', 'col-md-12');


    row.appendChild(sprite);

    datos.appendChild(nombre);
    datos.appendChild(tipos);
    row.appendChild(datos);

    tarjeta.appendChild(row);
    pokemonContainer.appendChild(tarjeta);

}

multiplespokemons(9);