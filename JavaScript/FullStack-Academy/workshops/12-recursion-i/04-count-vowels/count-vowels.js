// YOUR CODE BELOW
console.clear();

const countVowels = (string) => {

    if (string.length === 0) return 0;

    else {

        let vowelCounter = 0;
        const VOWELS = 'aeiouAEIOU';

        let firstChar = string[0];

        // Can also use indexOf if ever needed
        if (VOWELS.includes(firstChar)) vowelCounter++;

        string = string.slice(1);

        return vowelCounter + countVowels(string);
        // or return vowelCounter + countVowels(string.slice(1))
    }
}

console.log(countVowels('Four score and seven years'));

/* ==========================================================================
                                 Alternative 2
   ========================================================================== */

const countVowels = (string) => {

    // If the string is empty return 0;
    if (string.length < 1) return 0;

    else {

        let vowelCounter = 0;

        // Vowel indicator
        const VOWELS = {
            a: true,
            A: true,
            e: true,
            E: true,
            i: true,
            I: true,
            o: true,
            O: true,
            u: true,
            U: true,
        }

        // Get the first char of the string
        let firstChar = string[0];

        // Check if the current first char is a vowel;
        if (VOWELS[firstChar]) vowelCounter++;

        // Remove the first char of the string after check.
        string = string.slice(1)


        // Add up the vowelCounter for each iteration of the string
        return vowelCounter + countVowels(string);


    }
}



/* ==========================================================================
    Alternative if we just wanted to return the number of vowels in a string
   ========================================================================== */

// const countVowels = (string) => {

//     const vowelsOfString = string.match(/[aeiou]/gi);
//     return vowelsOfString.length;
// }