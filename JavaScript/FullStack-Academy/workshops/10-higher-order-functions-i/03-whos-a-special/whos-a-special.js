// YOUR CODE BELOW
console.clear();
/* ==========================================================================
                                 Data
   ========================================================================== */



let specialPets = [{
    name: 'Sadie',
    species: 'cat'
}, {
    name: 'Layla',
    species: 'cat'
}, {
    name: 'Bogie',
    species: 'dog'
}];

/* ==========================================================================
                                 Logic
   ========================================================================== */

const whosASpecial = (arrayOfPets) => {

    let string = '';

    arrayOfPets.forEach((pet, index) => {

        string += `${pet.name} the ${pet.species} is very special!`;
        console.log(index);

        if (index < arrayOfPets.length - 1) string += ' ';

    });

    return string;
}

console.log(whosASpecial(specialPets));