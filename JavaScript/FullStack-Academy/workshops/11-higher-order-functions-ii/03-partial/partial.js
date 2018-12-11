// YOUR CODE BELOW
console.clear();

const partial = (callback, argA) => {

    return function (argB) {
        return callback(argA, argB)
    }
}