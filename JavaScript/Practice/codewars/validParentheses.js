//VALID PARENS
// Write a function that takes a string of parentheses and determines if the order of the parentheses is valid. validParentheses should return true if the string is valid, and false if it's invalid.

// All input strings will be nonempty, and will only consist of open parentheses ‘(' and/or closed parentheses ')'


console.clear();



const validParentheses = (parens) => {

    while (parens.includes('()')) parens = parens.replace('()', '')

    if (parens === '') return true;

    return false;
}


/* ==========================================================================
                                 Alternative
   ========================================================================== */


// const validParentheses = (parens) => {
//     let length = parens.length / 2;

//     for (let i = 0; i < length; i++) {
//         parens = parens.replace('()', '');
//     }

//     return parens === '';
// }


/* ==========================================================================
                                 Improper solution
   ========================================================================== */


// const validParentheses = (parens) => {

//     // Get the middle of the string 
//     let middle = parens[Math.floor((parens.length - 1) / 2)];

//     // If we have an even amount of open and closing parens the middle will be an opening paren if not return false
//     if (middle !== '(') return false;

//     // Store the total amount of open parens
//     let openParenCount = 0;

//     // Store the total amount of close parens
//     let closeParenCount = 0;

//     // Loop through the string
//     for (let i = 0; i < parens.length; i++) {

//         let currentChar = parens[i];

//         // Count how many open and close parens there are
//         if (currentChar === '(') openParenCount++;
//         if (currentChar === ')') closeParenCount++;
//     }

//     // If we have the same amount of open and close paren return true else false
//     return openParenCount === closeParenCount
// }




/* ==========================================================================
                                 Trial and error
   ========================================================================== */

// const validParentheses = (parens) => {
//     //your code here
//     debugger;
//     // Loop through all the current char of the string
//     for (let i = 0; i < parens.length; i++) {

//         // Store the current Char to a variable;
//         let currentChar = parens[i];

//         // Store the last char into a variable
//         let lastChar = parens.slice(-1 - i)[0];


//         // If the currentChar and lastChar of the iteration join together to form a proper parentheses return true;
//         if (currentChar + lastChar !== "()") return false;
//         // else return false;
//     }

//     // Return false by default
//     return true;
// }



/* ==========================================================================
                                 Console log
   ========================================================================== */

// console.log('true? ', validParentheses("()"))
// // => returns true 
// console.log('false? ', validParentheses(")(()))"))
// // // // => returns false 
// console.log('false? ', validParentheses("("))
// // // // // => returns false 
// console.log('true? ', validParentheses("(())((()())())"))
// // // // // // => returns true 
console.log('false?', validParentheses(")("))
console.log('false?', validParentheses('())(()'))

console.log(validParentheses('(())()'));