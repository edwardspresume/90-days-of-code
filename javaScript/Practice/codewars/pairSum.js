//PAIR SUM
// Given an array of numbers sorted in ascending order (least to greatest), and a separate number (a "target"), determine if any 2 numbers in the array add up to the target. 
//Return true if any 2 different numbers within the array add up to target. Return false if no 2 numbers in the array add up to target.

console.clear();

const pairSum = (arr, target) => {

    // Loop through the array
    for (let i = 0; i < arr.length - 1; i++) {

        // Get the current digit of the array
        let currentDigit = arr[i];

        // Run another loop to get the next digit
        for (let j = i + 1; j < arr.length; j++) {

            let nextDigit = arr[j];

            // If the current digit + the next digit equals the target return true
            if (currentDigit + nextDigit === target) return true
        }
    }

    return false;
}



console.log("\nPAIR SUM!!!!!!!!!!!")
// console.log('true?', pairSum([1, 1, 2, 3, 4, 5], 7));
console.log('true?', pairSum([1, 3, 5, 7, 8, 9, 10], 16));
// console.log('false?', pairSum([1, 2, 3, 4, 5], 10));
// console.log('false?', pairSum([1, 2, 3, 7, 8], 7));
// console.log('false?', pairSum([1, 2, 3, 4, 5], 2));

// // edge test cases
// console.log('false?', pairSum([1], 2));
// console.log('false?', pairSum([], 2));