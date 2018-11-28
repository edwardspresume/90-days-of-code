// YOUR CODE BELOW
function maxOfThree(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) return num1;
    if (num2 > num1 && num2 > num3) return num2;
    if (num3 > num1 && num3 > num2) return num3;
}



// const maxOfThree = (...numbers) => Math.max(...numbers);

console.log(maxOfThree(111, 11, 2, 1123123, 2));