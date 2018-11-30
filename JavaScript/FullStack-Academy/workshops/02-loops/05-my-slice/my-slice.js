const mySlice = (originalString, startIdx = 0, endIdx = originalString.length) => {

    if (typeof originalString === 'string') {

        let newString = '';
        // let startPos = 0;
        // let endPos = originalString.length;

        // if (typeof startIdx === 'number') startPos = startIdx;
        // if (typeof endIdx === 'number') endPos = endIdx;

        for (let i = startIdx; i < endIdx; i++) {
            let currentChar = originalString[i];
            newString += currentChar;
        }

        return newString;
    } else return 'Error: originalString needs to be a string';
}



console.log(mySlice('Edwards'));