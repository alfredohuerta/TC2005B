const filesystem = require('fs');
function doc_TXT(contenido){
    filesystem.writeFileSync('doc.txt', contenido);
}

const http = require('http');

const server = http.createServer( (request, response) => {
    response.writeHead(200, {"Content-type": "text/html"});
    const html = filesystem.readFileSync(__dirname + "/public/index.html");
    response.end(html);
});

console.log('Creo que esto funciona...');

server.listen(3000);