// YOUR CODE BELOW
const zeroDarkThirty = (num) => {

    if (num === 0) return NaN;
    // Use toString() instead
    let stringNum = String(num).replace(/0/g, '');

    // Can use parseFloat to convert the string into a float
    return Number(stringNum);
}

console.log(zeroDarkThirty(102302));

// if (currentChar !== '0') {
//     newValue += currentChar;
//   }