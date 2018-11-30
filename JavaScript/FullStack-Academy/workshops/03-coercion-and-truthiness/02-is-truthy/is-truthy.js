// YOUR CODE BELOW
const isTruthy = (variable) => {

    if (variable) {
        return true;
    } else if (variable === null) {
        return 'The null value is falsey';

    } else if (variable === undefined) {
        return 'undefined is falsey';

    } else if (variable === 0) {
        return 'The number 0 is falsey (the only falsey number)';

    } else if (variable === '') {
        return 'The empty string is falsey (the only falsey string)';

    } else return 'The boolean value false is falsey';
}



// const isTruthy = (variable) => {

//     switch (variable) {
//         case Boolean(variable):
//             return true;
//         case !Boolean(variable):
//             return 'The boolean value false is falsey';
//         case null:
//             return 'The null value is falsey';
//         case undefined:
//             return 'undefined is falsey';
//         case 0:
//             return 'The number 0 is falsey (the only falsey number)';
//         case '':
//             return 'The empty string is falsey (the only falsey string)';
//     }
// }




console.log(isTruthy(1));