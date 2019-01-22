// YOUR CODE BELOW
console.clear();

const countToTen = (num) => {
    debugger;
    if (num <= 10) {
        console.log(num);
        countToTen(num + 1)
    }
}

countToTen(1)