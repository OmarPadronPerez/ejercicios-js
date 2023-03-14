console.log("en js");
const pokemonContainer = document.querySelector(".contenedor-pokemon");

function buscarpokemon(id) {
    fetch('https://pokeapi.co/api/v2/pokemon/' + id)
        .then((res) => res.json())
        .then((data) => {
            crearPokemon(data)
        });
}

function multiplespokemons(cantidad) {
    for (let i = 1; i <= cantidad; i++) {
        buscarpokemon(i);
    }

}

function crearPokemon(pokemon) {

    const tarjeta = document.createElement('div');
    tarjeta.classList.add('col-11', 'col-md-4', 'col-lg-3', 'tarjeta');

    //crear imagen
    const sprite = document.createElement('div');
    sprite.classList.add('img-sprite');
    const spriteImg = document.createElement('img');
    spriteImg.src = pokemon.sprites.front_default;
    sprite.appendChild(spriteImg);

    //crear nombre
    const nombre = document.createElement('div');
    nombre.classList.add('col-12');
    nombre.textContent = "#" + pokemon.id.toString().padStart(3, 0) + " " + pokemon.species.name;
    //tarjeta.style.backgroundColor(pokemon.)

    //tipos
    const tipos=document.createElement('div');
    tipos.classList.add('col-12');
    let txtTipos=pokemon.types[0].type.name;
    if(pokemon.types[1]){
        txtTipos+=" / "+pokemon.types[1].type.name
    }
    tipos.textContent=txtTipos;

    tarjeta.appendChild(sprite);
    tarjeta.appendChild(nombre);
    tarjeta.appendChild(tipos);

    pokemonContainer.appendChild(tarjeta);

}

multiplespokemons(9);