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

        if (index < arrayOfPets.length - 1) string += ' ';

    });

    return string;
}


/* ==========================================================================
                                 Alternative
   ========================================================================== */



// function whosASpecial(specialPets) {
//     let results = [];

//     specialPets.forEach(pushStringOntoResults);

//     function pushStringOntoResults(petObject) {
//         results.push(`${petObject.name} the ${petObject.species} is very special!`);
//     }

//     return results.join(' ');
// }

console.log(whosASpecial(specialPets));