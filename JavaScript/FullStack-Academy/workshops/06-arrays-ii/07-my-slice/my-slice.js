// YOUR CODE BELOW
console.clear();

const mySlice = (originalArray, startIdx = 0, endIdx = originalArray.length) => {

    // Create an array to store the the sliced elements
    let copyArray = [];

    if (startIdx < 0) startIdx += originalArray.length;
    if (endIdx < 0) endIdx += originalArray.length;


    for (let i = startIdx; i < endIdx; i++) {

        let currentElement = originalArray[i];

        copyArray.push(currentElement);
    }


    return copyArray;
}

console.log(mySlice([1, 2, 3], 1, 2));