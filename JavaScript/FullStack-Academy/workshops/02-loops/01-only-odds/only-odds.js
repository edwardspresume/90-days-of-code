// YOUR CODE BELOW
console.log('\x1Bc'); //Clear console

const onlyOdds = (num) => {

    let sum = 0;

    for (let i = 1; i < num; i++) {

        if (i % 2 === 1) sum += i;
    }

    return sum;
}



console.log(onlyOdds(6));