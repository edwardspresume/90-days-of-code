// YOUR CODE BELOW
const myMnemonic = (...words) => {

    let mnemonic = '';

    for (word of words) {
        let currentWord = word;
        let currentChat = currentWord[0]
        mnemonic += currentChat;
    }

    return mnemonic;

}

console.log(myMnemonic('First item', 'Second', 'adasdsa', 'asdasdasd', 'ffd'));