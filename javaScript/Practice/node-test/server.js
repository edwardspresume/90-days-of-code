const http = require('http');

/* 
// A named request function for our server.
- function requestListener(request, respond) {}
- http.createServer(requestListener)

- http.createServer((request, respond) => {}) // Anonymous function for the createServer method
*/


const server = http.createServer((request, response) => {

    // console.log(request) // Logs the request object
    // process.exit() // Exits the event loop 

    const url = request.url;

    /* -------------------------------------------------------------- Response -------------------------------------------------------------- */

    response.setHeader('Content-Type', 'text/html') // Indicate what type of content were sending back
    response.write('<html>');
    response.write('<head><title>My first page</title></head>');
    response.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    response.write('</html>');
    response.end(); // End after writing response to send it back to client


    /* -------------------------------------------------------------- Debug -------------------------------------------------------------- */

    console.log(`Url ${url}`);
    console.log(`Method: ${request.method}`);
    console.log('Headers:', request.headers);
});


server.listen(3000); // Listen for incoming requests. 3000 is the port for our localhost