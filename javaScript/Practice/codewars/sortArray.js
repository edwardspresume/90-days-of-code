// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.

// Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

// Example

// sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]


console.clear();

const sortArray = (array) => {

    if (array.length === 0) return array;

    let result = array.sort((a, b) => {
        console.log(a, b);
        if ((a % 2 !== 0)) return a - b;
    });

    return result;
}




// console.log(sortArray([]));
console.log(sortArray([5, 3, 2, 8, 1, 4])) //== [1, 3, 2, 8, 5, 4]);