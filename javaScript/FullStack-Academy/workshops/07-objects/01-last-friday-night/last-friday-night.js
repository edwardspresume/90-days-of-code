// YOUR CODE BELOW
console.clear();

const lastFridayNight = (array) => {
    let total = 0;

    for (let i = 0; i < array.length; i++) {

        let currentElement = array[i];
        total += currentElement.amount
    }

    return total;
}


let transactions = [{
        name: "Tons of glitter",
        amount: 70
    },
    {
        name: "Porcelain Pink Flamingos",
        amount: 92
    },
    {
        name: "Chandelier replacement",
        amount: 10000,
    },
    {
        name: "Dinner at TGIF x6",
        amount: 350
    }
];

console.log(lastFridayNight(transactions));