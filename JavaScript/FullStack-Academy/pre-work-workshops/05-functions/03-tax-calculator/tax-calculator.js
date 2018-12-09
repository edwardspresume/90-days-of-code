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

/* ==========================================================================
                                 Alternative 
   ========================================================================== */


const taxCalculator = (price, state) => {

    if (state === 'NY') return price * 1.04;
    if (state === 'NJ') return price * 1.06625;
}


console.log(taxCalculator('NY', 100));