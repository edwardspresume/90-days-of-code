console.clear();
const file = require('./module');

/* ==========================================================================
                                 Data input
   ========================================================================== */


let address = "244 North main, Spring valley, NY 10977";
let number = "(845)-793-6333";
let email = "testEmail@aol.com";


/* ==========================================================================
                                 RegEx
   ========================================================================== */


// The * means look for instances of i and i follow n number of s's
let reg = /is*/g;

// Looks for instances of a or a followed by n number of a's
let a_n = /a+/g;

// Break the text into segments of 3's
let segmentsOfThree = /.{1,3}/;

// the string has to be the word text. ^ means the string has to start with that word & $ mean the string has to end with that word
let singleWord = /^text$/;

// (.) the dot means we can match anything. If we want to match the dot we have to \escape it
let regExAnything = /.+/;

// Get the digits at the start of the string
let regExStreetNumber = /^\d+/;

// Capitalize letters followed by a space and a 5 number digit that only appears at the end.
let regExStateZip = /[A-Z]+\s\d{5}$/;

//The character class: [] states that we can match any of the char's within it. If we used the carrot symbol (^) were saying any char's that is not the ones we listed
let regExPhoneNumber = /^[\d\-\s]+$/;
// let regExPhoneNumber = /\(?\d{3}[-.)]+\d{3}-\d{4}/;

let regExEmail = /\w+@\w+\.(net|com|org)/;

let typeOfEngineer = /(Software|Hardware) engineer/i


/* ==========================================================================
                                 First/Last name switch
   ========================================================================== */


let firstThenLast = "Edwards Presume";

// Capture groups using ()
let getFirstAndLast = /(\w+) (\w+)/;

let group = firstThenLast.match(getFirstAndLast);

let lastCommaFirst = firstThenLast.replace(getFirstAndLast, '$2, $1');

// console.log(group[1]);

// console.log(group);

// console.log(lastCommaFirst);


/* ==========================================================================
                                 Date And Host
   ========================================================================== */


const cvs = `Date, Host
02-04-2018, Steve
05-15-2018, Edwards
07-09-2018, Steve
09-25-2018, Edwards`;

const dateAndHost = /^([\d-]+), (\w+)$/

const show = cvs
   .split('\n')
   .filter(line => line.match(dateAndHost))
   .map(line => line.replace(dateAndHost, '$2 hosted the show on $1')).join('\n')

// console.log(show);


/* ----------------------------------------- Correct Host ----------------------------------------- */
let inputOne = 'Edwards hosts RegEx101';
let inputTwo = 'Kyle hosts nextJs';

// (?:) states that were not capturing this group
let extractChannelIfCorrectHost = /(?:Edwards?|Steve) hosts (.+)/i;
let channel = inputOne.match(extractChannelIfCorrectHost)[1]


// console.log(channel);


/* ==========================================================================
                     Replace site name and url link element
   ========================================================================== */


let site = '[Google] (https://www.google.com)';

// (*?) states the asterisk quantifier should not be greedy and over reach unintended matches
const siteNameAndUrl = /\[(.*?)] \((https?.*?)\)/

const link = site.replace(siteNameAndUrl, `<a href ='$2'>$1</a>`)

// console.log(link);



/* ==========================================================================
                     Replace duplicated characters
   ========================================================================== */


const string = 'abbccddeff';


// (\1) states that we are to match the grouped item followed by a second occurrence of it.
const duplicatedChar = /(\w+)\s?\1/g;

let cleanString = string.replace(duplicatedChar, '');

console.log(cleanString);