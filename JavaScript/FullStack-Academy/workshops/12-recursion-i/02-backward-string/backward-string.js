// YOUR CODE BELOW
console.clear();

const backwardString = (string, index = string.length - 1) => {
    debugger;
    if (index >= 0) {

        console.log(string[index]);
        backwardString(string, index - 1)
    }
}

backwardString('happy')