// Boolean indicator for users guess
const correctGuess = false;

// Prompt user to take a guess
const userGuess = parseInt(prompt('Guess a number between one and 6'));

// Generate a random number between 1 and 6 for the user to guess
const randomNumber = Math.floor(Math.random() * 6 + 1);

// Check if the user guessed correctly
if (userGuess === randomNumber) {
    correctGuess = true;

    // Check if the user's guess is more then the number
} else if (userGuess > randomNumber) {
    const guessLess = parseInt(prompt(`Give it a one more go. The number I am thinking of is less then ${userGuess}`));

    if (guessLess === randomNumber) {
        correctGuess = true;
    }
}

// Check if the user's guess is less then the number
else if (userGuess < randomNumber) {
    const guessMore = parseInt(prompt(`Give it a one more go. The number I am thinking of is more then ${userGuess}`));

    if (guessMore === randomNumber) {
        correctGuess = true;
    }
}

// Notify the user if they were correct or not
if (correctGuess) {
    alert(`You are correct! The number is indeed ${randomNumber}`);
} else {
    alert(`Sorry the number was ${randomNumber}`);
}