// YOUR CODE BELOW
console.clear();

/* ==========================================================================
                                 Data
   ========================================================================== */

let numbers = [1, 3, 5, 64, 7, 12];
let odds = [9, 13, 15, 17];

/* ==========================================================================
                                 Logic
   ========================================================================== */

const finderFunction = (array, callback) => {

    for (let i = 0; i < array.length; i++) {
        let currentNum = array[i];

        let result = callback(currentNum);

        if (result) return i;
    }

    return -1;
}

// Callback function that determines if a number is even or not;
const isEven = num => !(num % 2);

console.log(finderFunction(odds, isEven));