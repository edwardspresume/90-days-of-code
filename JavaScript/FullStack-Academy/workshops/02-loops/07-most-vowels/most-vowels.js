// YOUR CODE BELOW
const mostVowels = (text) => {

    const lowerCaseText = text.toLowerCase();
    const wordArray = lowerCaseText.split(' ');
    let mostVowelWord = '';
    let currentWord = '';
    let currentVowelCount = 0;


    for (words of wordArray) {


        if (words.includes('a', 'e', 'i', 'o', 'u', 'y')) {

            // console.log(words);
        }
    }

    // if (lowerCaseText.includes('a', 'e', 'i', 'o', 'u', 'y')) {

    //     for (let i = 0; i < lowerCaseText.length; i++) {

    //         if (lowerCaseText[i] !== ' ' && i < lowerCaseText.length - 1) {
    //             currentWord += lowerCaseText[i];
    //         }
    //     }

    //     return currentWord;
    // }

    // return currentWord;
}


mostVowels('I am a keeper with some real rhythms');

// console.log(mostVowels('I am a keeper with some real rhythms'));