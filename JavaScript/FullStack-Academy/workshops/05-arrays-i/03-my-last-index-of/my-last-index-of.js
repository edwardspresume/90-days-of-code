// YOUR CODE BELOW
const myLastIndexOf = (array, search, startIdx = 0) => {
    debugger;
    // store index of found item
    let foundIdx = -1;

    for (let i = startIdx; i <= array.length; i++) {
        let currentElm = array[i];


        if (currentElm === search) {

            foundIdx = i;

        }

    }
    return foundIdx;
}

myLastIndexOf([1, 2, 3, 3, 3], 3, 3)