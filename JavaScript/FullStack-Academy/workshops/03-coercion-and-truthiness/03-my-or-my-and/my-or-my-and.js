// YOUR CODE BELOW


const myOr = (var1, var2, var3) => var1 || var2 || var3;

const myAnd = (var1, var2, var3) => var1 && var2 && var3;



/* ==========================================================================
                                 Alternative
   ========================================================================== */

// const myOr = (anyType1, anyType2, anyType3) => {
//     if (anyType1 || anyType2 || anyType3) {
//         return anyType1 || anyType2 || anyType3;
//     } else {
//         return anyType3
//     }
// }

// const myAnd = (anyType1, anyType2, anyType3) => {

//     if (!anyType1) return anyType1;
//     if (!anyType2) return anyType2;
//     if (!anyType3) return anyType3;

//     return anyType3;
// }