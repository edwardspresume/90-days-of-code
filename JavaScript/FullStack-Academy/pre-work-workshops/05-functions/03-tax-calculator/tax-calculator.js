// YOUR CODE BELOW

const taxCalculator = (price, state) => {

    switch (state) {
        case 'NY':
            return price * 1.04;
        case 'NJ':
            return price * 1.06625;
        default:
            return price;
    }
}




console.log(taxCalculator('NY', 100));