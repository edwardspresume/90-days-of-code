// YOUR CODE BELOW
console.clear();

const myForEach = (array, callback) => {

    for (let i = 0; i < array.length; i++) {

        let currentElement = array[i];
        callback(currentElement, i, array);
    }
}