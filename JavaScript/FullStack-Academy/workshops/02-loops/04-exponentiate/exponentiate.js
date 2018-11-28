// YOUR CODE BELOW
const exponentiate = (base, power) => {

    if (typeof base === 'number' && typeof power === 'number') {

        let result = 1;

        if (power === 0) return 1;
        debugger;
        for (let i = 0; i < power; i++) result *= base;

        return result;

    } else return `Your arguments need to be numbers`;
}


console.log(exponentiate(3, 4));