const http = require('http');

/* 
// A named request function for our server.
- function requestListener(request, respond) {}
- http.createServer(requestListener)

// Anonymous function for the createServer method
- http.createServer((request, respond) => {})
*/


const server = http.createServer((request, respond) => console.log(request));

// Listen for incoming requests. 3000 is the port for our localhost
server.listen(3000);