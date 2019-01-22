// YOUR CODE BELOW
console.clear();

const myJoin = (array, separator = ',') => {

    // Create a string to store the joined elements
    let string = '';

    // Loop through the elements of the array
    for (let i = 0; i < array.length; i++) {

        let word = array[i];

        // replace element with an empty string if they are undefined or null
        if (word !== undefined && word !== null) string += word;

        // If were not at the last index of the array add the separator
        if (i < array.length - 1) string += separator;

        // or [ (i !== 0) string += separator ] :: before the if condition to concat the words
    }

    return string;
}

console.log(myJoin(['hello', undefined, 'world'], '-'));