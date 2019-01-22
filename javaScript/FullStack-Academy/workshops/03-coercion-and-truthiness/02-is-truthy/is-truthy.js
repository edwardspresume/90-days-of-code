// YOUR CODE BELOW
// const isTruthy = (variable) => {

//     if (!!variable) {
//         return true;
//     } else if (variable === null) {
//         return 'The null value is falsey';

//     } else if (variable === undefined) {
//         return 'undefined is falsey';

//     } else if (variable === 0) {
//         return 'The number 0 is falsey (the only falsey number)';

//     } else if (variable === '') {
//         return 'The empty string is falsey (the only falsey string)';

//     } else return 'The boolean value false is falsey';
// }



/* ==========================================================================
                                 Alternative
   ========================================================================== */


// const isTruthy = (value) => {

//     if (!!value) return true;

//     if (value === null) return 'The null value is falsey';

//     if (value === undefined) return 'undefined is falsey';

//     if (value === 0) return 'The number 0 is falsey (the only falsey number)';

//     if (value === '') return 'The empty string is falsey (the only falsey string)';

//     return 'The boolean value false is falsey';
// }


/* ==========================================================================
                                 Switch test
   ========================================================================== */



const isTruthy = (variable) => {

    if (variable) return true;

    switch (variable) {

        case false:
            return 'The boolean value false is falsey';
        case null:
            return 'The null value is falsey';
        case undefined:
            return 'undefined is falsey';
        case 0:
            return 'The number 0 is falsey (the only falsey number)';
        case '':
            return 'The empty string is falsey (the only falsey string)';
        default:
            return 'NaN';
    }
}




console.log(isTruthy(1));