// YOUR CODE BELOW

const you = {
    name: 'James',
    getGreeting() {
        return `Hi, my name is ${this.name}.`
    }
}

const me2 = {
    name: 'Edwards',
    getGreeting(you) {
        return `Hi ${you.name}, my name is ${this.name}.`
    }
}