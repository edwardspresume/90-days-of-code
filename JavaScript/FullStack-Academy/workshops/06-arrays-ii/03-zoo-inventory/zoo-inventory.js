// YOUR CODE BELOW
console.log('\x1Bc'); //Clear console

function zooInventory(array) {

    let flatArray = [];
    debugger;
    // Loop through the whole array to get all of it's elements
    for (let i = 0; i < array.length; i++) {

        let initialElm = array[i];


        // Check if any of the initial elements is an array
        if (Array.isArray(initialElm)) {

            // if any of the initial elements is an array; loop inside them
            for (let j = 0; j < initialElm.length; j++) {

                let innerElm = initialElm[j];

                if (Array.isArray(innerElm)) {

                    for (let k = 0; k < innerElm.length; k++) {

                        let innerMostElm = innerElm[k]

                        flatArray.push(innerMostElm);

                    }
                } else flatArray.push(initialElm);
            }

        } else flatArray.push(initialElm);

    }

    return flatArray;
}


let myZoo = [
    ['King Kong', ['gorilla', 42]],
    ['Nemo', ['fish', 5]],
    ['Punxsutawney Phil', ['groundhog', 11]]
];

console.log(zooInventory(myZoo));