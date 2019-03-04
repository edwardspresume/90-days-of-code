console.clear();

const isPangram = sentence => {

  // for (let i = 97; i < 123; i++) alphabet += String.fromCharCode(i); // Generate alphabet

  // let arr = [...Array(26)]
  //   .map(_ => String.fromCharCode(i++), (i = 97))
  //   .join("");

  let alphabetLetters = "abcdefghijklmnopqrstuvwxyz".split(""); // Store the alphabet as an array

  // loop through the alphabet array
  for (let i = 0; i < alphabetLetters.length; i++) {

    let letter = alphabetLetters[i]; // Store the current letter of the array

    // If the given sentence contains a letter from the alphabet, remove the letter from the array;
    if (sentence.includes(letter)) delete alphabetLetters[i];
  }

  // If the array does not contain any letters return true else false;
  return alphabetLetters.join("").length === 0;
};

/* ==========================================================================
                                 Alternative
   ========================================================================== */

// const solution = sentence => {
//   const string = sentence.toLowerCase();

//   return (
//     "abcdefghijklmnopqrstuvwxyz"
//       .split("")
//       .filter(letter => string.indexOf(letter) === -1).length === 0
//   );
// };

/* ==========================================================================
                                 Alternative
   ========================================================================== */
const solution = string =>
  (string.match(/([a-z])(?!.*\1)/gi) || []).length === 26;

console.log(isPangram("The quick brown fox jumps over the lazy ogg"));
