// YOUR CODE BELOW
console.clear();
const veryOdd = (arrayOfNum) => {

    let oddNums = [];

    arrayOfNum.forEach(num => {
        if (num % 2 === 1) oddNums.push(num)
    });

    return oddNums
}

let allTheNums = [1, 2, 3, 4, 5, 6, 7, 8];

let oddNums = veryOdd(allTheNums);

console.log(oddNums);