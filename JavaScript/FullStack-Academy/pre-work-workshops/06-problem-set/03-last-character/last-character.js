// YOUR CODE BELOW
const lastCharacter = (word1, word2) => {
    if (word1[word1.length - 1] === word2[word2.length - 1]) {
        return true;
    } else {
        return false;
    }
}

const lastCharacter = (text1, text2) => (text1[text1.length - 1] === text2[text2.length - 1]) ? true : false;