let firstPokemon; //Variable für die ersten 20 Pokemon, die per API geladen werden
let url = 'https://pokeapi.co/api/v2/pokemon';

async function loadFirstPokemon() {
    
    response = await fetch(url);
    let firstPokemon = await response.json();
    console.log(firstPokemon);
    loadSinglePokemon(firstPokemon);
}

async function loadSinglePokemon(firstPokemon) {
    let singlePokemon = firstPokemon.results;
    console.log(singlePokemon);
    for (let i = 0; i < singlePokemon.length; i++) {
        let Pokemon = singlePokemon[i];
        let Pokemon_url = Pokemon.url;
        console.log(Pokemon_url);
    }
}

//Nächster Punkt per Pokemon_url auf die Details des einzelnen Pokemon zugreifen