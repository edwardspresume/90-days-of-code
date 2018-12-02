console.log('\x1Bc'); //Clear console


const testLetters = () => {
    let letters = 'abcdefg';

    for (let i = letters.length - 1; i >= 0; i--) {
        let currentLetter = letters[i];
        console.log(currentLetter);
    }
}