// YOUR CODE BELOW
const defaultGreet = (firstName, lastName = 'Doe') => {
    let greet = `Hi ${firstName} ${lastName}!`;
    return greet;
}

// const defaultGreet = (firstName , lastName = 'Doe') => `Hi ${firstName} ${lastName}!`;