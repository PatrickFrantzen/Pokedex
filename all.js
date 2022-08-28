let firstPokemon;
let url = 'https://pokeapi.co/api/v2/pokemon?limit=150&offset=0';

//Funktion, um alle 150 Pokemon zu laden.
async function loadFirstPokemon() {
    response = await fetch(url);
    firstPokemon = await response.json();
    loadSinglePokemon(firstPokemon);
    console.log(firstPokemon);
}

//Funktion, um die Informationen von jedem einzelnen Pokemon aus dem API Array zu laden.
async function loadSinglePokemon(firstPokemon) {
    let singlePokemon = firstPokemon.results;
    for (let i = 0; i < singlePokemon.length; i++) {
        let responsePokemon = await fetch(singlePokemon[i].url);
        let Pokemon = await responsePokemon.json();
        loadSinglePokemonInfos(i, Pokemon);
    }
}

//Funktion, um die Variablen zu benennen und mit den Informationen aus dem Array zu füllen. Anschließend wird die Funktion zum Rendern des Pokedex ausgeführt..
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

//Hilfsfunktion um den ersten Typ des Pokemons zu bestimmen.
function getTypeOneOf(Pokemon) {
    return Pokemon.types[0].type.name[0].toUpperCase() + Pokemon.types[0].type.name.slice(1);
}

//Funktion, um den zweiten Typ, wenn vorhanden, zu bestimmen.
function getTypeTwoOf(Pokemon) {
    if (Pokemon.types.length == 2) {
        return Pokemon.types[1].type.name[0].toUpperCase() + Pokemon.types[1].type.name.slice(1);
    } else {
        return '';
    }
}

//Funktion um den einzelnen Pokedexeintrag zu erstellen sowie um anschließend das Typ-Feld zu colorieren.
function renderPokedex(i, name, number, picture, type1, type2, type1ID, type2ID) {
    document.getElementById('pokedex').innerHTML += renderPokedexItem(i, name, number, picture, type1, type2, type1ID, type2ID);
    typeColor(i, type1, type2, type1ID, type2ID);
}

//Funktion um beim Klicken das Dialog-Feld mit den Details des angeklickten Pokemons zu öffnen.
async function openDetails(number) {
    singleResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${number}/`);
    let currentPokemon = await singleResponse.json();
    loadDialogInfos(currentPokemon);
    document.getElementById('dialog-bg').classList.remove('d-none');
}

//Suchfunktion um anschließend wieder das Dialog-Feld zu öffnen.
async function search() {
    let search = document.getElementById('searchbar').value;
    if (search >=151) {
        alert("This is a Pokedex of Generation 1 Pokemon. Please insert a number below 151.");
    } else {
    search = search.toString().toLowerCase();
    let searchResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${search}/`);
    let searchPokemon = await searchResponse.json();
    loadDialogInfos(searchPokemon);
    document.getElementById('dialog-bg').classList.remove('d-none');
    document.getElementById('searchbar').value = '';
    }
    
}

//Funktion, um die Variablen der Infos zu befüllen, anschließend wird die Funktion für die Stats ausgeführt.
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
    loadDialogStats(currentPokemon, name, number, height, weight, picture, type1, type2);
}

//Funktion um die Variablen der Stats zu befüllen, anschließend wird das Dialogfeld gerendert sowie der Hintergrund des Dialogfeldes bestimmt
function loadDialogStats (currentPokemon, name, number, height, weight, picture, type1, type2) {
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
    document.getElementById('dialog-bg').innerHTML = renderDialog(name, number, height, weight, picture, type1, type2, HP, HPvalue, Att, Attvalue, Def, Defvalue, SpA, SpAvalue, SpD, SpDvalue, Speed, Speedvalue, type1ID, type2ID);
    dialogBackgroundColor(type1, name);
}

//Funktion um den Dialog zu schließen
function closeDialog() {
    document.getElementById('dialog-bg').classList.add('d-none');
}
//Funktion zum Wechseln des Pokedex-Eintrags nach links
function swapLeft(i) {
    let swapLeft = ifSwapLeft(i);
    openDetails(swapLeft);
}
//Funktion zum Wechseln des Pokedex-Eintrags nach rechts
function swapRight(i) {
    let swapRight = ifSwapRight(i);
    openDetails(swapRight);
}

//Funktion um zu prüfen, ob links ein weiteres Pokemon ist oder ob auf das Ende des Pokedex gewechselt werden soll
function ifSwapLeft(i) {
    if (i == 1) {
        i = firstPokemon.results.length;
    } else {
        i = i - 1;
    }
    return i;
}

//Funktion um zu prüfen, ob rechts ein weiteres Pokemon ist oder ob auf den Anfang des Pokedex gewechselt werden soll
function ifSwapRight(i) {
    if (i >= firstPokemon.results.length) {
        i = 1;
    } else {
        i = i + 1;
    }
    return i;
}

