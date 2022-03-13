const http = require('http');
const fs = require('fs');

const page = fs.readFileSync(`${__dirname}/public/index.html`, 'utf-8');

const server = http.createServer();

server.on('request', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.end(page);
});

server.listen(3000, 'localhost', () => {
    console.log('Server waiting for request');
});