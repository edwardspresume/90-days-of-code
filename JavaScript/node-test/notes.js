/* Core Modules : 
// http: create a server, send requests
// https: Create a SSL server
// js: create new files
// path: navigate through file system
// os: operating system
*/
const fileSystem = require('fs');

// require('./[module name]') to use are own local module

// Create a new file
fileSystem.writeFileSync('hello.txt', 'Hello from node js');

// Creating a new file to store our list as content
const focus = ['Programming', 'Reading', 'Thinking', 'Writing'];
fileSystem.writeFileSync('Focus.txt', focus);