// YOUR CODE BELOW
console.clear();

const countToTen = (num) => {

    if (num <= 10) {
        console.log(num);
        countToTen(num + 1)
    }
}

countToTen(10)