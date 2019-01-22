// Don't give me five!
// In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

// Examples:

// 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
// 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12


console.clear();
/* ==========================================================================
                                 Logic
   ========================================================================== */


// const dontGiveMeFive = (start, end) => {

//     let count = 0;

//     for (let i = start; i <= end; i++) {

//         let numString = i.toString();

//         if (!numString.includes('5')) count++;
//     }

//     return count
// }

/* ==========================================================================
                                 Alternative
   ========================================================================== */

const dontGiveMeFive = (start, end) => {

    let result = [];

    for (let i = start; i <= end; i++) {

        if (!/5/.test(i)) result.push(i)
        // or... if (!i.toString().match(/5/)) result.push(i)
    }

    return result.length
}


console.log(dontGiveMeFive(4, 17));