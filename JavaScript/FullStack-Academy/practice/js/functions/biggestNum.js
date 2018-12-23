console.clear();

/* ==========================================================================
                                 Data
   ========================================================================== */
let digits = [17, [83, 49],
    [43, [90],
        [62]
    ]
]

// let digits = [1, [2, 3],
//     [4, 5], 7, 8, [9, 10]
// ]


/* ==========================================================================
                                 Logic
   ========================================================================== */



// const biggestNum = (array) => Array.isArray(array) ? [].concat.apply([], array.map(biggestNum)) : array;


/* ==========================================================================
                                 Alternative
   ========================================================================== */


// const biggestNum = (digits) => {

//     let arrayOfNum = [];

//     for (element of digits) {

//         if (Array.isArray(element)) arrayOfNum = arrayOfNum.concat(biggestNum(element));
//         else arrayOfNum.push(element)
//     }

//     return Math.max(...arrayOfNum);
// }



/* ==========================================================================
                                 Alternative
   ========================================================================== */

const biggestNum = (digits) => {

    let largestNum = 0;

    digits.forEach(currentElement => {

        if (Array.isArray(currentElement)) {
            let nextNumber = biggestNum(currentElement);
            if (nextNumber > largestNum) largestNum = nextNumber

        } else if (currentElement > largestNum) largestNum = currentElement;

    });

    return largestNum;
}

console.log(biggestNum(digits));