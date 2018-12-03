// YOUR CODE BELOW
// const myReverse = (array) => {
//     let reversedArray = [];

//     for (let i = array.length - 1; i >= 0; i--) {
//         reversedArray.push(array[i]);
//     }

//     return reversedArray;
// }

/* ==========================================================================
                                 Alternative
   ========================================================================== */

const myReverse = (array) => {
    let reverseArray = [];

    while (array.length) reverseArray.push(array.pop());

    return reverseArray;
}