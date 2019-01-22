// YOUR CODE BELOW
console.clear();

const callCount = () => {
    let counter = 0;

    return function () {
        counter++;
        return counter;
    }
}