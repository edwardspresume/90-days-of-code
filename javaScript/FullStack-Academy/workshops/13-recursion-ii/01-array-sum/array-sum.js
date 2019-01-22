// YOUR CODE BELOW
console.clear();

/* ==========================================================================
                                 Data
   ========================================================================== */

let array = [1, [2, 3, [4]]];


/* ==========================================================================
                                 Logic
   ========================================================================== */


const arraySum = (array) => {

    let sum = 0;

    array.forEach(element => {

        if (Array.isArray(element)) {

            sum += arraySum(element);

        } else {
            sum += element;
        }
    });

    return sum;
}

console.log(arraySum(array));