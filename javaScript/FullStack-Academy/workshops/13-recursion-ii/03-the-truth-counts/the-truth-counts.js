// YOUR CODE BELOW


const theTruthCounts = (array) => {

    let counter = 0;

    array.forEach(element => {

        if (Array.isArray(element)) {


            counter += theTruthCounts(element)
        } else {
            if (!!element) counter++;
        }
    });

    return counter;
}


theTruthCounts([0, [true, ['yes']]]); // => 2