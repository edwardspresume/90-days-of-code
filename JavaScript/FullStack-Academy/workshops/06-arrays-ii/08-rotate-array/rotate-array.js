// YOUR CODE BELOW
console.clear();

// const rotateArray = (originalArray, rotateNum) => {
//     let front = originalArray.slice(-rotateNum);
//     let back = originalArray.slice(0, -rotateNum)


//     return front.concat(back);
// }



/* ==========================================================================
                                 Alternative
   ========================================================================== */

const rotateArray = (originalArray, rotateNum) => {

    let rotatedArray = originalArray.slice();
    let direction = (rotateNum > 0) ? 'right' : 'left';

    // The modules operation indicates that we should never be more then size of the array
    for (let i = 0; i < Math.abs(rotateNum) % originalArray.length; i++) {

        if (direction === 'right') rotatedArray.unshift(rotatedArray.pop());
        else rotatedArray.push(rotatedArray.shift())
    }

    return rotatedArray;
}

console.log(rotateArray([1, 2, 3, 4, 5], 122));