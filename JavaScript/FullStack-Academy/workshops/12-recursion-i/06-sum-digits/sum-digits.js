// YOUR CODE BELOW
console.clear();


const sumDigits = (number) => {

    let stringNum = number.toString();

    if (stringNum.length === 1) return number;

    const restOfString = stringNum.slice(1);
    const nextNumber = parseInt(restOfString);

    return parseInt(stringNum[0]) + sumDigits(nextNumber);
}

console.log(sumDigits(1234));

/* ==========================================================================
                                 Alternative
   ========================================================================== */

// const sumDigits = (number) => {

//     let numString = number.toString();

//     if (numString.length === 1) return number;

//     let sum = 0;

//     sum += parseInt(numString[0]);

//     let remainingDigits = sumDigits(parseInt(numString.slice(1)));

//     return sum += remainingDigits;
// }


/* ==========================================================================
                                 Alternative 2
   ========================================================================== */


// const sumDigits = (digit) => {

//     // If the number is just 1 digit return the number;
//     if (digit.toString().length === 1) return digit;

//     // Turn the number into a string so we can split it into any array
//     let digitArray = digit.toString().split('');

//     // Get the first string of the digitArray and turn it into a number;
//     let currentNum = parseInt(digitArray[0])

//     // Remove that first digit
//     digitArray.shift();

//     // Join the digit's back together and turn it into a string
//     digitArray = parseInt(digitArray.join(''))

//     return currentNum + sumDigits(digitArray)
// }