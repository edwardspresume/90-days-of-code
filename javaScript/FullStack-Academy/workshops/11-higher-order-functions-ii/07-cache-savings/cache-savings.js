// YOUR CODE BELOW
console.clear();

const cacheSavings = (callback) => {

    let cache = {};

    return function (arg) {

        if (!(arg in cache)) {
            let callbackResult = callback(arg);
            cache[arg] = callbackResult
        }

        return cache[arg]
    }
}

function adds10(num) {
    let start = Date.now();
    let end = Date.now();

    // pause for 3 seconds, to make the function expensive!
    while (end - start < 3000) {
        end = Date.now();
    }

    return num + 10;
}
let cachedAdds10 = cacheSavings(adds10);

console.log(cachedAdds10(20));
console.log(cachedAdds10(0));
console.log(cachedAdds10(20));