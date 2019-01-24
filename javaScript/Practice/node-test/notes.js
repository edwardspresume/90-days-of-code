/* Core Modules:

(http): create a server, handle request/response
(https): Create a SSL server
(fs): create and read files
(path): navigate through file system
(os): operating system

*/

const fs = require("fs");

// Create a new file
fs.writeFileSync("textFiles/hello.txt", "Hello from node js");

// Creating a new file to store our array as content
const focus = ["Programming", "Reading", "Thinking", "Writing"];
fs.writeFileSync("textFiles/Focus.txt", focus);

/************

// We need to have a callback func for async.
const initialRead = fs.readFile("text.txt", "utf8", (error, result) => {
  // The readFile() takes some time to read so the program will run the next line of code i.e 'Started reading' as it loads;
  // This is possible through async, where we don't have to wait to execute each line of code.
  console.log("Done reading");
});

console.log("Started reading");

************/

// fs.readFile("textFiles/text.txt", "utf8", (error, result) => console.log(result));

fs.readFile("textFiles/text.txt", "utf8", (error, content) => {
  content
    .split("\n")
    .filter(line => line.match(/line/i))
    .forEach(line => console.log(line));
});

/* 
// A named request function for our server.
- function requestListener(request, respond) {}
- http.createServer(requestListener)

- http.createServer((request, respond) => {}) // Anonymous function for the createServer method
*/
