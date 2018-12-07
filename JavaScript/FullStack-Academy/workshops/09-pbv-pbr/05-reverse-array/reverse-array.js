// YOUR CODE BELOW

const reverseArray = (array) => {

    let storage = [];

    while (array.length) {
        storage.push(array.shift());
    }

    for (let i = storage.length - 1; i >= 0; i--) {
        let currentElm = storage[i];
        array.push(currentElm)
    }

    return array;
}

/* ==========================================================================
                                 Alternative
   ========================================================================== */

//    const reverseArray = (array) => {
//     let originalElements = [];

//     // pop all of the elements from the original array, and store them in a new array
//     while (array.length) {
//       originalElements.push(array.pop());
//     }

//     // pop all of the elements out of new array, unshift them back into the original array
//     while (originalElements.length) {
//       array.unshift(originalElements.pop())
//     }

//     return array;
//   }