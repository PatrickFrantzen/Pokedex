let firstPokemon;
let url = 'https://pokeapi.co/api/v2/pokemon?limit=150&offset=0';


async function loadFirstPokemon() {
    response = await fetch(url);
    firstPokemon = await response.json();
    loadSinglePokemon(firstPokemon);
    console.log(firstPokemon);
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
    let id = i + 1;
    let name = Pokemon.name[0].toUpperCase() + Pokemon.name.slice(1);
    let number = Pokemon.id;
    let picture = Pokemon.sprites['front_default'];
    let type1 = getTypeOneOf(Pokemon);
    let type2 = getTypeTwoOf(Pokemon);
    let type1ID = `${number}${type1}${name}`
    let type2ID = `${number}${type2}${name}`
    renderPokedex(id, name, number, picture, type1, type2, type1ID, type2ID);
}

function getTypeOneOf(Pokemon) {
    return Pokemon.types[0].type.name[0].toUpperCase() + Pokemon.types[0].type.name.slice(1);
}
function getTypeTwoOf(Pokemon) {
    if (Pokemon.types.length == 2) {
        return Pokemon.types[1].type.name[0].toUpperCase() + Pokemon.types[1].type.name.slice(1);
    } else {
        return '';
    }
}

function renderPokedex(i, name, number, picture, type1, type2, type1ID, type2ID) {
    document.getElementById('pokedex').innerHTML += renderPokedexItem(i, name, number, picture, type1, type2, type1ID, type2ID);
    typeColor(i, type1, type2, type1ID, type2ID);
}


async function openDetails(number) {
    singleResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${number}/`);
    let currentPokemon = await singleResponse.json();
    loadDialogInfos(currentPokemon);
    document.getElementById('dialog-bg').classList.remove('d-none');
}

async function search() {
    let search = document.getElementById('searchbar').value;
    search = search.toString().toLowerCase();
    let searchResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${search}/`);
    let searchPokemon = await searchResponse.json();
    loadDialogInfos(searchPokemon);
    document.getElementById('dialog-bg').classList.remove('d-none');
    document.getElementById('searchbar').value = '';
}

function loadDialogInfos(currentPokemon)  {
    let name = currentPokemon.name[0].toUpperCase() + currentPokemon.name.slice(1);
    let number = currentPokemon.id;
    let apiheight = currentPokemon.height;
    let height = apiheight / 10;
    let apiweight = currentPokemon.weight;
    let weight = apiweight / 10;
    let picture = currentPokemon.sprites['front_default'];
    let type1 = getTypeOneOf(currentPokemon);
    let type2 = getTypeTwoOf(currentPokemon);
    let HP = currentPokemon.stats[0].stat.name;
    let HPvalue = currentPokemon.stats[0].base_stat;
    let Att = currentPokemon.stats[1].stat.name;
    let Attvalue = currentPokemon.stats[1].base_stat;
    let Def = currentPokemon.stats[2].stat.name;
    let Defvalue = currentPokemon.stats[2].base_stat;
    let SpA = currentPokemon.stats[3].stat.name;
    let SpAvalue = currentPokemon.stats[3].base_stat;
    let SpD = currentPokemon.stats[4].stat.name;
    let SpDvalue = currentPokemon.stats[4].base_stat;
    let Speed = currentPokemon.stats[5].stat.name;
    let Speedvalue = currentPokemon.stats[5].base_stat;
    let type1ID = 'display-'+`${number}${type1}`;
    let type2ID = 'display-'+`${number}${type2}`;
    document.getElementById('upper-dialog').innerHTML = renderDialog(name, number, height, weight, picture, type1, type2, HP, HPvalue, Att, Attvalue, Def, Defvalue, SpA, SpAvalue, SpD, SpDvalue, Speed, Speedvalue, type1ID, type2ID);
    typeColor(number, type1, type2, type1ID, type2ID);
}

function closeDialog() {
    document.getElementById('dialog-bg').classList.add('d-none');
}

function swapLeft(i) {
    let swapLeft = ifSwapLeft(i);
    openDetails(swapLeft);
}
//Funktion zum Wechseln des Pokedex-Eintrags nach rechts
function swapRight(i) {
    let swapRight = ifSwapRight(i);
    openDetails(swapRight);
}

//Funktion zum Wechseln des Pokedex-Eintrags nach links
function ifSwapLeft(i) {
    if (i == 1) {
        i = firstPokemon.results.length;
    } else {
        i = i - 1;
    }
    return i;
}

function ifSwapRight(i) {
    if (i >= firstPokemon.results.length) {
        i = 1;
    } else {
        i = i + 1;
    }
    return i;
}

