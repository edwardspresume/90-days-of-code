// YOUR CODE BELOW
const mySlice = (originalString, startIdx, endIdx) => {

    if (typeof originalString === 'string') {

        let newString = '';

        if (startIdx && typeof startIdx === 'number') {

            for (startIdx; startIdx < originalString.length; startIdx++) {
                newString += originalString[startIdx];
            }

            return newString;

        } else return originalString;


    } else return 'Error: originalString needs to be a string';
}

console.log(mySlice('edwards', 3));



// if (startIdx && typeof startIdx === 'number' && endIdx && typeof endIdx === 'number') {

// } else return `Error: Please check that your passing in the proper variable type`