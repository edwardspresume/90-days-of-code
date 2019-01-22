// YOUR CODE BELOW
console.clear();

const sumNums = (num) => {
    debugger;
    if (num === 1) return num;

    else {

        let sum = num + sumNums(num - 1);
        return sum;
    }
}

console.log(sumNums(4));