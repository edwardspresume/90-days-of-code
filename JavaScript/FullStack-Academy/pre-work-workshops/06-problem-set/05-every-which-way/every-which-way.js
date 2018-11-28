// YOUR CODE BELOW
function everyWhichWay(num1, num2, result) {
    if (num1 + num2 === result) return "sum";
    if (num1 - num2 === result) return "difference";
    if (num1 * num2 === result) return "product";
    if (num1 / num2 === result) return "fraction";

    return null;
}