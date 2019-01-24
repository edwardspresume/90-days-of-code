const fs = require("fs");

const routes = (request, response) => {
  const { url, method, headers } = request;

  // console.log(request) // Logs the request object
  // process.exit() // Exits the event loop

  if (url === "/") {
    // Send back the html response below if the user is at the home page
    response.write(`
        <html>
            <head><title>Server | Home</title></head>
            <body>
                <h1>Enter a message below</h1>
                <form action='/message' method='POST'>
                    <input type='text' name='message'>
                    <button type='submit'>Send</button>
                </form>
            </body>
        </html>
        `);

    return response.end();
  }

  if (url === "/message" && method === "POST") {
    const body = [];

    request.on("data", chunk => body.push(chunk)); // Store the raw data in the body[];

    return request.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];

      fs.writeFile("message.txt", message, error => {
        response.statusCode = 302;
        response.setHeader("Location", "/");
        return response.end();
      });
    });
  }

  /* -------------------------------------------------------------- Response -------------------------------------------------------------- */

  response.setHeader("Content-Type", "text/html"); // Indicate what type of content were sending back
  response.write("<html>");
  response.write("<head><title>My first page</title></head>");
  response.write("<body><h1>Hello from my Node.js Server!</h1></body>");
  response.write("</html>");
  // response.end(); // End after writing response to send it back to client

  /* -------------------------------------------------------------- Debug -------------------------------------------------------------- */
  console.log("Url:", url);
  console.log("Method:", method);
  console.log("Headers:", headers);
};

module.exports = routes;
