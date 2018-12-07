// YOUR CODE BELOW
console.clear();

const veryOddMutant = (arrayOfNum) => {

    let count = 0;

    arrayOfNum.forEach((num, index, array) => {

        if (num % 2 === 0) {
            arrayOfNum[index] = 'normie';
            count++;
        }
    })

    return count;
}