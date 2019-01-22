// YOUR CODE BELOW
console.clear();


const deeperCopy = (array) => {
    let copyArray = [];

    for (let i = 0; i < array.length; i++) {
        let currentElement = array[i]

        if (Array.isArray(currentElement)) {

            let innerArray = [];

            for (let j = 0; j < currentElement.length; j++) {
                let innerElement = currentElement[j];
                innerArray.push(innerElement)
            }

            copyArray.push(innerArray)

        } else copyArray.push(currentElement);
    }

    return copyArray;
}