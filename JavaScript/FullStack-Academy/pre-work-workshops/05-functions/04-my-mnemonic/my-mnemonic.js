// YOUR CODE BELOW
const myMnemonic = (...words) => {

    let mnemonic = '';

    for (word of words) {
        let currentWord = word;
        let currentChar = currentWord[0]
        mnemonic += currentChar;
    }

    return mnemonic;

}

console.log(myMnemonic('First item', 'Second', 'adasdsa', 'asdasdasd', 'ffd'));