console.clear();

let data = [{
        firstName: "Edwards",
        lastName: "Elric",
        number: "845-792-5323"
    },
    {
        firstName: "James",
        lastName: "Luke",
        number: "845-232-1232"
    },

    {
        firstName: "Kyle",
        lastName: "Larsen",
        number: "845-322-3232"
    },

    {
        firstName: "Steve",
        lastName: "Zoom",
        number: "424-323-2323"
    }
];

const lookupInfo = (name, prop) => {
    for (contact of data)
        if (contact.firstName === name) return contact[prop] || `No such prop named ${prop}`;

    return `${name} does not exist`;
};

/* ==========================================================================
                            Filtered and Squared list
   ========================================================================== */

const numbers = [4, 5.6, -9.8, 3.14, 42, 6, 8.34 - 2];

const squareList = array =>
    array.filter(num => Number.isInteger(num)).map(num => num * num);

// console.log(squareList(numbers));

/* ==========================================================================
                Reassigning values through destruction
   ========================================================================== */

let a = 10;
let b = 20;

if (a < b)[a, b] = [b, a];

// console.log(b);

/* ==========================================================================
                    Removing the first two values of an array
   ========================================================================== */
const source = [1, 2, [99, 11], 3, 4, 5, 6, 7, 8, 9, 10];

const removeFirstTwo = array => {
    const [one, two, ...newArray] = array;

    newArray[0][0] = 112; // This does not mutate the original;
    return newArray;
};

// console.log(removeFirstTwo(source));

/* ==========================================================================
                                 Make List
   ========================================================================== */

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "line-break"],
    success: ["id-blacklist", "no-dup-keys"]
};

const makeList = data => {
    let list = data.map(element => `<li class="text-warning">${element}</li>`);

    return list;
};

// console.log(makeList(result.failure));

/* ==========================================================================
                            Return Completed tasks
   ========================================================================== */

const todo = [{
        title: 'Watch videos in folder',
        isDone: true
    },
    {
        title: 'Refine notes',
        isDone: false
    },

    {
        title: 'Eat',
        isDone: true
    }
]

const completedTasks = todo.filter(task => task.isDone).map(task => task.title)


console.log(completedTasks);