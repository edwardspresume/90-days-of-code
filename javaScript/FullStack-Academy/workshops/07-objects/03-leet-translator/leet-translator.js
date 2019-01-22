console.clear();

let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let leetChars = ['@', '8', '(', '|)', '3', 'ph', 'g', '#', 'l', '_|', '|<', '1', "|'|'|", '/\/', '0', '|D', '(,)', '|2', '5', '+', '|_|', '|/', "|/|/'", '><', 'j', '2'];

// YOUR CODE BELOW

// const leetTranslator = (string) => {

//     let translatedString = '';

//     for (let i = 0; i < string.length; i++) {

//         let currentLetter = string[i].toLowerCase();
//         let currentIdx = letters.indexOf(currentLetter);

//         translatedString += leetChars[currentIdx];
//     }

//     return translatedString;
// }



/* ==========================================================================
                                 Alternative
   ========================================================================== */


const leetTranslator = (string) => {

    // Create var to store the translated string
    let translatedString = '';

    // Helper function to pair up all the letters with their leetChars
    const translatorCompiler = (stringInput) => {

        let translator = {};

        for (let i = 0; i < letters.length; i++) {
            let currentLetter = letters[i];
            translator[currentLetter] = leetChars[i];
        }

        return translator[stringInput];
    }

    // Loop through all the chars of the given string
    for (let i = 0; i < string.length; i++) {

        let currentLetter = string[i].toLowerCase();
        translatedString += translatorCompiler(currentLetter);
    }

    return translatedString;
}

console.log(leetTranslator('Fullstack'))