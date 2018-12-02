// YOUR CODE BELOW


// const myIncludes = (array, search) => array.includes(search);


/* ==========================================================================
                                 Alternative
   ========================================================================== */


// const myIncludes = (array, search) => {

//     if (array.indexOf(search) >= 0) {
//         return true;
//     }

//     return false;
// }



/* ==========================================================================
                                 Alternative 2
   ========================================================================== */


const myIncludes = (array, search) => {

    let foundValue = false;

    for (item of array) {
        if (item === search) {
            foundValue = true;

        }
    }

    return foundValue;
}

console.log(myIncludes([1, 2, 3], 1));