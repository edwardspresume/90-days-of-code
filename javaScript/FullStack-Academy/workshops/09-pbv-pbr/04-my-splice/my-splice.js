console.clear();

/* ==========================================================================
                                 Data
   ========================================================================== */

let myArray = [1, 2, 3];


/* ==========================================================================
                                 Logic
   ========================================================================== */


const mySplice = (array, startIdx = 0, deleteCount = 0, ...values) => {

    let keptElements = [];
    let removedElements = [];

    for (let i = 0; i < startIdx; i++) {
        keptElements.push(array.shift())
    }

    for (let i = 0; i < deleteCount; i++) {
        removedElements.push(array.shift())
    }

    for (element of values) {
        array.unshift(element)
    }

    for (let i = keptElements.length - 1; i >= 0; i--) {

        let currentElement = keptElements[i];
        array.unshift(currentElement);
    }

    return removedElements;
}

mySplice(myArray, 0, 1, 'sdasd', 'test');

console.log(`----------------------------- Mutate -----------------------------`);
console.log(myArray);