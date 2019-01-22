// YOUR CODE BELOW
const mostVowels = text => {

    const wordArray = text.replace(/[,.]/g, '').split(" ");

    let mostVowelWord = "";
    let currentWord = "";
    let vowelCount = 0;
    console.log(wordArray);

    for (word of wordArray) {
        currentWord = word.match(/[aeiou]/gi);

        if (currentWord !== null) {
            if (currentWord.length > vowelCount) {

                vowelCount = currentWord.length;
                mostVowelWord = word;
            }
        }
    }
    return mostVowelWord;
};

console.log(mostVowels("Give her hell from us, Peeves."));


/* ==========================================================================
                                 Alternative
   ========================================================================== */


// const mostVowels = (text) => {
//     debugger;

//     let wordArray = text.replace(/[,.]/g, '').split(' ');
//     const VOWELS = 'aeiouAEIOU';
//     let maxVowelCount = 0;
//     let maxVowelWord = '';

//     for (word of wordArray) {

//         let currentVowelCount = 0;

//         for (char of word) {

// Or VOWELS.includes(char);
//             if (VOWELS.indexOf(char) !== -1) currentVowelCount++;
//         }

//         if (currentVowelCount > maxVowelCount) {
//             maxVowelCount = currentVowelCount;
//             maxVowelWord = word;
//         }
//     }

//     return maxVowelWord;
// }