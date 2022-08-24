let firstPokemon; //Variable für die ersten 20 Pokemon, die per API geladen werden
let url = 'https://pokeapi.co/api/v2/pokemon';

async function loadFirstPokemon() {
    response = await fetch(url);
    let firstPokemon = await response.json();
    loadSinglePokemon(firstPokemon);
}

async function loadSinglePokemon(firstPokemon) {
    let singlePokemon = firstPokemon.results;
    for (let i = 0; i < singlePokemon.length; i++) {
        let responsePokemon = await fetch(singlePokemon[i].url);
        let Pokemon = await responsePokemon.json();
        loadSinglePokemonInfos(i, Pokemon);
    }

}

function loadSinglePokemonInfos(i, Pokemon) {
    let name = Pokemon.name[0].toUpperCase() + Pokemon.name.slice(1);
    let number = Pokemon.id;
    let height = Pokemon.height;
    let weight = Pokemon.weight;
    let picture = Pokemon.sprites['front_default'];
    getStatsOf(Pokemon);
    let type1 = getTypeOneOf(Pokemon);
    let type2 =getTypeTwoOf(Pokemon);
    renderPokedex(i, name, number, picture, type1, type2);


}

function getStatsOf(Pokemon) {
    for (let i = 0; i < Pokemon['stats'].length; i++) {
        let stat_name = Pokemon.stats[i].stat.name;
        let stat_value = Pokemon.stats[i].base_stat;
        /*document.getElementById('stats').innerHTML += Stats(stat_name, stat_value);*/// Stats werden auf der Startseit nicht benötigt, erst im Pop-Up
    }
}

function Stats(stat_name, stat_value) {
    return `
    <div>${stat_name}</div>
    <div>${stat_value}</div>
    `
}

function getTypeOneOf(Pokemon) {
        return Pokemon.types[0].type.name[0].toUpperCase() + Pokemon.types[0].type.name.slice(1);
}
function getTypeTwoOf(Pokemon) {
    if (Pokemon.types.length == 2) { //mit Länge des Arrays arabeiten?
        return Pokemon.types[1].type.name[0].toUpperCase() + Pokemon.types[1].type.name.slice(1);
    } else {
     return '';   
    }
}

function renderPokedex(i, name, number, picture, type1, type2) {
    document.getElementById('pokedex').innerHTML += renderPokedexItem(i, name, number, picture, type1, type2);
    typeColor(number, type1, type2);
}

function renderPokedexItem(i, name, number, picture, type1, type2) {
    return `
    <li class="list-group-item">
    <div><b># ${number}</b></div>
    <img src="${picture}">
    <div><b>${name}</b></div>
    <div id="${number}${type1}" class="type">${type1}</div>
    <div id="${number}${type2}" class="type">${type2}</div>
    </li>
    `
}


function typeColor(i, type1, type2) {
    typeColorGrass(i, type1, type2);
    typeColorFire(i, type1, type2);
    typeColorWater(i, type1, type2);
    typeColorBug(i, type1, type2);
    typeColorNormal(i, type1, type2);
    typeColorPoison(i, type1, type2);
}

function typeColorGrass(number, type1, type2) {
    if (type1 == 'Grass') {
        document.getElementById(`${number}${type1}`).classList.add('grass');
    }

    if (type2 == 'Poison') {
        document.getElementById(`${number}${type2}`).classList.add('poison');
    }

    if (type2 == '') {
        document.getElementById(`${number}${type2}`).classList.add('b-none');
    }
}

function typeColorFire(number, type1, type2) {
    if (type1 == 'Fire') {
        document.getElementById(`${number}${type1}`).classList.add('fire');
    }

    if (type2 == '') {
        document.getElementById(`${number}${type2}`).classList.add('b-none');
    }

    if (type2 == 'Flying') {
        document.getElementById(`${number}${type2}`).classList.add('flying');
    }
}

function typeColorWater(number, type1, type2) {
    if (type1 == 'Water') {
        document.getElementById(`${number}${type1}`).classList.add('water');
    }

    if (type2 == '') {
        document.getElementById(`${number}${type2}`).classList.add('b-none');
    }
}

function typeColorBug(number, type1, type2) {
    if (type1 == 'Bug') {
        document.getElementById(`${number}${type1}`).classList.add('bug');
    }

    if (type2 == '') {
        document.getElementById(`${number}${type2}`).classList.add('b-none');
    }
}

function typeColorNormal(number, type1, type2) {
    if (type1 == 'Normal') {
        document.getElementById(`${number}${type1}`).classList.add('normal');
    }

    if (type2 == '') {
        document.getElementById(`${number}${type2}`).classList.add('b-none');
    }
}

function typeColorPoison(number, type1, type2) {
    if (type1 == 'Poison') {
        document.getElementById(`${number}${type1}`).classList.add('poison');
    }

    if (type2 == '') {
        document.getElementById(`${number}${type2}`).classList.add('b-none');
    }
}

// Daten werden korrekt gezogen. Umsetzung der Startseite mit Bild und Infos kann umgesetzt werden 
