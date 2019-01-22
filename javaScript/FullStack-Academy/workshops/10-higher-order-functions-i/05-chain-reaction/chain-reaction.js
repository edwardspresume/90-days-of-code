// YOUR CODE BELOW
console.clear();

function addTen(num) {
    return num + 10;
}

function subtractFive(num) {
    return num - 5;
}

function multiplyFive(num) {
    return num * 5;
}




const chainReaction = (value, arrayOfFunctions) => {

    for (currentFunction of arrayOfFunctions) {

        value = currentFunction(value);
    }

    return value;
}

console.log(chainReaction(0, [addTen, multiplyFive]));