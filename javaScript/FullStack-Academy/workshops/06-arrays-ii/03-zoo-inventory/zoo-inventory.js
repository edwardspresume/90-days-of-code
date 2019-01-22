// YOUR CODE BELOW
console.clear();

// const zooInventory = (zoo) => {
//     let sentences = [];

//     for (animal of zoo) {

//         let name = animal[0]
//         let species = animal[1][0];
//         let age = animal[1][1]

//         let sentence = `${name} the ${species} is ${age}.`

//         sentences.push(sentence)
//     }

//     return sentences;
// }





/* ==========================================================================
                                 Alternative 1
   ========================================================================== */

const zooInventory = (zoo) => {
    let sentences = [];

    for (animal of zoo) {
        const [name, [species, age]] = animal;

        sentences.push(`${name} the ${species} is ${age}.`)
    }

    return sentences;
}


let myZoo = [
    ['King Kong', ['gorilla', 42]],
    ['Nemo', ['fish', 5]],
    ['Punxsutawney Phil', ['groundhog', 11]]
];

console.log(zooInventory(myZoo));


/* ==========================================================================
                                 Alternative 2
   ========================================================================== */

// function zooInventory(zoo) {
//     let sentences = [];

//     for (let i = 0; i < zoo.length; i++) {
//         sentences.push(`${zoo[i][0]} the ${zoo[i][1][0]} is ${zoo[i][1][1]}.`)
//     }

//     return sentences
// }


/* ==========================================================================
                                 In Works
   ========================================================================== */



// const zooInventory = (multiDimensionalArray) => {
//     let flattenArray = [];
//     let sentence = '';
//     for (baseElement of multiDimensionalArray) {

//         if (Array.isArray(baseElement)) {

//             for (innerElement of baseElement) {

//                 if (Array.isArray(innerElement)) {


//                 } else sentence = baseElement.join(' ').replace(',', ' ');

//             }

//         } else sentence = baseElement;

//         flattenArray.push(sentence + '.');

//     }


//     return flattenArray;
// }