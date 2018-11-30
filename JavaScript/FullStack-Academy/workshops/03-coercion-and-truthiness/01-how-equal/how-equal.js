// YOUR CODE BELOW
const howEqual = (text, number) => {


    if (text === number) return 'strictly';

    if (text == number) return 'loosely';

    if (text !== number) return "not equal";

}

console.log(howEqual(3, 9 / 3));