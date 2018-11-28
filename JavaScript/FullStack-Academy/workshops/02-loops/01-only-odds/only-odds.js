// YOUR CODE BELOW
console.log('\x1Bc'); //Clear console


const onlyOdds = (num) => {
    let total = 0;
    if (num < 1) return 0;

    for (let i = 0; i < num; i++) {

        if (i % 2 === 0) continue;

        total += i;
    }

    return total;
}

console.log(onlyOdds(6));