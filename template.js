
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

function renderDialog(name, number, height, weight, picture, type1, type2, HP, HPvalue, Att, Attvalue, Def, Defvalue, SpA, SpAvalue, SpD, SpDvalue, Speed, Speedvalue, type1ID, type2ID) {
    return `
    <div>
    <nav class="navbar">
        <div class="container-fluid display-nav">
            <span class="navbar-brand mb-0 h1">Pokemon-Infos</span>
        </div>
    </nav>
    <div class="display-cards">
        <div class="button-line">
            <img class="button-style" onclick="swapLeft(${number})" src="img/left_arrow.png"></img>
            <img onclick="closeDialog()" class="button-style" src="img/close.png"></img>
            <img class="button-style" onclick="swapRight(${number})" src="img/right_arrow.png"></img></div>
        </div>
        <div class="upper-display">
            <div class="card card-background" style="width: 50%;">
                <div class="card-body display-pic">
                    <h5 class="card-title">${name}</h5>
                    <img src="${picture}">
                </div>
            </div>
            <div class="card card-background" style="width: 50%;">
                <div class="card-body card-background display-infos">
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item card-background size-infos">No.</li>
                        <li class="list-group-item card-background size-infos">${number}</li>
                    </ul>
                    <ul class="list-group list-group-horizontal-sm">
                        <li class="list-group-item card-background size-infos">weight</li>
                        <li class="list-group-item card-background size-infos">${weight} kg</li>
                    </ul>
                    <ul class="list-group list-group-horizontal">
                        <li class="list-group-item card-background size-infos">height</li>
                        <li class="list-group-item card-background size-infos">${height} m</li>
                    </ul>
                    <ul class="list-group list-group-horizontal-sm">
                        <li class="list-group-item card-background size-infos">Typ 1</li>
                        <li id ="${type1ID}" class="list-group-item card-background size-infos">${type1}</li>
                    </ul>
                    <ul class="list-group list-group-horizontal-sm">
                        <li class="list-group-item card-background size-infos">Typ 2</li>
                        <li id ="${type2ID}" class="list-group-item card-background size-infos">${type2}</li>
                    </ul>
                </div>
            </div>
        </div>
            <div class="card card-background " style="width: 100%;">
                <div class="card-body card-background display-stats">
                    <ul class="list-group list-group-horizontal-sm text-align">
                        <li class="list-group-item card-background size-stats flex-start">${HP}</li>
                        <li class="list-group-item card-background size-stats">${HPvalue}</li>
                    </ul>
                    <ul class="list-group list-group-horizontal-sm text-align">
                        <li class="list-group-item card-background size-stats flex-start">${Att}</li>
                        <li class="list-group-item card-background size-stats">${Attvalue}</li>
                    </ul>
                    <ul class="list-group list-group-horizontal-sm text-align">
                        <li class="list-group-item card-background size-stats flex-start">${Def}</li>
                        <li class="list-group-item card-background size-stats">${Defvalue}</li>
                    </ul>
                    <ul class="list-group list-group-horizontal-sm text-align">
                        <li class="list-group-item card-background size-stats flex-start">${SpA}</li>
                        <li class="list-group-item card-background size-stats">${SpAvalue}</li>
                    </ul>
                    <ul class="list-group list-group-horizontal-sm text-align">
                        <li class="list-group-item card-background size-stats flex-start">${SpD}</li>
                        <li class="list-group-item card-background size-stats">${SpDvalue}</li>
                    </ul>
                    <ul class="list-group list-group-horizontal-sm text-align">
                        <li class="list-group-item card-background size-stats flex-start">${Speed}</li>
                        <li class="list-group-item card-background size-stats">${Speedvalue}</li>
                    </ul>
                </div>     
            </div>
        </div>
    </div>
</div>
    `
}


function typeColor(i, type1, type2, type1ID, type2ID) {
    typeColorGrass(i, type1, type2, type1ID, type2ID);
    typeColorFire(i, type1, type2, type1ID, type2ID);
    typeColorWater(i, type1, type2, type1ID, type2ID);
    typeColorBug(i, type1, type2, type1ID, type2ID);
    typeColorNormal(i, type1, type2, type1ID, type2ID);
    typeColorPoison(i, type1, type2, type1ID, type2ID);
    typeColorFlying(i, type1, type2, type1ID, type2ID);
    typeColorElectric(i, type1, type2, type1ID, type2ID);
    typeColorGround(i, type1, type2, type1ID, type2ID);
    typeColorFairy(i, type1, type2, type1ID, type2ID);
    typeColorFighting(i, type1, type2, type1ID, type2ID);
    typeColorPsychic(i, type1, type2, type1ID, type2ID);
    typeColorRock(i, type1, type2, type1ID, type2ID);
    typeColorSteel(i, type1, type2, type1ID, type2ID);
    typeColorIce(i, type1, type2, type1ID, type2ID);
    typeColorGhost(i, type1, type2, type1ID, type2ID);
    typeColorDragon(i, type1, type2, type1ID, type2ID);
    if (type2 == '') {
        document.getElementById(`${type2ID}`).classList.add('b-none');
        document.getElementById(`${type2ID}`).classList.add('shadow-none');
    }
}

function typeColorGrass(i, type1, type2, type1ID, type2ID) {
    if (type1 == 'Grass') {
        document.getElementById(`${type1ID}`).classList.add('grass');
        document.getElementById(`${i}`).classList.add('background-grass');
    }

    if (type2 == 'Grass') {
        document.getElementById(`${type2ID}`).classList.add('grass');
    }
}

function typeColorFire(i, type1, type2, type1ID, type2ID) {
    if (type1 == 'Fire') {
        document.getElementById(`${type1ID}`).classList.add('fire');
        document.getElementById(`${i}`).classList.add('background-fire');
    }

    if (type2 == 'Fire') {
        document.getElementById(`${type2ID}`).classList.add('b-none');
    }
}

function typeColorWater(i, type1, type2, type1ID, type2ID) {
    if (type1 == 'Water') {
        document.getElementById(`${type1ID}`).classList.add('water');
        document.getElementById(`${i}`).classList.add('background-water');
    }

    if (type2 == 'Water') {
        document.getElementById(`${type2ID}`).classList.add('water');
    }
}

function typeColorBug(i, type1, type2, type1ID, type2ID) {
    if (type1 == 'Bug') {
        document.getElementById(`${type1ID}`).classList.add('bug');
        document.getElementById(`${i}`).classList.add('background-bug');
    }

    if (type2 == 'Bug') {
        document.getElementById(`${type2ID}`).classList.add('bug');
    }
}

function typeColorNormal(i, type1, type2, type1ID, type2ID) {
    if (type1 == 'Normal') {
        document.getElementById(`${type1ID}`).classList.add('normal');
        document.getElementById(`${i}`).classList.add('background-normal');
    }

    if (type2 == 'Normal') {
        document.getElementById(`${type2ID}`).classList.add('normal');
    }
}

function typeColorPoison(i, type1, type2, type1ID, type2ID) {
    if (type1 == 'Poison') {
        document.getElementById(`${type1ID}`).classList.add('poison');
        document.getElementById(`${i}`).classList.add('background-poison');
    }

    if (type2 == 'Poison') {
        document.getElementById(`${type2ID}`).classList.add('poison');
    }
}

function typeColorFlying(i, type1, type2, type1ID, type2ID) {
    if (type1 == 'Flying') {
        document.getElementById(`${type1ID}`).classList.add('flying');
        document.getElementById(`${i}`).classList.add('background-flying');
    }

    if (type2 == 'Flying') {
        document.getElementById(`${type2ID}`).classList.add('flying');
    }
}

function typeColorElectric(i, type1, type2, type1ID, type2ID) {
    if (type1 == 'Electric') {
        document.getElementById(`${type1ID}`).classList.add('electric');
        document.getElementById(`${i}`).classList.add('background-electric');
    }

    if (type2 == 'Electric') {
        document.getElementById(`${type2ID}`).classList.add('electric');
    }
}

function typeColorGround(i, type1, type2, type1ID, type2ID) {
    if (type1 == 'Ground') {
        document.getElementById(`${type1ID}`).classList.add('ground');
        document.getElementById(`${i}`).classList.add('background-ground');
    }

    if (type2 == 'Ground') {
        document.getElementById(`${type2ID}`).classList.add('ground');
    }
}

function typeColorFairy(i, type1, type2, type1ID, type2ID) {
    if (type1 == 'Fairy') {
        document.getElementById(`${type1ID}`).classList.add('fairy');
        document.getElementById(`${i}`).classList.add('background-fairy');
    }

    if (type2 == 'Fairy') {
        document.getElementById(`${type2ID}`).classList.add('fairy');
    }
}

function typeColorFighting(i, type1, type2, type1ID, type2ID) {
    if (type1 == 'Fighting') {
        document.getElementById(`${type1ID}`).classList.add('fighting');
        document.getElementById(`${i}`).classList.add('background-fighting');
    }

    if (type2 == 'Fighting') {
        document.getElementById(`${type2ID}`).classList.add('fighting');
    }
}

function typeColorPsychic(i, type1, type2, type1ID, type2ID) {
    if (type1 == 'Psychic') {
        document.getElementById(`${type1ID}`).classList.add('psychic');
        document.getElementById(`${i}`).classList.add('background-psychic');
    }

    if (type2 == 'Psychic') {
        document.getElementById(`${type2ID}`).classList.add('psychic');
    }
}

function typeColorRock(i, type1, type2, type1ID, type2ID) {
    if (type1 == 'Rock') {
        document.getElementById(`${type1ID}`).classList.add('rock');
        document.getElementById(`${i}`).classList.add('background-rock');
    }

    if (type2 == 'Rock') {
        document.getElementById(`${type2ID}`).classList.add('rock');
    }
}

function typeColorSteel(i, type1, type2, type1ID, type2ID) {
    if (type1 == 'Steel') {
        document.getElementById(`${type1ID}`).classList.add('steel');
        document.getElementById(`${i}`).classList.add('background-steel');
    }

    if (type2 == 'Steel') {
        document.getElementById(`${type2ID}`).classList.add('steel');
    }
}

function typeColorIce(i, type1, type2, type1ID, type2ID) {
    if (type1 == 'Ice') {
        document.getElementById(`${type1ID}`).classList.add('ice');
        document.getElementById(`${i}`).classList.add('background-ice');
    }

    if (type2 == 'Ice') {
        document.getElementById(`${type2ID}`).classList.add('ice');
    }
}

function typeColorGhost(i, type1, type2, type1ID, type2ID) {
    if (type1 == 'Ghost') {
        document.getElementById(`${type1ID}`).classList.add('ghost');
        document.getElementById(`${i}`).classList.add('background-ghost');
    }

    if (type2 == 'Ghost') {
        document.getElementById(`${type2ID}`).classList.add('ghost');
    }
}

function typeColorDragon(i, type1, type2, type1ID, type2ID) {
    if (type1 == 'Dragon') {
        document.getElementById(`${type1ID}`).classList.add('dragon');
        document.getElementById(`${i}`).classList.add('background-dragon');
    }

    if (type2 == 'Dragon') {
        document.getElementById(`${type2ID}`).classList.add('dragon');
    }
}