let guess;
let attempt = 0;
let guessCorrect = false;
let randomNumber = Math.floor(Math.random() * 10) + 1;

do {
    attempt++;
    guess = parseInt(prompt('Guess a number between 1 and 10'));

    if (guess === randomNumber) {
        guessCorrect = true;
    }
} while (!guessCorrect);

document.write('It took you ' + attempt + " try's to guess " + randomNumber)