// YOUR CODE BELOW
console.clear();

const evenAndOdd = (arrayOfNum) => {

    let evenNum = [];
    let oddNum = [];

    for (num of arrayOfNum) {

        if (num % 2) oddNum.push(num);

        else evenNum.push(num);
    }

    return [evenNum, oddNum]

    /* The methods below merges both arrays into one flat array

        return [...evenNum, ...oddNum]
        return [].concat(evenNum, oddNum)  

        */
}

console.log(evenAndOdd([1, 2, 3, 4, 5, 6]));