// function myUnshift(array, anyValue) {

//     let newArray = [anyValue];

//     for (let i = 0; i < array.length; i++) {

//         let currentElm = array[i]

//         newArray.push(currentElm)
//     }

//     return newArray;
// }

/* ==========================================================================
                                 Alternative
   ========================================================================== */

const myUnshift = (array, elem) => [elem, ...array];

myUnshift([1, 2, 3], 0)