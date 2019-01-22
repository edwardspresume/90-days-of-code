console.clear();

/* ==========================================================================
                        Return a random element from an array
   ========================================================================== */


let pickRandom = array => {

    if (!array || !Array.isArray(array)) console.error('Need an array');
    let index = Math.floor(Math.random() * array.length);

    return array[index]
}


/* ==========================================================================
                                 largestThreeDigitNum
   ========================================================================== */


function largestThreeDigitNum(digits) {
    let maxNum = Number(digits.slice(0, 3));

    for (let i = 1; i < digits.length - 2; i++) {
        let nextNum = Number(digits.slice(i, i + 3));
        if (nextNum > maxNum) maxNum = nextNum;
    }

    return maxNum;
}


/* ==========================================================================
                                 Animal tree
   ========================================================================== */


let categories = [{
        id: 'animals',
        parent: null
    },
    {
        id: 'mammals',
        parent: 'animals'
    },
    {
        id: 'cats',
        parent: 'mammals'
    },
    {
        id: 'dogs',
        parent: 'mammals'
    },
    {
        id: 'chihuahua',
        parent: 'dogs'
    },
    {
        id: 'labrador',
        parent: 'dogs'
    },
    {
        id: 'persian',
        parent: 'cats'
    },
    {
        id: 'siamese',
        parent: 'cats'
    },
]



const makeTree = (categories, parent) => {

    let tree = {};

    categories
        .filter(object => object.parent === parent)
        .forEach(object => tree[object.id] = (object.parent === 'dogs' || object.parent === 'cats') ? null : makeTree(categories, object.id));

    return tree;
}


console.log(JSON.stringify(makeTree(categories, null), null, 2));