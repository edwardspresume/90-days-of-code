function myUnshift(array, anyValue) {

    let newArray = [];
    newArray.push(anyValue)

    for (let i = 0; i < array.length; i++) {

        newArray.push(array[i])
    }

    return newArray;
}

myUnshift([1, 2, 3], 0)