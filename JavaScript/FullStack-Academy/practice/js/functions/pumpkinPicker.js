console.clear();

/* ==========================================================================
                                 Data
   ========================================================================== */


const pumpkinPatch = {
    meadow: {
        byTheRock: "apples",
        byThePuddle: "pumpkin"
    },
    hill: {
        byTheBench: {
            leftOfBench: "pumpkin",
            rightOfBench: "pumpkin"
        },
        topOfHill: "apples"
    }
};

/* ==========================================================================
                                 Logic
   ========================================================================== */


const pumpkinPicker = patch => {

    let pumpkinCounter = 0;

    const isObject = (key) => (!(Array.isArray(key)) && (typeof key === 'object')) ? true : false;

    for (let keys in patch) {

        let currentPatch = patch[keys];

        if (isObject(currentPatch)) pumpkinCounter += pumpkinPicker(currentPatch);

        else if (currentPatch === 'pumpkin') pumpkinCounter += 1;

    }

    return pumpkinCounter;
}