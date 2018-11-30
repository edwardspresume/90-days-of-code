// YOUR CODE BELOW
const exponentiate = (base, power) => {

    if (typeof base === 'number' && typeof power === 'number') {

        let result = 1;

        for (let i = 1; i <= power; i++) result *= base;

        return result;

    } else return `Your arguments need to be numbers`;
}

// const exponentiate = (base, power) => base ** power;
console.log(exponentiate(2, 2));