// YOUR CODE BELOW
console.clear();

/* ==========================================================================
                                 Data
   ========================================================================== */
let systems = {
    power: {
        batteries: true,
        solarCells: false,
        generator: true,
        fuelCells: true
    },
    telecoms: {
        antennas: {
            highGain: true,
            mediumGain: true,
            lowGain: true
        },
        transmitter: true,
        receiver: true
    },
    attitudeControl: {
        stabilization: {
            spin: true,
            threeAxis: true
        }
    },
    propulsion: {
        engines: {
            engine1: true,
            engine2: true,
            engine3: false
        },
        thrusters: true,
        propellant: true
    },
    environment: {
        cooling: true,
        heating: true,
        lifeSupport: true
    }
};

/* ==========================================================================
                                 Logic
   ========================================================================== */

const allSystemsGo = (systemsObject) => {

    let readyToLaunch = true;

    for (let keys in systemsObject) {

        let currentSystem = systemsObject[keys];

        if (isObject(currentSystem)) currentSystem = allSystemsGo(currentSystem);

        if (!currentSystem) readyToLaunch = false;
    }

    return readyToLaunch
}


// Helper function to check if an objects key is an object
const isObject = (key) => {
    if (!Array.isArray(key) && typeof key === 'object') return true;
    else return false;
}

console.log(allSystemsGo(systems));















/* ==========================================================================
                                 Test 1
   ========================================================================== */

// const allSystemsGo = (systemsObject) => {
//     debugger;
//     let go = true;
//     for (let keys in systemsObject) {

//         let currentSystem = systemsObject[keys];

//         if (!Array.isArray(currentSystem) && typeof currentSystem === 'object') {

//             go = (currentSystem);

//         } else {
//             if (currentSystem === false) {
//                 go = false;

//             }
//         }

//     }
//     return go
// }