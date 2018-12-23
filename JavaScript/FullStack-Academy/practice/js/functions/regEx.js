console.clear();
const text = 'j1s2 i3s4 t5h6e b7e8s9t';
let stringFilter = str => {

    // The * means look for instances of i and i follow n number of s's
    let reg = /is*/g;

    // Looks for instances of a or a followed by n number of a's
    let a_n = /a+/g;

    // the string has to be the word text. ^ means the string has to start with that word & $ mean the string has to end with that word
    let singleWord = /^text$/;

    let regEx = /\d/g;

    // Break the text into segments of 3's
    let segmentsOfThree = /.{1,3}/;

    return str.replace(regEx, '');
}

// console.log(stringFilter('This is the first test.'));
console.log(stringFilter(text));