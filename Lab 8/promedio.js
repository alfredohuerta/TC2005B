let preguntaPromedio = document.getElementById('pregunta_1');

let array = [10, 20, 50, 100, 24, 69];
let prom = 0;

function promedio(){
    console.log("funciona")
    for (let index = 0; index < array.length; index++) {
        prom = prom + index;
    }
    prom = prom/index.length;
    document.getElementById('arreglo').innerText = array;
    document.getElementById('promedio').innerText = prom;
}