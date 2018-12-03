// YOUR CODE BELOW
const myLastIndexOf = (array, search, startIdx = array.length - 1) => {

    for (let i = startIdx; i >= 0; i--) {
        let currentElm = array[i];

        if (currentElm === search) return i;
    }
    return -1;
}

console.log(myLastIndexOf([1, 2, 3, 3, 3], 3, 3));