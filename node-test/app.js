const fileSystem = require('fs');

// Create a new file
fileSystem.writeFileSync('hello.txt', 'Hello from node js');

const focus = ['Programming', 'Reading', 'Thinking', 'Writing'];

fileSystem.writeFileSync('Focus.txt', focus);