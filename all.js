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
        let responsePokemon = await fetch(singlePokemon[i].url);
        let Pokemon = await responsePokemon.json();
        loadSinglePokemonInfos(Pokemon)
        console.log(Pokemon);
    }
    /*renderPokemon(Pokemon);*/
}

function loadSinglePokemonInfos(Pokemon) {
    let name = Pokemon.name;
    let number = Pokemon.id;
    let height = Pokemon.height;
    let weight = Pokemon.weight;
    let picture = Pokemon.sprites['front_default'];
    let stats = getStatsOf(Pokemon);
    let types = getTypesOf(Pokemon);
}

function getStatsOf(Pokemon) {
    for (let i = 0; i < Pokemon['stats'].length; i++) {
        let stat_name = Pokemon.stats[i].stat.name;
        let stat_value = Pokemon.stats[i].base_stat;
    }
}

function getTypesOf(Pokemon) {
    for (let i = 0; i < Pokemon['types'].length; i++) {
        return Pokemon.types[i].type.name;
    }
}


/*function renderPokemon(Pokemon) {
    document.getElementById('Pokedex').innerHTML += createPokedexItem();
}

function createPokedexItem() {
    return`
    <h1 id="pokemon-name"></h1>
    <img id="pokemon-pic" src="">
    <div id="pokemon-stats"></div>
    `
}*/

//Nächster Punkt per Pokemon_url auf die Details des einzelnen Pokemon zugreifen