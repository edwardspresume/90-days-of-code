// YOUR CODE BELOW
console.clear();

const removeColumns = (originalGrid, numColumns) => {

    for (elements of originalGrid) {

        for (let i = 0; i < numColumns; i++) {
            elements.pop();
        }

    }

    return originalGrid;
}


console.log(removeColumns([
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3]
], 2));

/* ==========================================================================
                                 Alternative
   ========================================================================== */


// const removeColumns = (originalGid, numColumns) => {

//     let newGrid = [];

//     for (elements of originalGid) {

//         newGrid.push(elements.slice(0, elements.length - numColumns))
//     }

//     return newGrid;

// }