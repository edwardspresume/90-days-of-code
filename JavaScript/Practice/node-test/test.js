console.clear();

const fs = require('fs');
const http = require('http');

const server = http.createServer((request, response) => {

    const {
        url,
        method,
        headers
    } = request;


    if (url === '/') {

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
        response.end();
    }

    if (url === '/message' && method === 'POST') {

        const body = [];

        request.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });

        return request.on('end', () => {

            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];

            fs.writeFile('message.txt', message, (error) => {
                response.statusCode = 302;
                response.setHeader('Location', '/');
                response.end();
            });
        });

    }

    /* -------------------------------------------------------------- Debug -------------------------------------------------------------- */
    // console.log('Url:', url);
    // console.log('Method:', method);
    // console.log('Headers:', headers)
});

server.listen(3000);