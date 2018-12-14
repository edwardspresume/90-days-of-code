// YOUR CODE BELOW
console.clear();

const reverseArray = (array) => {

    let arrayCopy = array.slice();
    let reversedArray = [];

    if (arrayCopy.length === 0) return reversedArray;

    // Remove the last element of the array and push it to the reversed array
    reversedArray.push(arrayCopy.pop());

    // Get the remaining elements
    let remainingElements = reverseArray(arrayCopy);

    // Spread the remainingElements to the reversed array
    return reversedArray = [...reversedArray, ...remainingElements]
    // Or return reversedArray.concat(remainingElements)
}


let arr = [1, 2, 3, 4, 5]

console.log(`----------------------------- Reversed Array -----------------------------`);
console.log(reverseArray(arr));

console.log(`----------------------------- Original Array -----------------------------`);
console.log(arr);


/* ==========================================================================
                                 Alternative
   ========================================================================== */


// const reverseArray = (array) => {

//     if (array.length === 1) return array;

//     const lastElement = array[array.length - 1];

//     let remainingElements = reverseArray(array.slice(0, -1));

//     return [lastElement].concat(remainingElements);
// }


/* ==========================================================================
                                 Alternative 2
   ========================================================================== */


// const reverseArray = (array) => {

//     if (array.length === 1) return array.slice();

//     let reversedArray = [];
//     let lastElement = array[array.length - 1];

//     reversedArray.push(lastElement);

//     let remainingElements = reverseArray(array.slice(0, -1));

//     return reversedArray.concat(remainingElements);
// }