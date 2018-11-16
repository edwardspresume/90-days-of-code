// DOM elements
const weightOptions = document.getElementById('weight-options');
const weightInput = document.getElementById('weight-input');
const outputDiv = document.getElementById('output-div');
const outputName1 = document.getElementById('outputName1');
const outputName2 = document.getElementById('outputName2');
const outputName3 = document.getElementById('outputName3');
const outputValue1 = document.getElementById('outputValue1');
const outputValue2 = document.getElementById('outputValue2');
const outputValue3 = document.getElementById('outputValue3');

// Change weights base on selection
const weightSelection = () => {
    let selectedWeight = weightOptions.selectedOptions[0].text;
    weightInput.placeholder = `Enter ${selectedWeight}...`;

    if (selectedWeight === 'Grams') {
        outputName1.textContent = 'Pounds:';
        outputName2.textContent = 'Ounces:';
        outputName3.textContent = 'Kilograms:';
    }

    if (selectedWeight === 'Ounces') {
        outputName1.textContent = 'Grams:';
        outputName2.textContent = 'Pounds:';
        outputName3.textContent = 'Kilograms:';
    }

    if (selectedWeight === 'Pounds') {
        outputName1.textContent = 'Grams:';
        outputName2.textContent = 'Ounces:';
        outputName3.textContent = 'Kilograms:';
    }

    if (selectedWeight === 'Kilograms') {
        outputName1.textContent = 'Grams';
        outputName2.textContent = 'Pounds:';
        outputName3.textContent = 'Ounces:';
    }
}

const weightCalculation = () => {
    if (weightInput.value !== '') {
        outputDiv.style.display = 'block'

        let selectedWeight = weightOptions.selectedOptions[0].text;

        // Grams conversion
        if (selectedWeight === 'Grams') {
            // Ounces
            outputValue1.textContent = (weightInput.value / 28.35).toFixed(3);

            // Pounds
            outputValue2.textContent = (weightInput.value / 453.592).toFixed(3);

            // Kilograms
            outputValue3.textContent = (weightInput.value / 1000).toFixed(3);
        }

        // Ounces conversion
        if (selectedWeight === 'Ounces') {

            // Grams
            outputValue1.textContent = (weightInput.value * 28.35).toFixed(3);

            // Pounds
            outputValue2.textContent = (weightInput.value / 16).toFixed(3);

            // Kilograms
            outputValue3.textContent = (weightInput.value / 35.274).toFixed(3);
        }

        // Pounds conversion
        if (selectedWeight === 'Pounds') {

            // Grams
            outputValue1.textContent = (weightInput.value * 453.592).toFixed(3);

            // Ounces
            outputValue2.textContent = (weightInput.value * 16);

            // Kilograms
            outputValue3.textContent = (weightInput.value / 2.205).toFixed(3);
        }

        // Kilograms conversion
        if (selectedWeight === 'Kilograms') {

            // Grams
            outputValue1.textContent = (weightInput.value * 1000);

            // Pounds
            outputValue2.textContent = (weightInput.value * 2.205).toFixed(1);

            // Ounces
            outputValue3.textContent = (weightInput.value * 35.274).toFixed(3);
        }

    } else {
        outputDiv.style.display = 'none'
    }
}

// Event listeners
weightOptions.addEventListener('change', function () {
    weightSelection();
    weightCalculation();
});

weightInput.addEventListener('input', weightCalculation);