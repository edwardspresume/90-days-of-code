// DOM elements
const minInput = document.getElementById('minInput');
const maxInput = document.getElementById('maxInput');
const generate = document.getElementById('generate');
const reset = document.getElementById('reset');
const result = document.getElementById('result');

// Generate random number when button clicked
generate.addEventListener('click', () => {

    // Differentiate between the min and max values from users input
    const min = Math.min(minInput.value, maxInput.value);
    const max = Math.max(minInput.value, maxInput.value);

    // Calculate random number
    const randomNumber = Math.floor(Math.random() * (max - min) + 1 + min);

    // Render random number to element
    result.textContent = `Random number: ( ${randomNumber} ) between ${min} and ${max}`;
});

// Reset elements
reset.addEventListener('click', () => {
    minInput.value = ''
    maxInput.value = ''
    result.textContent = '';
    minInput.focus();
})