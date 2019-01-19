console.clear();

const isPangram = (sentence) => {

    // Store the alphabet as an array
    let alphabetLetters = 'abcdefghijklmnopqrstuvwxyz'.split('');

    // loop through the alphabet array
    for (let i = 0; i <= alphabetLetters.length - 1; i++) {

        // Store the current letter of the array
        let letter = alphabetLetters[i];

        // If the given sentence contains a letter from the alphabet, remove the letter from the array;
        if (sentence.includes(letter)) delete alphabetLetters[i];
    }

    // If the array does not contain any letters return true else false;
    return alphabetLetters.join('').split('').length === 0
}

console.log(isPangram('The quick brown fox jumps over the lazy ogg'));