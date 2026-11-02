async function setup() {
    console.log("p5 called this function");
    createCanvas(600,600);

    background(255,0,0);

    let pokemonData = await getPokemon(1);
    console.log(pokemonData.sprites.front_default);
    pokemon = {
        x: 100,
        y: 200,
        img: createImg(pokemonData.sprites.front_default),
        id: 1
    }
}

function draw() {
    image(pokemon.img, pokemon.x, pokemon.y);
}