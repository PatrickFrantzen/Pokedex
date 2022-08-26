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
    let name = Pokemon.name[0].toUpperCase() + Pokemon.name.slice(1);
    let number = Pokemon.id;
    let picture = Pokemon.sprites['front_default'];
    let type1 = getTypeOneOf(Pokemon);
    let type2 = getTypeTwoOf(Pokemon);
    let type1ID = `${number}${type1}`
    let type2ID = `${number}${type2}`
    renderPokedex(i, name, number, picture, type1, type2, type1ID, type2ID);
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
    typeColor(type1, type2, type1ID, type2ID);
}

function renderPokedexItem(i, name, number,picture, type1, type2, type1ID, type2ID) {
    return `
    <li id="${i}" class="list-group-item" onclick="openDetails('${number}')">
    <div><b># ${number}</b></div>
    <img src="${picture}">
    <div><b>${name}</b></div>
    <div id="${type1ID}" class="type">${type1}</div>
    <div id="${type2ID}" class="type">${type2}</div>
    </li>
    `
}

async function openDetails(number) {
    singleResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${number}/`);
    let currentPokemon = await singleResponse.json();
    loadDialogInfos(currentPokemon);
    document.getElementById('dialog-bg').classList.remove('d-none');
}

function loadDialogInfos(currentPokemon)  {
    let name = currentPokemon.name[0].toUpperCase() + currentPokemon.name.slice(1);
    let number = currentPokemon.id;
    let height = currentPokemon.height;
    let weight = currentPokemon.weight;
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
    typeColor(type1, type2, type1ID, type2ID);
}

function renderDialog(name, number, height, weight, picture, type1, type2, HP, HPvalue, Att, Attvalue, Def, Defvalue, SpA, SpAvalue, SpD, SpDvalue, Speed, Speedvalue, type1ID, type2ID) {
    return `
    <div>
    <nav class="navbar bg-light">
        <div class="container-fluid display-nav">
            <span class="navbar-brand mb-0 h1">Pokemon-Infos</span>
            <span class="navbar-brand mb-0 h1">Pokemon-Details</span>
        </div>
    </nav>
    <div class="display-cards">
        <div class="button-line">
            <img class="button-style" onclick="swapLeft(${number})" src="img/left_arrow.png"></img>
            <img onclick="closeDialog()" class="button-style" src="img/close.png"></img>
            <img class="button-style" onclick="swapRight(${number})" src="img/right_arrow.png"></img></div>
        </div>
        <div class="upper-display">
            <div class="card" style="width: 50%;">
                <div class="card-body display-pic">
                    <h5 class="card-title">${name}</h5>
                    <img src="${picture}">
                </div>
            </div>
            <div class="card" style="width: 50%;">
                <div class="card-body display-infos">
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item">Nr.</li>
                        <li class="list-group-item">${number}</li>
                    </ul>
                    <ul class="list-group list-group-horizontal-sm">
                        <li class="list-group-item">Gewicht</li>
                        <li class="list-group-item">${weight} kg</li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item">Größe</li>
                        <li class="list-group-item">${height} m</li>
                    </ul>
                    <ul class="list-group list-group-horizontal-sm">
                        <li class="list-group-item">Typ 1</li>
                        <li id ="${type1ID}" class="list-group-item">${type1}</li>
                    </ul>
                    <ul class="list-group list-group-horizontal-sm">
                        <li class="list-group-item">Typ 2</li>
                        <li id ="${type2ID}" class="list-group-item">${type2}</li>
                    </ul>
                </div>
            </div>
        </div>
            <div class="card" style="width: 100%;">
                <div class="card-body display-stats">
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item">${HP}</li>
                        <li class="list-group-item">${HPvalue}</li>
                    </ul>
                    <ul class="list-group list-group-horizontal-sm">
                        <li class="list-group-item">${Att}</li>
                        <li class="list-group-item">${Attvalue}</li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item">${Def}</li>
                        <li class="list-group-item">${Defvalue}</li>
                    </ul>
                    <ul class="list-group list-group-horizontal-sm">
                        <li class="list-group-item">${SpA}</li>
                        <li class="list-group-item">${SpAvalue}</li>
                    </ul>
                    <ul class="list-group list-group-horizontal-sm">
                        <li class="list-group-item">${SpD}</li>
                        <li class="list-group-item">${SpDvalue}</li>
                    </ul>
                    <ul class="list-group list-group-horizontal-sm">
                        <li class="list-group-item">${Speed}</li>
                        <li class="list-group-item">${Speedvalue}</li>
                    </ul>
                </div>     
            </div>
        </div>
    </div>
</div>
    `
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