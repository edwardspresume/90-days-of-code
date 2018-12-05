// YOUR CODE BELOW
console.clear();


const frequencyAnalysis = (string) => {

    let letterCounter = {}
    let lowerCaseString = string.toLowerCase();
    let total = 0;

    for (let i = 0; i < string.length; i++) {

        let currentLetter = string[i];


        letterCounter[currentLetter] = i;

    }


    return letterCounter;
}

console.log(frequencyAnalysis('abcaa'));