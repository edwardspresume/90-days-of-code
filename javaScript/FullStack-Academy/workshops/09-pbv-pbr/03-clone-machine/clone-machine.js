// YOUR CODE BELOW
console.clear();

let dolly = {
    name: 'Dolly',
    species: 'sheep',
    offspring: []
}

const cloneMachine = (animalObject) => {

    // Copy the given animalObject
    let clone = { ...animalObject
    };

    // The name of the cloned should be the name of the original object plus the word 'Clone';
    clone.name = animalObject.name + 'Clone';

    // Push the name of our cloned object to the originals offspring prop
    animalObject.offspring.push(clone.name)

    clone.offspring = [];

    return clone;
}

/* ==========================================================================
                                 Alternative
   ========================================================================== */

// const cloneMachine = ({
//     name,
//     species,
//     offspring
// }) => {

//     const clonedName = `${name}Clone`;
//     const clone = {
//         name: clonedName,
//         species, // Since are variable name is the same as the property we can omit giving a value since the prop will return it
//         offspring: []
//     }
//     // Push the cloned name to offspring prop of the parent
//     offspring.push(clonedName)


//     return clone;
// }

console.log(cloneMachine(dolly));