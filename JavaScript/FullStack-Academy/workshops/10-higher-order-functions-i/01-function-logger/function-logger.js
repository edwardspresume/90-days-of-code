// YOUR CODE BELOW
console.clear();

const functionLogger = (callback, num) => {

    console.log('Function starting');
    console.log("Function complete");

    return callback(num);
}

const squareNum = num => num * num;

functionLogger(squareNum, 4);