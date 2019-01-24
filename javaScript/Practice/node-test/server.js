const http = require("http");
const routes = require("./routes");

const server = http.createServer(routes);

server.listen(3000); // Listen for incoming requests. 3000 is the port for our localhost
