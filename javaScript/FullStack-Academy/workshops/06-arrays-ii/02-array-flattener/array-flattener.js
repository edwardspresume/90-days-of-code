// YOUR CODE BELOW
console.clear();

const arrayFlattener = (twoDimensionalArray) => {

    let flattenArray = [];

    for (baseElement of twoDimensionalArray) {

        if (Array.isArray(baseElement)) {

            let innerArray = baseElement;

            for (innerElement of innerArray) {

                flattenArray.push(innerElement);
            }

        } else flattenArray.push(baseElement);
    }

    return flattenArray;
}

console.log(arrayFlattener([1, [2, 3], 4]));


/* ==========================================================================
                                 Alternative
   ========================================================================== */

function arrayFlattener2(twoDimensionalArray) {
    let flatArray = [];

    for (let i = 0; i < twoDimensionalArray.length; i++) {
        let element = twoDimensionalArray[i];

        // if the element is an array...
        if (Array.isArray(element)) {

            // ...just concat the array onto flatArray
            flatArray = flatArray.concat(element);
        } else {
            flatArray.push(element);
        }
    }

    return flatArray;
}