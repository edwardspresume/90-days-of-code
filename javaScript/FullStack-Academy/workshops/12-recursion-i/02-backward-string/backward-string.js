// YOUR CODE BELOW
console.clear();

// const backwardString = (string, index = string.length - 1) => {
//     if (index >= 0) {
//         console.log(string[index]);
//         backwardString(string, index - 1)
//     }
// }


/* ==========================================================================
                                 Alternative
   ========================================================================== */

// const backwardString = (string) => {
//     debugger;
//     if (string.length === 1) console.log(string);
//     else {
//         string = string.split('');
//         console.log(string.pop());
//         string = string.join('');
//         backwardString(string);

//     }
// }

/* ==========================================================================
                                 Alternative 2
   ========================================================================== */

// const backwardString = (string) => {

//     if (string.length === 1) console.log(string);

//     else {

//         let lastChar = string[string.length - 1];

//         console.log(lastChar);

//         string = string.slice(0, -1);

//         backwardString(string)
//     }
// }

/* ==========================================================================
                                 Alternative 3
   ========================================================================== */

const backwardString = (string) => {

    console.log(string[string.length - 1]);

    if (string.length > 1) backwardString(string.slice(0, -1));
}


console.log(backwardString('happy'));