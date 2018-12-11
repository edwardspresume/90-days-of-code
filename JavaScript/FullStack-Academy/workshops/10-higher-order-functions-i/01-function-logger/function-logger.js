// YOUR CODE BELOW
console.clear();

const functionLogger = (callback, num) => {

    console.log('Function starting');

    const result = callback(num);

    console.log("Function complete");

    return result;
}

const squareNum = num => num * num;

functionLogger(squareNum, 4);