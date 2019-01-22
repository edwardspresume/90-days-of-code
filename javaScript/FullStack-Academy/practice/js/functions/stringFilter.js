console.clear();

/* ==========================================================================
                                 Data
   ========================================================================== */

const text = "j1s2 i3s4 t5h6e b7e8s9t";

/* ==========================================================================
                                 Logic
   ========================================================================== */


const stringFilter = (string) => string.replace(/\d/g, '');
// const stringFilter = (string) => [...string].filter(char => isNaN(char) || char === ' ').join('');


/* ==========================================================================
                              Alternative
========================================================================== */


// const stringFilter = (string) => {

//     string = string.split('');

//     string.forEach((char, i) => {

//         let parsedChar = parseInt(char);
//         if (Number.isInteger(parsedChar)) delete string[i];

//         // if (!isNaN(parsedChar)) delete string[i];
//     });

//     return string.join('');
// }


/* ==========================================================================
                                 Alternative 2
   ========================================================================== */


// const stringFilter = (string) => {

//     let result = '';

//     for (let i = 0; i < string.length; i++) {
//         let currentChar = string[i];

//         if (isNaN(currentChar) || currentChar === ' ') result += currentChar;
//     }

//     return result;
// }


/* ==========================================================================
                                 Alternative 3
   ========================================================================== */


// const stringFilter = (string) => {

//     let digits = '0123456789';

//     string = string.split('');

//     string.forEach((char, i) => {

//         if (digits.includes(char)) delete string[i];
//     });


//     return string.join('');
// }


/* ==========================================================================
                                 Alternative 4
   ========================================================================== */

// const stringFilter = (string) => {

//     string = string.split('');

//     let i = 0;
//     while (i < 10) {

//         string.forEach((char, j) => {

//             if (char === i.toString()) delete string[j];
//         });

//         i++
//     }

//     return string.join('');
// }

console.log(stringFilter(text));



// const stringFilter = (string) => {

//    for (let i = 0, char = ''; char = string[i]; i++) {

//        console.log(char);
//    }
// }