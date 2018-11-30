// YOUR CODE BELOW
const myIndexOf = (source, searchValue, startIdx = 0) => {

    if (typeof searchValue === 'string') {

        for (let i = startIdx; i <= source.length - searchValue.length; i++) {
            let substring = source.slice(i, i + searchValue.length);

            if (substring === searchValue) {
                return i;
            }
        }


        return -1;

    } else `A valid search value is not given`
}

console.log(myIndexOf('edwards', 'd'));