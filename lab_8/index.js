//Primera función que regresa el promedio de un arreglo.
const arreglo = [20, 50, 100, 180, 2820, 18374, 133];

function prom(arr){
    let suma = 0; 
    for(let i of arr){
        suma = suma + i;
    }

    return (suma/arreglo.length);
}

console.log("Arreglo: ", arreglo);
console.log("Primera función que devuelve el promedio de un arreglo", prom(arreglo));

//Segunda función. Recibe un string y lo escribe en un archivo de texto
const filesystem = require('fs');

function escribirTexto(contenido){
    filesystem.writeFileSync('doc.txt', texto);
}

/*let texto = "Nombre del estudiante: Erick Alfredo García Huerta | Matrícula: A01708119";
escribirTexto(texto);*/

const http = require('http');

const server = http.createServer( (request, response) => {
    response.writeHead(200, {"Content-type": "text/html"});
    const html = filesystem.readFileSync(__dirname + "/public/index.html");
    response.end(html);
});

server.listen(3000);