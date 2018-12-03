// YOUR CODE BELOW
console.clear();
// const compareObjects = (obj1, obj2) => JSON.stringify(obj1) === JSON.stringify(obj2);

/* ==========================================================================
                                 Alternative
   ========================================================================== */

const compareObjects = (objectOne, objectTwo) => {

    objectOneKeys = Object.keys(objectOne);
    objectTwoKeys = Object.keys(objectTwo);
    // objectTwoKeys3 = Object.getOwnPropertyNames(objectTwo);


    if (objectOneKeys.length !== objectTwoKeys.length) return false;

    return true
}



console.log(compareObjects({
    name: 'nick'
}, {
    name: 'nick'
}));