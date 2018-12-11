// YOUR CODE BELOW
console.clear();

const billerBuilder = (state) => {

    return function (price) {
        if (state === 'NY') return price * 1.03 * 1.04;
        if (state === 'NJ') return price * 1.05 * 1.06625;
    }
}