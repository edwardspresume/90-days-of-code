// YOUR CODE BELOW
console.clear();

const stringify = (callback) => {

    return function () {
        return callback().toString(); // or ` '${callback}' `
    }
}