// YOUR CODE BELOW
console.clear();

const getDogBreeder = (defaultName = 'max', defaultAge = 3) => {

    function dogBreeder(name = defaultName, age = defaultAge) {

        if (typeof name === 'number') {
            age = name;
            name = defaultName;
        }

        return {
            name,
            age
        }
    }

    return dogBreeder;
}


let puppyFarm = getDogBreeder('Snoopy', 0);

console.log(getDogBreeder()());