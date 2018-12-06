// YOUR CODE BELOW
console.clear();

let addsNums = {
    addTen: function (num) {
        return num + 10;
    },

    addTwenty: function (num) {
        return num + 20;
    },

    someProperty: 'value'
};


const callThemAll = (object, num) => {

    let results = [];

    for (let key in object) {

        let currentProp = object[key];

        if (typeof currentProp === 'function') results.push(currentProp(num))
    }

    return results;
}

console.log(callThemAll(addsNums, 100));