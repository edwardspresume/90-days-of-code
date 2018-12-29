// Define a function isPrime/is_prime() that takes one integer argument and returns true/True or false/False depending on if the integer is a prime.

// Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

// Example
// bool isPrime(5) = return true

console.clear();

/* ==========================================================================
                                 Logic
   ========================================================================== */

// function isPrime(num) {

//     if (num < 1) return false;

//     if (num === 2 || num === 3) return true;

//     if (!Number.isInteger(num / 2)) {

//         if (!Number.isInteger(num / 3)) return true;
//     }

//     return false;
// }




/* ==========================================================================
                                 Alternative
   ========================================================================== */


const isPrime = (num) => {

    for (let i = 2; i < num; i++) {

        if (num % i === 0) return false;
    }

    return num >= 2;
}

console.log(isPrime(4));