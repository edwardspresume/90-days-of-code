// YOUR CODE BELOW
const bacteriaTime = (currentNum, targetNum) => {

    let minutes = 0;
    debugger;
    if (targetNum < currentNum) return 'targetNum must be larger than currentNum';

    for (currentNum; currentNum < targetNum; currentNum *= 2) {
        minutes += 20;
    }

    /* Or */
    // while (currentNum < targetNum) {
    //     minutes += 20;
    //     currentNum *= 2;
    // }

    return minutes;

}

console.log(bacteriaTime(1, 18));