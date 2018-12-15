console.clear();

class Person {

    constructor(name, yob, job) {
        this.name = name;
        this.yob = yob;
        this.job = job;
    }

    calculateAge() {
        return 2018 - this.yob;
    }
}

class Programmer extends Person {

    // constructor(language) {
    //     this.language = language

    // }

    // super(name, yob, job)
}

let ed = new Programmer('edwards', 1993, 'Software engineer');

console.info(ed)