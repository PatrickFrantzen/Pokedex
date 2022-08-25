let firstPokemon; //Variable für die ersten 20 Pokemon, die per API geladen werden
let url = 'https://pokeapi.co/api/v2/pokemon?limit=150&offset=0';


async function loadFirstPokemon() {
    response = await fetch(url);
    let firstPokemon = await response.json();
    loadSinglePokemon(firstPokemon);
    console.log(firstPokemon);
}

async function loadSinglePokemon(firstPokemon) {
    let singlePokemon = firstPokemon.results;
    for (let i = 0; i < singlePokemon.length; i++) {
        let responsePokemon = await fetch(singlePokemon[i].url);
        let Pokemon = await responsePokemon.json();
        /*console.log(Pokemon);*/
        /*getStats(Pokemon);*/

        loadSinglePokemonInfos(i, Pokemon);
    }

}

    

function loadSinglePokemonInfos(i, Pokemon) {
    let name = Pokemon.name[0].toUpperCase() + Pokemon.name.slice(1);
    let number = Pokemon.id;
    let height = Pokemon.height;
    let weight = Pokemon.weight;
    let picture = Pokemon.sprites['front_default'];
    let type1 = getTypeOneOf(Pokemon);
    let type2 = getTypeTwoOf(Pokemon);
    let HP = Pokemon.stats[0].stat.name;
    let HPvalue = Pokemon.stats[0].base_stat;
    let Att = Pokemon.stats[1].stat.name;
    let Attvalue = Pokemon.stats[1].base_stat;
    let Def = Pokemon.stats[2].stat.name;
    let Defvalue = Pokemon.stats[2].base_stat;
    let SpA = Pokemon.stats[3].stat.name;
    let SpAvalue = Pokemon.stats[3].base_stat;
    let SpD = Pokemon.stats[4].stat.name;
    let SpDvalue = Pokemon.stats[4].base_stat;
    let Speed = Pokemon.stats[5].stat.name;
    let Speedvalue = Pokemon.stats[5].base_stat;
    renderPokedex(i, name, number, height, weight, picture, type1, type2, HP, HPvalue, Att, Attvalue, Def, Defvalue, SpA, SpAvalue, SpD, SpDvalue, Speed, Speedvalue);
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

function renderPokedex(i, name, number, height, weight, picture, type1, type2, HP, HPvalue, Att, Attvalue, Def, Defvalue, SpA, SpAvalue, SpD, SpDvalue, Speed, Speedvalue) {
    document.getElementById('pokedex').innerHTML += renderPokedexItem(i, name, number, height, weight, picture, type1, type2, HP, HPvalue, Att, Attvalue, Def, Defvalue, SpA, SpAvalue, SpD, SpDvalue, Speed, Speedvalue);
    typeColor(number, type1, type2);
}

function renderPokedexItem(i, name, number, height, weight, picture, type1, type2, HP, HPvalue, Att, Attvalue, Def, Defvalue, SpA, SpAvalue, SpD, SpDvalue, Speed, Speedvalue) {
    return `
    <li class="list-group-item" onclick="openDetails('${i}', '${name}', '${number}', '${height}', '${weight}', '${picture}', '${type1}', '${type2}', '${HP}', '${HPvalue}', '${Att}', '${Attvalue}', '${Def}', '${Defvalue}', '${SpA}', '${SpAvalue}', '${SpD}', '${SpDvalue}', '${Speed}', '${Speedvalue}')">
    <div><b># ${number}</b></div>
    <img src="${picture}">
    <div><b>${name}</b></div>
    <div id="${number}${type1}" class="type">${type1}</div>
    <div id="${number}${type2}" class="type">${type2}</div>
    </li>
    `
}

function openDetails(i, name, number, height, weight, picture, type1, type2, HP, HPvalue, Att, Attvalue, Def, Defvalue, SpA, SpAvalue, SpD, SpDvalue, Speed, Speedvalue) {
    document.getElementById('dialog-bg').classList.remove('d-none');
    document.getElementById('upper-dialog').innerHTML = renderDialog(i, name, number, height, weight, picture, type1, type2, HP, HPvalue, Att, Attvalue, Def, Defvalue, SpA, SpAvalue, SpD, SpDvalue, Speed, Speedvalue);
}

function renderDialog(i, name, number, height, weight, picture, type1, type2, HP, HPvalue, Att, Attvalue, Def, Defvalue, SpA, SpAvalue, SpD, SpDvalue, Speed, Speedvalue) {
    return `
    <div>
        <div># ${number}<div>
        <div>${name}<div>
        <div>${height} m<div>
        <div>${weight} kg<div>
        <img src="${picture}">
        <div>${type1}<div>
        <div>${type2}<div>
        <div>${HP}<div><div>${HPvalue}<div>
        <div>${Att}<div><div>${Attvalue}<div>
        <div>${Def}<div><div>${Defvalue}<div>
        <div>${SpA}<div><div>${SpAvalue}<div>
        <div>${SpD}<div><div>${SpDvalue}<div>
        <div>${Speed}<div><div>${Speedvalue}<div>
    </div>
    `
}


function typeColor(number, type1, type2) {
    typeColorGrass(number, type1, type2);
    typeColorFire(number, type1, type2);
    typeColorWater(number, type1, type2);
    typeColorBug(number, type1, type2);
    typeColorNormal(number, type1, type2);
    typeColorPoison(number, type1, type2);
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