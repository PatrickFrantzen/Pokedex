function typeColor(type1, type2, type1ID, type2ID) {
    typeColorGrass(type1, type2, type1ID, type2ID);
    typeColorFire(type1, type2, type1ID, type2ID);
    typeColorWater(type1, type2, type1ID, type2ID);
    typeColorBug(type1, type2, type1ID, type2ID);
    typeColorNormal(type1, type2, type1ID, type2ID);
    typeColorPoison(type1, type2, type1ID, type2ID);
    typeColorFlying(type1, type2, type1ID, type2ID);
    typeColorElectric(type1, type2, type1ID, type2ID);
    typeColorGround(type1, type2, type1ID, type2ID);
    typeColorFairy(type1, type2, type1ID, type2ID);
    typeColorFighting(type1, type2, type1ID, type2ID);
    typeColorPsychic(type1, type2, type1ID, type2ID);
    typeColorRock(type1, type2, type1ID, type2ID);
    typeColorSteel(type1, type2, type1ID, type2ID);
    typeColorIce(type1, type2, type1ID, type2ID);
    typeColorGhost(type1, type2, type1ID, type2ID);
    typeColorDragon(type1, type2, type1ID, type2ID);
    if (type2 == '') {
        document.getElementById(`${type2ID}`).classList.add('b-none');
    }
}

function typeColorGrass(type1, type2, type1ID, type2ID) {
    if (type1 == 'Grass') {
        document.getElementById(`${type1ID}`).classList.add('grass');
    }

    if (type2 == 'Grass') {
        document.getElementById(`${type2ID}`).classList.add('grass');
    }
}

function typeColorFire(type1, type2, type1ID, type2ID) {
    if (type1 == 'Fire') {
        document.getElementById(`${type1ID}`).classList.add('fire');
    }

    if (type2 == 'Fire') {
        document.getElementById(`${type2ID}`).classList.add('b-none');
    }
}

function typeColorWater(type1, type2, type1ID, type2ID) {
    if (type1 == 'Water') {
        document.getElementById(`${type1ID}`).classList.add('water');
    }

    if (type2 == 'Water') {
        document.getElementById(`${type2ID}`).classList.add('water');
    }
}

function typeColorBug(type1, type2, type1ID, type2ID) {
    if (type1 == 'Bug') {
        document.getElementById(`${type1ID}`).classList.add('bug');
    }

    if (type2 == 'Bug') {
        document.getElementById(`${type2ID}`).classList.add('bug');
    }
}

function typeColorNormal(type1, type2, type1ID, type2ID) {
    if (type1 == 'Normal') {
        document.getElementById(`${type1ID}`).classList.add('normal');
    }

    if (type2 == 'Normal') {
        document.getElementById(`${type2ID}`).classList.add('normal');
    }
}

function typeColorPoison(type1, type2, type1ID, type2ID) {
    if (type1 == 'Poison') {
        document.getElementById(`${type1ID}`).classList.add('poison');
    }

    if (type2 == 'Poison') {
        document.getElementById(`${type2ID}`).classList.add('poison');
    }
}

function typeColorFlying(type1, type2, type1ID, type2ID) {
    if (type1 == 'Flying') {
        document.getElementById(`${type1ID}`).classList.add('flying');
    }

    if (type2 == 'Flying') {
        document.getElementById(`${type2ID}`).classList.add('flying');
    }
}

function typeColorElectric(type1, type2, type1ID, type2ID) {
    if (type1 == 'Electric') {
        document.getElementById(`${type1ID}`).classList.add('electric');
    }

    if (type2 == 'Electric') {
        document.getElementById(`${type2ID}`).classList.add('electric');
    }
}

function typeColorGround(type1, type2, type1ID, type2ID) {
    if (type1 == 'Ground') {
        document.getElementById(`${type1ID}`).classList.add('ground');
    }

    if (type2 == 'Ground') {
        document.getElementById(`${type2ID}`).classList.add('ground');
    }
}

function typeColorFairy(type1, type2, type1ID, type2ID) {
    if (type1 == 'Fairy') {
        document.getElementById(`${type1ID}`).classList.add('fairy');
    }

    if (type2 == 'Fairy') {
        document.getElementById(`${type2ID}`).classList.add('fairy');
    }
}

function typeColorFighting(type1, type2, type1ID, type2ID) {
    if (type1 == 'Fighting') {
        document.getElementById(`${type1ID}`).classList.add('fighting');
    }

    if (type2 == 'Fighting') {
        document.getElementById(`${type2ID}`).classList.add('fighting');
    }
}

function typeColorPsychic(type1, type2, type1ID, type2ID) {
    if (type1 == 'Psychic') {
        document.getElementById(`${type1ID}`).classList.add('psychic');
    }

    if (type2 == 'Psychic') {
        document.getElementById(`${type2ID}`).classList.add('psychic');
    }
}

function typeColorRock(type1, type2, type1ID, type2ID) {
    if (type1 == 'Rock') {
        document.getElementById(`${type1ID}`).classList.add('rock');
    }

    if (type2 == 'Rock') {
        document.getElementById(`${type2ID}`).classList.add('rock');
    }
}

function typeColorSteel(type1, type2, type1ID, type2ID) {
    if (type1 == 'Steel') {
        document.getElementById(`${type1ID}`).classList.add('steel');
    }

    if (type2 == 'Steel') {
        document.getElementById(`${type2ID}`).classList.add('steel');
    }
}

function typeColorIce(type1, type2, type1ID, type2ID) {
    if (type1 == 'Ice') {
        document.getElementById(`${type1ID}`).classList.add('ice');
    }

    if (type2 == 'Ice') {
        document.getElementById(`${type2ID}`).classList.add('ice');
    }
}

function typeColorGhost(type1, type2, type1ID, type2ID) {
    if (type1 == 'Ghost') {
        document.getElementById(`${type1ID}`).classList.add('ghost');
    }

    if (type2 == 'Ghost') {
        document.getElementById(`${type2ID}`).classList.add('ghost');
    }
}

function typeColorDragon(type1, type2, type1ID, type2ID) {
    if (type1 == 'Dragon') {
        document.getElementById(`${type1ID}`).classList.add('dragon');
    }

    if (type2 == 'Dragon') {
        document.getElementById(`${type2ID}`).classList.add('dragon');
    }
}