let firstPokemon; //Variable für die ersten 20 Pokemon, die per API geladen werden
let url = 'https://pokeapi.co/api/v2/pokemon';

async function loadFirstPokemon() {
    response = await fetch(url);
    let firstPokemon = await response.json();
    loadSinglePokemon(firstPokemon);
}

async function loadSinglePokemon(firstPokemon) {
    let singlePokemon = firstPokemon.results;
    console.log(singlePokemon);
    for (let i = 0; i < singlePokemon.length; i++) {
        let responsePokemon = await fetch(singlePokemon[i].url);
        let Pokemon = await responsePokemon.json();
        console.log(Pokemon);
        loadSinglePokemonInfos(Pokemon);
    }
 
}

function loadSinglePokemonInfos(Pokemon) {
    let name = Pokemon.name;
    let number = Pokemon.id;
    let height = Pokemon.height;
    let weight = Pokemon.weight;
    let picture = Pokemon.sprites['front_default'];
    getStatsOf(Pokemon);
    let types = getTypesOf(Pokemon);
    renderPokedex(name, number, height, weight, picture, types);
    
    
}

function getStatsOf(Pokemon) {
    for (let i = 0; i < Pokemon['stats'].length; i++) {
        let stat_name = Pokemon.stats[i].stat.name;
        let stat_value = Pokemon.stats[i].base_stat;
        document.getElementById('stats').innerHTML += Stats(stat_name, stat_value); // Stats werden auf der Startseit nicht benötigt, erst im Pop-Up
    }
}

function Stats(stat_name, stat_value) {
    return `
    <div>${stat_name}</div>
    <div>${stat_value}</div>
    `
}

function getTypesOf(Pokemon) {
    for (let i = 0; i < Pokemon['types'].length; i++) {
        return Pokemon.types[i].type.name;
    }
}

function renderPokedex(name, number, height, weight, picture, types) {
    document.getElementById('pokedex').innerHTML += renderPokedexItem(name, number, height, weight, picture, types);
    
}

function renderPokedexItem(name, number, height, weight, picture, stats, types) {
    return `
    <div>${name}</div>
    <div># ${number}</div>
    <div>${height} m</div>
    <div>${weight}</div>
    <div>${picture}</div>
    
    <div>${types}</div>
    `
    
}

// Daten werden korrekt gezogen. Umsetzung der Startseite mit Bild und Infos kann umgesetzt werden
