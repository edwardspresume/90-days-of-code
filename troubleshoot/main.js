// Find out what imports are
const brain = require('brain.js');
// Figure out why we need that period and /
const data = require('./data.json');
// Learn more about all the different utilities of brain.js
const network = new brain.recurrent.LSTM();

// Why is there a parrenthesces after arrow func?
const trainingData = data.map(item => ({
    input: item.text,
    output: item.category
}));

network.train(trainingData, {
    iterations: 2000
});

const result = network.run('The code has some bugs')

console.log(`Category: ${result}`);