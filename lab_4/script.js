let array = [-96, 96, -75, 36, 81, 58, 9, 13, 92, 15, 2, 43, 90, 40, 45, 89, 80, -23, 0, 1, 20, ];
let matrix = [[21, 58, 10, 62, 70], [30, 4, 16, 89, 63], [92, 2, 41, 83, 79], [24, 51, 64, 14, 73], [62, 70, 78, 20, 67]];
let aux = 0;

function problema1(){
    let tabla;
    let numero = prompt("Ingrese un número para la tabla");

    tabla += "<table><tr><th>Numero</th><th>Cuadrado</th><th>Cubo</th></tr>";

    for (let i = 1; i <= numero; i++){
        tabla += `<tr><td>${i}</td><td>${i*i}</td><td>${i*i*i}</td></tr>`;
    }
    tabla += "</table>";

    document.getElementById("problema1").innerHTML = tabla;
};

function problema2(){
    let num1= Math.floor(Math.random() * 100 + 1);
    let num2= Math.floor(Math.random() * 100 + 1);
    let resultado = num1 + num2;

    let inicio = Date.now();
    let respuesta = prompt("Resuelve la siguiente suma" + num1 + " + " + num2 + " = ");
    let final = Date.now();

    let tiempoFinal = (inicio + final)/1000;

    let respuestaFInal = `La respuesta es: ${respuesta === resultado ? 'correcta' : 'incorrecta'}. Tiempo tomado: ${tiempoFinal}`;

    document.getElementById("problema2").innerHTML = respuestaFInal;
};

function problema3(array){
    let neg = 0;
    let zeros = 0;
    let posi = 0;

    for (let i = 0; i < array.length; i++){
        if(array[i] > 0){
            posi++;
        } else if(array[i] === 0){
            zeros++;
        } else{
            neg++;
        }
    }

    let respuestaFInal = `Arreglo = ${array} <br> Números positivos = ${posi} <br> Ceros = ${zeros} <br> Números negativos = ${neg} <br>`;
    document.getElementById("problema3").innerHTML = respuestaFInal;
};

function problema4(matrix){
    let printMatrix;
    let prom = 0;
    let matrixRowProm = new Array;

    for (let i = 0; i < matrix.length; i++){
        let acum = 0; 
        let count = 0;

        for(let j = 0; j < matrix[i].length; j++){
            suma += matrix[i][j];
            printMatrix += `${matrix[i][j]} `;
        }

        printMatrix += " <br> ";
        count = suma;
        prom = count/matrix[i].length;
        matrixRowProm.push((" " + prom.toFixed(2)));
    }

    let respuestaFInal = `Matriz original: ${printMatrix} <br> Promedios por renglón: <br> ${matrixRowProm}`;
    document.getElementById("problema4").innerHTML = respuestaFInal;
};

function problema5(numero){
    let aux = prompt("Ingresa un número para conocer su inverso.");
    numero = aux;
    let inverso = numero.split('').reverse().join('');

    let respuestaFInal = `El inverso del numero que ingresaste es : ${inverso}`;
    document.getElementById("problema5").innerHTML = respuestaFInal;
};

function problema6(){

};