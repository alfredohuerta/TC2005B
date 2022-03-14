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

/*Tercera función. Problema hecho en otro lenguaje ejecutado en node. Programa que realice una suma iterativa y 
recursiva en un ciclo de longitud n. Así como una suma directa.*/
let n1= 10;
let n2= 11;
let n3= 5;
let n4= 12;

//suma iterativa
function sum_ite(n){
    let suma = 0; 
    for(let i = 0; i < n; i++){
        suma= suma + i;
    }

    return (suma);
}

//Suma recursiva
function sum_rec(n){
    if (n <= 0){
        return 0;
    }else{
        return n + sum_rec(n-1);
    }
}

//suma directa
function sum_dir(n, m){
    let ans= n+m;
    return ans;
}

console.log("Función que regresa una suma iterativa =", sum_ite(n1), "n=", n1);
console.log("Función que regresa una suma recursiva =", sum_rec(n2), "n=", n2);
console.log("Función que regresa una suma directa =", sum_dir(n3, n4), "n=", n3, "m=", n4);

//Segunda función. Recibe un string y lo escribe en un archivo de texto
const filesystem = require('fs');

function escribirTexto(contenido){
    filesystem.writeFileSync('doc.txt', texto);
}

let texto = "Nombre del estudiante: Erick Alfredo García Huerta | Matrícula: A01708119";
escribirTexto(texto);

const http = require('http');

const server = http.createServer( (request, response) => {
    response.writeHead(200, {"Content-type": "text/html"});
    const html = filesystem.readFileSync(__dirname + "/public/index.html");
    response.write("<table class='table'><thead><tr><th scope='col'>Erick Alfredo García Huerta</th><th scope='col'>A01708119</th><th scope='col'>Laboratorio 8</th></tr></thead></table>");
    response.write("<p>Esto fue escrito desde index.js<p>");
    response.end(html);
});

server.listen(3000);