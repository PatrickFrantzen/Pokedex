/*let currentPokemon;

async function loadPokemon() {
    let url= 'https://pokeapi.co/api/v2/pokemon/charmander'
    response = await fetch(url);
    let currentPokemon = await response.json();
    console.log(currentPokemon);

    renderPokemonInfo(currentPokemon);
}

function renderPokemonInfo(currentPokemon) {
    document.getElementById('pokemon-name').innerHTML = loadName(currentPokemon);
    document.getElementById('pokemon-pic').src = currentPokemon.sprites.front_default;
    renderStats(currentPokemon);
}

function loadName(currentPokemon) {
    return `
    # ${currentPokemon['order']} ${currentPokemon['name']};
    `
}

function renderStats(currentPokemon) {
    for (let i = 0; i < currentPokemon['stats'].length; i++) {
        let stats = currentPokemon['stats'][i];
        document.getElementById('pokemon-stats').innerHTML += loadStats(stats);

    }
}

function loadStats(stats) {
    return `
    <div>${stats.stat.name}</div> <div>${stats.base_stat}</div>
    `
}*/